import './Projects.css'

const projects = [
    {
        title: 'Fashion Landing Page',
        desc: 'A stunning, animated fashion brand landing page built with React and Framer Motion. Features a hero section, featured collections, smooth scroll effects, and a fully responsive design.',
        tech: ['React', 'Vite', 'Framer Motion', 'CSS3'],
        color: '#f472b6',
        github: 'https://github.com/',
        featured: true,
    },
    {
        title: 'E-Learning Platform',
        desc: 'A modern e-learning platform landing page with course listings, animations, and an engaging UI. Built with plain HTML, CSS, and JavaScript for ultra-fast performance.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        color: '#60a5fa',
        github: 'https://github.com/',
    },
    {
        title: 'Personal Portfolio v1',
        desc: 'The first iteration of my developer portfolio. A responsive, multi-section portfolio showcasing my skills, projects, and experience with a clean aesthetic.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        color: '#34d399',
        github: 'https://github.com/',
    },
    {
        title: 'Library Management System',
        desc: 'A full-stack library book lending system built with Rust (backend), SQLite (database), and plain HTML/JavaScript (frontend). Features a REST API, user auth, and book inventory management.',
        tech: ['Rust', 'SQLite', 'HTML', 'JavaScript'],
        color: '#fb923c',
        github: 'https://github.com/',
        featured: true,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Projects</span>
                    <h2>Things I've Built</h2>
                    <p className="section-desc">Real-world projects demonstrating my skills and creativity</p>
                </div>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.title} className={`project-card glass-card ${project.featured ? 'featured' : ''}`}>
                            {project.featured && <div className="featured-badge">Featured</div>}

                            <div className="project-header">
                                <a href={project.github} target="_blank" rel="noreferrer" className="project-github" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                            <div className="project-tech">
                                {project.tech.map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
