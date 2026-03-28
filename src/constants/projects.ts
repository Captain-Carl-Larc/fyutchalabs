// ============================================
// PROJECTS
// Hardcoded portfolio items.
// Add a new object to the array for each project.
// ============================================

export type Project = {
  slug:            string
  title:           string
  description:     string
  cover_image_url: string   // put images in /public/images/projects/
  tech_stack:      string[]
  project_url?:    string   // live URL — optional
  is_featured:     boolean  // true = shown on homepage preview
}

export const PROJECTS: Project[] = [
  {
    slug:            'project-one',
    title:           'Project One',
    description:     'Brief description of what this project was, the problem it solved, and the result.',
    cover_image_url: '/images/projects/project-one.jpg',
    tech_stack:      ['Next.js', 'Tailwind', 'PostgreSQL'],
    project_url:     'https://example.com',
    is_featured:     true,
  },
  {
    slug:            'project-two',
    title:           'Project Two',
    description:     'Brief description of what this project was.',
    cover_image_url: '/images/projects/project-two.jpg',
    tech_stack:      ['Next.js', 'Tailwind'],
    is_featured:     false,
  },
  // Add more projects here
]

// Helper — get featured projects for homepage
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.is_featured)
}