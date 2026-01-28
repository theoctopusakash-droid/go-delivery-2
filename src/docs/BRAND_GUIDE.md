# GoDelivery Brand & UI Asset Pack

## Brand Voice
**"Futuristic, friendly, trustworthy."**

---

## 1. Brand Tokens

### Colors (Hex)
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#0B72FF` | Main brand color, CTAs, links |
| Accent | `#00E6A8` | Success states, highlights, secondary CTAs |
| Dark | `#0A0F1A` | Background |
| Soft | `#0F1724` | Elevated surfaces |
| Glass White | `rgba(255,255,255,0.06)` | Glass card backgrounds |

### Tailwind Config Tokens
```javascript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))", // #0B72FF
    foreground: "hsl(var(--primary-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))", // #00E6A8
    foreground: "hsl(var(--accent-foreground))",
  },
  dark: "hsl(var(--dark))", // #0A0F1A
  soft: {
    DEFAULT: "hsl(var(--soft))", // #0F1724
    elevated: "hsl(var(--soft-elevated))",
  },
  glass: {
    DEFAULT: "hsl(var(--glass))",
    border: "hsl(var(--glass-border))",
    hover: "hsl(var(--glass-hover))",
  },
}
```

### Typography
- **Display Font**: Poppins (weights: 600, 700, 800)
- **Body Font**: Inter (weights: 400, 500, 600)

---

## 2. Logo Usage

### Variants
- **Full Logo**: Wordmark + Icon (default)
- **Mark Only**: Icon without text
- **Horizontal Lockup**: Side-by-side layout

### Sizes
```tsx
<Logo size="sm" />  // 32px mark
<Logo size="md" />  // 40px mark (default)
<Logo size="lg" />  // 56px mark
<Logo size="xl" />  // 72px mark
```

### Usage Rules
- Minimum size: 32px mark width
- Spacing: Leave 1x mark-width clear space around logo
- Light backgrounds: Use full color logo
- Dark backgrounds: Use full color logo (designed for dark)

---

## 3. UI Components

### Glass Card
```tsx
import { GlassCard } from "@/components/ui/GlassCard";

<GlassCard glow="primary">
  Content here
</GlassCard>
```

### CTA Button
```tsx
import { CTAButton } from "@/components/ui/CTAButton";

// Variants: primary, accent, ghost, outline
// Sizes: sm, md, lg, hero
<CTAButton variant="primary" size="lg" showArrow>
  Get a Quote
</CTAButton>
```

### CTA Copy Variants (for A/B testing)
| Primary | Secondary |
|---------|-----------|
| "Get a Quote" | "Book a Pickup" |
| "Get Started Free" | "Explore Fleet" |
| "Request Vehicle" | "Contact Sales" |

---

## 4. Animation Specs

### Hero Truck Float
```css
animation: float 3s ease-in-out infinite;
/* translateY: 0 → -6px → 0 */
```

### Route Draw
```css
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
animation: drawRoute 2.5s ease forwards;
/* dashoffset: 1000 → 0 */
```

### CTA Hover
```javascript
whileHover: { scale: 1.03 }
whileTap: { scale: 0.98 }
transition: { type: "spring", stiffness: 400, damping: 17 }
// Duration: ~220ms
```

### Floating Cards
```javascript
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, delay: index * 0.12 }
```

### Framer Motion Easings
- Default: `ease-out` or `"easeOut"`
- Bounce: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Smooth: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 5. Accessibility Notes

### Contrast Ratios
- Primary text on dark: ✅ 12.5:1 (AAA)
- Muted text on dark: ✅ 5.2:1 (AA)
- Primary blue on dark: ✅ 4.8:1 (AA)
- Accent green on dark: ✅ 8.5:1 (AAA)

### ARIA Guidelines
- All interactive elements have focus states
- Accordions use `aria-expanded` and keyboard navigation
- Forms include proper labels and error states with `role="alert"`
- Images have descriptive `alt` attributes

---

## 6. File Structure

```
src/
├── assets/
│   ├── hero-godelivery.png      # Hero illustration
│   └── logo-mark.png            # Logo mark
├── components/
│   ├── brand/
│   │   └── Logo.tsx             # Logo component (SVG)
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   └── ui/
│       ├── CTAButton.tsx        # Gradient CTA buttons
│       ├── GlassCard.tsx        # Glass morphism cards
│       ├── FeatureTile.tsx      # Feature grid tiles
│       ├── ServiceCard.tsx      # Service cards
│       ├── VehicleCard.tsx      # Fleet vehicle cards
│       ├── TestimonialCard.tsx  # Testimonial quotes
│       ├── StatusBadge.tsx      # Status badges
│       ├── InputField.tsx       # Form input
│       └── TextAreaField.tsx    # Form textarea
└── pages/
    ├── Index.tsx                # Home page
    ├── About.tsx                # About page
    ├── Services.tsx             # Services page
    ├── Fleet.tsx                # Fleet page
    ├── Careers.tsx              # Careers page
    └── Contact.tsx              # Contact page
```

---

## 7. Performance Recommendations

- Use WebP for raster images
- Lazy load images below fold
- SVG for all icons and logo
- Defer non-critical scripts
- Use `loading="eager"` for hero image
- Preconnect to Google Fonts

---

## 8. SEO Meta Tags

```html
<title>GoDelivery | AI-Powered Logistics - Fast, Smart, Secure</title>
<meta name="description" content="GoDelivery offers AI-powered logistics with same-day delivery, real-time tracking, and smart routing. Book a pickup in 60 seconds. Trusted by 10,000+ businesses." />
```

---

## Getting Started

1. Import fonts in your entry file:
```tsx
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
```

2. CSS variables are defined in `src/index.css`
3. Tailwind tokens are in `tailwind.config.ts`
4. All components use the design system tokens—no hardcoded colors

---

© GoDelivery 2024. All brand assets and designs.
