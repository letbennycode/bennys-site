# Story 6: Music Page

## Description
Create a music showcase page that displays your music production work using embedded players from SoundCloud, Spotify, and YouTube in a Tom Sachs-inspired minimal style.

## Acceptance Criteria
- [ ] Music page route created (`/music`)
- [ ] MusicEmbed component supports multiple platforms
- [ ] Grid or list layout for music items
- [ ] Each item displays: title, description, embed player
- [ ] Embeds are responsive and functional
- [ ] Layout matches Tom Sachs aesthetic (minimal, functional)
- [ ] Page is fully responsive

## Technical Details

### Components to Create
- `components/MusicEmbed.tsx` - Music embed component (handles different platforms)

### Files to Create
- `app/music/page.tsx` - Music showcase page

### Supported Platforms
- SoundCloud (iframe embed)
- Spotify (iframe embed)
- YouTube (iframe embed)

### Music Item Structure
```typescript
interface MusicItem {
  id: string;
  title: string;
  description?: string;
  platform: 'soundcloud' | 'spotify' | 'youtube';
  embedUrl: string;
  thumbnailUrl?: string;
}
```

### Layout Options
- Grid layout (responsive columns)
- List layout (vertical stack)
- Each item: title, description, embed player

### Design Requirements
- Minimal, functional presentation
- Clean spacing between items
- Responsive embed sizing
- Consistent with site aesthetic
- Focus on the music, not flashy design

## Dependencies
- Story 1: Project Setup
- Story 1.5: Design System & Aesthetic Foundation
- Story 2: Navigation & Footer

## Notes
- Test embeds from all supported platforms
- Ensure iframes are responsive (use aspect ratio techniques)
- Consider lazy loading for embeds
- Music data can be stored in a JSON file or TypeScript file initially
- Future: Could be moved to a CMS if needed
- Ensure embeds work on mobile devices
