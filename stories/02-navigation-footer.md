# Story 2: Navigation & Footer

## Description
Create the Tom Sachs-inspired navigation system and footer component with social links. This establishes the core site structure and navigation pattern.

## Acceptance Criteria
- [ ] Navigation component matches Tom Sachs aesthetic (minimal, bold typography)
- [ ] Navigation includes: HOME, ABOUT, ARTICLES, MUSIC, CONTACT
- [ ] Hamburger menu for mobile responsiveness
- [ ] Navigation is sticky/fixed at top
- [ ] Footer component with LinkedIn and YouTube links
- [ ] Footer integrated into root layout
- [ ] Navigation and footer are responsive
- [ ] Components are typed with TypeScript

## Technical Details

### Components to Create
- `components/Navigation.tsx` - Main navigation component
- `components/Footer.tsx` - Footer with social links

### Files to Modify
- `app/layout.tsx` - Add Navigation and Footer components

### Design Requirements
- Minimal, industrial aesthetic
- Bold, uppercase typography for navigation items
- Clean spacing and layout
- Mobile-first responsive design
- Hamburger menu icon for mobile (can use SVG or icon library)

### Navigation Structure
```typescript
const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'ARTICLES', href: '/articles' },
  { label: 'MUSIC', href: '/music' },
  { label: 'CONTACT', href: '/contact' }
]
```

### Footer Links
- LinkedIn: (URL to be provided)
- YouTube: (URL to be provided)

## Dependencies
- Story 1: Project Setup (must be complete)

## Notes
- Keep navigation minimal and functional
- Ensure accessibility (keyboard navigation, ARIA labels)
- Test on mobile and desktop viewports
- Consider using Next.js Link component for client-side navigation
