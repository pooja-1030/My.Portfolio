import './Achievements.css'

const achievements = [
    {
        icon: '🏆',
        title: 'Prodigy Infotech Internship',
        desc: 'Successfully completed a frontend development internship, delivering production-ready features and receiving commendation from mentors.',
        color: '#f59e0b',
    },
    {
        icon: '🚀',
        title: 'Full-Stack Rust Project',
        desc: 'Built a complete library management system with Rust backend, SQLite, and REST API — demonstrating backend expertise.',
        color: '#8b5cf6',
    },
    {
        icon: '🎨',
        title: '4+ Live Projects',
        desc: 'Shipped multiple production-quality web projects including a fashion landing page, e-learning platform, and personal portfolio.',
        color: '#06b6d4',
    },
    {
        icon: '📖',
        title: 'Academic Excellence',
        desc: 'Maintaining strong academic performance at Christ University while actively building real-world projects and expanding skills.',
        color: '#34d399',
    },
]

export default function Achievements() {
    return (
        <section id="achievements" className="achievements section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2>Milestones & Wins</h2>
                    <p className="section-desc">Key accomplishments that define my journey so far</p>
                </div>

                <div className="ach-grid">
                    {achievements.map((ach, i) => (
                        <div key={i} className="ach-card glass-card">
                            <div className="ach-accent" style={{ background: ach.color }} />
                            <span className="ach-icon">{ach.icon}</span>
                            <h3 className="ach-title">{ach.title}</h3>
                            <p className="ach-desc">{ach.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
