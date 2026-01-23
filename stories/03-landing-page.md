# Story 3: Landing Page

## Description
Build the landing page with a large hero image and a small "About Me" section. This is the first impression of the site and should embody the Tom Sachs aesthetic.

## Acceptance Criteria
- [ ] Hero section with large image (full viewport or large section)
- [ ] Hero image is optimized and responsive
- [ ] Small "About Me" section below hero
- [ ] Content positions you as a "creative and culture engineer"
- [ ] Clean, minimal layout matching Tom Sachs aesthetic
- [ ] Page is fully responsive
- [ ] Typography is bold and minimal

## Technical Details

### Components to Create
- `components/Hero.tsx` - Hero section component

### Files to Create/Modify
- `app/page.tsx` - Landing page implementation
- `public/images/hero.jpg` - Hero image (placeholder or actual image)

### Content Structure
1. **Hero Section**
   - Large background or featured image
   - Optional: Overlay text or minimal branding
   - Full viewport height or substantial section

2. **About Section**
   - Brief introduction
   - Emphasis on "creative and culture engineer"
   - Professional yet creative tone
   - Small, focused content block

### Design Requirements
- Minimal color palette
- Bold typography
- Generous whitespace
- Industrial/utilitarian feel
- Image should be high quality and optimized

## Dependencies
- Story 1: Project Setup
- Story 2: Navigation & Footer (for consistent layout)

## Notes
- Hero image should be optimized (use Next.js Image component)
- Consider using `next/image` for automatic optimization
- About section should be concise but impactful
- Test image loading and performance
- Ensure text is readable over hero image if using overlay
