import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDirectory = path.join(process.cwd(), 'content/works')

export interface Work {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getAllWorks(): Work[] {
  if (!fs.existsSync(worksDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(worksDirectory)
  const works = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(worksDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
      }
    })

  return works.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getWorkBySlug(slug: string): Work | null {
  const fullPath = path.join(worksDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content,
  }
}
