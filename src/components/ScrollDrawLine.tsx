import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import scooterImg from "@/assets/scooter-top.png";
import { TreePine, TreeDeciduous } from "lucide-react";

/**
 * Wraps children with a dynamic SVG path that S-curves around content blocks.
 * Uses exact physical dimensions to ensure the SVG drawn stroke perfectly tracks
 * with the mathematical sample coordinates, avoiding skew due to aspect ratio stretching.
 */
export function ScrollDrawLine({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [dimensions, setDimensions] = useState({ width: 1000, height: 4000 });
  const [totalLen, setTotalLen] = useState(1);
  const [pathStr, setPathStr] = useState("M 50 0 L 50 1000");
  const [sectionBounds, setSectionBounds] = useState<{top: number, bottom: number, title: string}[]>([]);
  const [activeTitle, setActiveTitle] = useState("");
  const activeTitleRef = useRef("");
  const [trees, setTrees] = useState<{x: number, y: number, Icon: any, scale: number}[]>([]);
  const [pathLut, setPathLut] = useState<{l: number, y: number}[]>([]);

  // Measure dynamic physical dimensions to avoid aspect ratio skew between math & CSS
  // and dynamically generate the path exactly at the padding boundaries of enclosed sections!
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(() => {
      const el = ref.current;
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      setDimensions({ width: w, height: h });

      // Find all child sections to exactly locate their boundaries
      const sections = Array.from(el.querySelectorAll("section"));
      if (sections.length === 0) return;

      // Collect bounds and titles
      const bounds = sections.map(sec => ({
        top: sec.offsetTop,
        bottom: sec.offsetTop + sec.offsetHeight,
        title: sec.getAttribute("data-scooty-title") || ""
      }));
      setSectionBounds(bounds);

      // Push road exactly to the edges to avoid cutting content
      const isMobileSize = w < 768;
      const edgeOffset = isMobileSize ? 25 : Math.max(40, w * 0.04);
      const leftX = edgeOffset;
      const rightX = w - edgeOffset;

      let d = "";
      if (isMobileSize) {
        // Find the index of sections where we want the road to turn
        const whyChooseUsIndex = sections.findIndex(s => s.getAttribute("data-scooty-title") === "Why Choose Us");
        const testimonialsIndex = sections.findIndex(s => s.getAttribute("data-scooty-title") === "Testimonials");
        const hubLocationsIndex = sections.findIndex(s => s.getAttribute("data-scooty-title") === "Hub Locations");
        
        d = `M ${rightX} 0`;
        let currentSide = "right";

        for (let i = 1; i < sections.length; i++) {
          let section = sections[i];
          let seamY = section.offsetTop;
          let prevSeamY = i === 1 ? 0 : sections[i-1].offsetTop;

          if (i === whyChooseUsIndex || i === testimonialsIndex || i === hubLocationsIndex) {
            // Take a turn to the other side here
            let startX = currentSide === "right" ? rightX : leftX;
            let endX = currentSide === "right" ? leftX : rightX;
            
            const distanceToPrev = seamY - prevSeamY;
            const distanceToNext = (i < sections.length - 1 ? sections[i+1].offsetTop : h) - seamY;
            const maxCurveY = Math.min(150, distanceToPrev * 0.4, distanceToNext * 0.4);

            let startY = seamY - maxCurveY;
            let endY = seamY + maxCurveY;

            d += ` L ${startX} ${startY}`;
            d += ` C ${startX} ${seamY}, ${endX} ${seamY}, ${endX} ${endY}`;
            currentSide = currentSide === "right" ? "left" : "right";
          }
        }
        
        let finalX = currentSide === "left" ? leftX : rightX;
        d += ` L ${finalX} ${h + 100}`;
      } else {
        d = `M ${leftX} 0`;
        let currentSide = "left";

        for (let i = 1; i < sections.length; i++) {
          let section = sections[i];
          let seamY = section.offsetTop; // The exact pixel boundary between section i-1 and section i
          let prevSeamY = i === 1 ? 0 : sections[i-1].offsetTop;
          
          let startX = currentSide === "left" ? leftX : rightX;
          let endX = currentSide === "left" ? rightX : leftX;

          // Dynamically calculate curveY to prevent kinks. Max 150, but never more than 40% of the distance to previous/next seam
          const distanceToPrev = seamY - prevSeamY;
          const distanceToNext = (i < sections.length - 1 ? sections[i+1].offsetTop : h) - seamY;
          const maxCurveY = Math.min(150, distanceToPrev * 0.4, distanceToNext * 0.4);

          let startY = seamY - maxCurveY;
          let endY = seamY + maxCurveY;

          // Line down to just before the padding boundary seam
          d += ` L ${startX} ${startY}`;
          // Smooth cubic lane change exactly through the boundary seam
          d += ` C ${startX} ${seamY}, ${endX} ${seamY}, ${endX} ${endY}`;

          currentSide = currentSide === "left" ? "right" : "left";
        }

        // Finish straight line to the very bottom
        let finalX = currentSide === "left" ? leftX : rightX;
        d += ` L ${finalX} ${h + 100}`; 
      }

      setPathStr(d);
    });
    
    // Observe everything that could change height
    observer.observe(ref.current);
    const sections = ref.current.querySelectorAll("section");
    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Responsive spring to eliminate lag (stops running away when scrolling stops)
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100, // Quick response
    damping: 30,    // No bouncing
    mass: 1,        // Normal inertia
  });

  // Update total length and generate trees dynamically whenever path resizes
  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength() || 1;
      setTotalLen(len);

      // Build Lookup Table for monotonic mapping of Y coordinate to Path Length
      // This ensures the scooter perfectly tracks vertical scroll without desyncing.
      const newLut = [];
      for (let l = 0; l <= len; l += 10) {
        newLut.push({ l, y: pathRef.current.getPointAtLength(l).y });
      }
      newLut.push({ l: len, y: pathRef.current.getPointAtLength(len).y });
      setPathLut(newLut);

      // Generate decorative trees along the path
      const isMobileSize = dimensions.width < 768;
      const newTrees = [];
      const treeSpacing = isMobileSize ? 350 : 250; // Place a tree roughly every 250px (more spaced on mobile)
      let isLeft = true;
      
      for (let d = 150; d < len - 150; d += treeSpacing) {
        const pt = pathRef.current.getPointAtLength(d);
        const ahead = pathRef.current.getPointAtLength(Math.min(len, d + 1));
        const angle = Math.atan2(ahead.y - pt.y, ahead.x - pt.x);
        
        // Offset normal by 90 degrees
        let sideMultiplier;
        if (isMobileSize) {
          if (pt.x > dimensions.width / 2) {
             // Road on Right -> Trees on Left
             sideMultiplier = Math.PI / 2;
          } else {
             // Road on Left -> Trees on Right
             sideMultiplier = -Math.PI / 2;
          }
        } else {
          sideMultiplier = isLeft ? -Math.PI / 2 : Math.PI / 2;
        }

        const offsetAngle = angle + sideMultiplier;
        // Distance from center of road
        const offsetDist = isMobileSize ? (25 + Math.random() * 15) : (45 + Math.random() * 20); 
        
        newTrees.push({
          x: pt.x + Math.cos(offsetAngle) * offsetDist,
          y: pt.y + Math.sin(offsetAngle) * offsetDist,
          Icon: Math.random() > 0.5 ? TreePine : TreeDeciduous,
          scale: (isMobileSize ? 0.6 : 0.8) + Math.random() * 0.6
        });
        
        isLeft = !isLeft; // Alternate sides
      }
      setTrees(newTrees);
    }
  }, [dimensions, pathStr]);

  const facingDir = useMotionValue(1);

  useMotionValueEvent(smooth, "change", (t) => {
    const v = smooth.getVelocity();
    if (v > 0.01) facingDir.set(1);
    else if (v < -0.01) facingDir.set(-1);

    // Find active section
    const pt = sampleAt(t);
    const active = sectionBounds.find(b => pt.y >= b.top && pt.y < b.bottom);
    const newTitle = active?.title || "";
    
    if (newTitle !== activeTitleRef.current) {
      activeTitleRef.current = newTitle;
      setActiveTitle(newTitle);
    }
  });

  const sampleAt = (t: number) => {
    const p = pathRef.current;
    if (!p || totalLen <= 1 || pathLut.length === 0) return { x: dimensions.width * 0.15, y: 0, angle: 90 };
    
    // Target Y based directly on scroll progress (guarantees it stays in viewport)
    const targetY = Math.max(0, Math.min(1, t)) * dimensions.height;
    
    // Binary search for the length 'l' that corresponds to targetY
    let low = 0;
    let high = pathLut.length - 1;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (pathLut[mid].y < targetY) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    
    const l = pathLut[low].l;
    
    const pt = p.getPointAtLength(l);
    const ahead = p.getPointAtLength(Math.min(totalLen, l + 5));
    const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
    return { x: pt.x, y: pt.y, angle };
  };

  const xAbs = useTransform(smooth, (t) => `${sampleAt(t).x}px`);
  const yAbs = useTransform(smooth, (t) => `${sampleAt(t).y}px`);

  // (No longer animating stroke draw, so strokeDasharray/offset are removed)

  // The native image points DOWN (handle at bottom, back tire at top).
  // If moving down (angle 90), we want 0. So subtract 90.
  // If user scrolls UP, flip by 180.
  const rotate = useTransform(() => {
    const t = smooth.get();
    const dir = facingDir.get();
    let ang = sampleAt(t).angle - 90;
    if (dir === -1) {
      ang += 180;
    }
    return `${ang}deg`;
  });

  const bubbleX = useTransform(smooth, (t) => {
    const pt = sampleAt(t);
    const isMobileRender = dimensions.width > 0 && dimensions.width < 768;
    if (isMobileRender) {
      if (pt.x > dimensions.width / 2) return "-90%";
      return "-10%";
    }
    return "-50%";
  });

  const tailLeft = useTransform(smooth, (t) => {
    const pt = sampleAt(t);
    const isMobileRender = dimensions.width > 0 && dimensions.width < 768;
    if (isMobileRender) {
      if (pt.x > dimensions.width / 2) return "90%";
      return "10%";
    }
    return "50%";
  });

  const isMobileRender = dimensions.width > 0 && dimensions.width < 768;

  return (
    <div ref={ref} className="relative overflow-x-clip">
      <div className="relative z-10">{children}</div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 block"
      >
        <svg
          className="h-full w-full"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          fill="none"
        >
          {/* Road Outer Border (White) */}
          <path
            d={pathStr}
            stroke="#ffffff"
            strokeWidth={isMobileRender ? "30" : "60"}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 10px 15px rgba(0,0,0,0.1))"
          />
          {/* Road Asphalt (Dark Grey) */}
          <path
            d={pathStr}
            stroke="#333333"
            strokeWidth={isMobileRender ? "24" : "52"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Road Center Dashed Line */}
          <path
            d={pathStr}
            stroke="#ffffff"
            strokeWidth={isMobileRender ? "2" : "3"}
            strokeDasharray={isMobileRender ? "12 12" : "24 24"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Invisible path to calculate length accurately for the scooter */}
          <path
            ref={pathRef}
            d={pathStr}
            stroke="transparent"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Decorative Trees */}
        {trees.map((tree, i) => (
          <div
            key={i}
            className="absolute z-10 drop-shadow-lg"
            style={{
              left: tree.x,
              top: tree.y,
              transform: `translate(-50%, -50%) scale(${tree.scale})`,
            }}
          >
            <tree.Icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 fill-emerald-600/20" strokeWidth={1.5} />
          </div>
        ))}

        {/* Scooter rides the exact physical track */}
        <motion.div
          className="absolute z-40"
          style={{
            left: xAbs,
            top: yAbs,
            x: "-50%",
            y: "-5%", // Anchored to back tire
            originX: 0.5,
            originY: 0.05,
            rotate,
          }}
        >
          <img
            src={scooterImg}
            alt=""
            className={`${isMobileRender ? "h-14 w-14" : "h-20 w-20"} lg:h-28 lg:w-28 object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]`}
          />
        </motion.div>

        {/* Text Bubble - Separate motion div bound to same coordinates but not rotated */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          style={{
            left: xAbs,
            top: yAbs,
            x: bubbleX,
            y: "-100%", // Place it above the scooter
          }}
        >
          <div 
            className={`mb-10 md:mb-14 lg:mb-20 bg-white border-2 border-primary text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-xl font-bold text-xs md:text-sm lg:text-base transition-all duration-300 origin-bottom flex items-center justify-center min-w-max ${
              activeTitle ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"
            }`}
          >
            {activeTitle}
            {/* Bubble Tail */}
            <motion.div 
              className="absolute top-full -translate-x-1/2 -mt-[2px] w-4 h-4 bg-white border-b-2 border-r-2 border-primary rotate-45 rounded-sm"
              style={{ left: tailLeft }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ScrollDrawLine;
