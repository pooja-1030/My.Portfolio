import './Education.css'

const education = [
    {
        degree: 'BSc Computer Science & Mathematics',
        institution: 'Christ University, Bangalore',
        period: '2023 – 2026',
        status: 'Pursuing',
        statusColor: 'green',
        details: 'Specializing in Computer Science with strong foundations in Mathematics and analytical thinking.',
    },
    {
        degree: 'PUC (Pre-University Course)',
        institution: 'Karnataka State Board',
        period: '2021 – 2023',
        status: 'Completed',
        statusColor: 'blue',
        details: 'Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science.',
    },
    {
        degree: 'SSLC (10th Grade)',
        institution: 'Karnataka State Board',
        period: '2021',
        status: 'Completed',
        statusColor: 'blue',
        details: 'Strong academic foundation with excellence in Mathematics and Science.',
    },
]

export default function Education() {
    return (
        <section id="education" className="education section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Education</span>
                    <h2>My Academic Journey</h2>
                    <p className="section-desc">Building a strong foundation for my tech career</p>
                </div>

                <div className="edu-grid">
                    {education.map((edu, i) => (
                        <div key={i} className="edu-card glass-card">
                            <div className="edu-top">
                                <span className={`edu-status edu-status--${edu.statusColor}`}>{edu.status}</span>
                                <span className="edu-period">{edu.period}</span>
                            </div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <span className="edu-institution">{edu.institution}</span>
                            <p className="edu-details">{edu.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
