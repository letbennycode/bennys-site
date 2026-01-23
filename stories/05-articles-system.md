# Story 5: Articles System

## Description
Implement a complete articles system using markdown files. This includes article listing, individual article pages, and markdown parsing utilities.

## Acceptance Criteria
- [ ] Articles listing page displays all articles
- [ ] Individual article pages render markdown content
- [ ] Markdown files are parsed correctly
- [ ] Article metadata (title, date, excerpt) is extracted
- [ ] ArticleCard component displays article previews
- [ ] Articles are sorted by date (newest first)
- [ ] Responsive article layouts
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
- `components/ArticleCard.tsx` - Article preview card component

### Files to Create
- `app/articles/page.tsx` - Articles listing page
- `app/articles/[slug]/page.tsx` - Dynamic article page
- `lib/articles.ts` - Article parsing and utility functions
- `content/articles/` - Directory for markdown files
- `content/articles/example-article.md` - Example article with frontmatter

### Article Markdown Structure
```markdown
---
title: "Article Title"
date: "2026-01-23"
excerpt: "Brief description of the article"
---

Article content in markdown format...
```

### Utility Functions Needed
- `getAllArticles()` - Get all articles with metadata
- `getArticleBySlug(slug)` - Get single article by slug
- `parseMarkdown(content)` - Parse markdown to HTML/React

### Features
- Article listing with cards
- Individual article pages with full content
- Date-based sorting
- Excerpt generation
- Slug-based routing

## Dependencies
- Story 1: Project Setup
- Story 2: Navigation & Footer

## Notes
- Use gray-matter for frontmatter parsing
- Use react-markdown for safe markdown rendering
- Consider syntax highlighting for code blocks (optional)
- Ensure markdown is sanitized for security
- Test with multiple articles
- Create at least one example article for testing
