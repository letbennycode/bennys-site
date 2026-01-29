# Story 5: Works System

## Description
Implement a complete works system using markdown files. This includes work listing, individual work pages, and markdown parsing utilities.

## Acceptance Criteria
- [ ] Works listing page displays all works
- [ ] Individual work pages render markdown content
- [ ] Markdown files are parsed correctly
- [ ] Work metadata (title, date, excerpt) is extracted
- [ ] WorksCard component displays work previews
- [ ] Works are sorted by date (newest first)
- [ ] Responsive work layouts
- [ ] Markdown content is properly styled

## Technical Details

### Dependencies to Install
```json
{
  "dependencies": {
    "gray-matter": "^4.0.0",
    "remark": "^15.0.0",
    "remark-html": "^16.0.0",
    "react-markdown": "^9.0.0"
  }
}
```

### Components to Create
- `components/WorksCard.tsx` - Work preview card component

### Files to Create
- `app/works/page.tsx` - Works listing page
- `app/works/[slug]/page.tsx` - Dynamic work page
- `lib/works.ts` - Work parsing and utility functions
- `content/works/` - Directory for markdown files
- `content/works/example-article.md` - Example work with frontmatter

### Work Markdown Structure
```markdown
---
title: "Work Title"
date: "2026-01-23"
excerpt: "Brief description of the work"
---

Work content in markdown format...
```

### Utility Functions Needed
- `getAllWorks()` - Get all works with metadata
- `getWorkBySlug(slug)` - Get single work by slug
- `parseMarkdown(content)` - Parse markdown to HTML/React

### Features
- Work listing with cards
- Individual work pages with full content
- Date-based sorting
- Excerpt generation
- Slug-based routing

## Dependencies
- Story 1: Project Setup
- Story 1.5: Design System & Aesthetic Foundation
- Story 2: Navigation & Footer

## Notes
- Use gray-matter for frontmatter parsing
- Use react-markdown for safe markdown rendering
- Consider syntax highlighting for code blocks (optional)
- Ensure markdown is sanitized for security
- Test with multiple works
- Create at least one example work for testing
