import './Experience.css'

const experiences = [
    {
        role: 'Frontend Developer Intern',
        company: 'Prodigy Infotech',
        period: 'Jun 2025 – Aug 2025',
        type: 'Internship',
        points: [
            'Built responsive web interfaces using React.js and modern CSS techniques',
            'Collaborated with the design team to implement pixel-perfect UI components',
            'Optimized page load performance, achieving 30% faster render times',
            'Participated in code reviews and agile sprint planning sessions',
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Experience</span>
                    <h2>Where I've Worked</h2>
                    <p className="section-desc">Professional experience and internships that shaped my career</p>
                </div>

                <div className="exp-timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-item">
                            <div className="exp-dot" />
                            <div className="exp-card glass-card">
                                <div className="exp-top">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <span className="exp-company">{exp.company}</span>
                                    </div>
                                    <div className="exp-meta">
                                        <span className="exp-period">{exp.period}</span>
                                        <span className="exp-type">{exp.type}</span>
                                    </div>
                                </div>
                                <ul className="exp-points">
                                    {exp.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
