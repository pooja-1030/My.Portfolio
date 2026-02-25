import './About.css'

const strengths = [
    { icon: '🎯', title: 'Problem Solver', desc: 'I love breaking down complex problems into clean, efficient solutions.' },
    { icon: '🎨', title: 'Design-Minded', desc: 'I care deeply about UX and build interfaces that feel as good as they look.' },
    { icon: '📚', title: 'Continuous Learner', desc: 'Always exploring new technologies and expanding my skill set every day.' },
    { icon: '🤝', title: 'Team Player', desc: 'I thrive in collaborative environments and contribute positively to any team.' },
]

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2>Who I Am</h2>
                    <p className="section-desc">A passionate developer building meaningful digital experiences</p>
                </div>

                <div className="about-grid">
                    <div className="about-story">
                        <div className="story-card glass-card">
                            <div className="story-accent" />
                            <h3>My Journey</h3>
                            <p>
                                I'm <strong>Pooja Gowda V</strong>, a Computer Science and Mathematics student at
                                Christ University, Bangalore, with a deep passion for full-stack web development.
                            </p>
                            <p>
                                My journey started with curiosity about how the web works, which evolved into
                                building real-world projects — from fashion landing pages to a library management
                                system in Rust. Every project has taught me something new.
                            </p>
                            <p>
                                I completed my internship at <strong>Prodigy Infotech</strong>, where I honed
                                my frontend skills and delivered production-ready features. I believe in
                                writing clean, maintainable code and crafting experiences that users love.
                            </p>

                            <div className="about-quick">
                                {[
                                    { label: '🎓 University', value: 'Christ University, Bangalore' },
                                    { label: '📍 Location', value: 'Bangalore, Karnataka' },
                                    { label: '💼 Status', value: 'Open to Opportunities' },
                                    { label: '⚡ Interests', value: 'React, Node.js, UI/UX Design' },
                                ].map(item => (
                                    <div key={item.label} className="quick-item">
                                        <span className="quick-label">{item.label}</span>
                                        <span className="quick-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="btn btn-primary about-cta">Let's Connect</a>
                        </div>
                    </div>

                    <div className="about-strengths">
                        {strengths.map(s => (
                            <div key={s.title} className="strength-card glass-card">
                                <span className="strength-icon">{s.icon}</span>
                                <div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
