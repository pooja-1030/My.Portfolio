import { useEffect, useRef } from 'react'
import './Skills.css'

const techSkills = [
    { name: 'React.js', level: 85, color: '#61dafb' },
    { name: 'JavaScript', level: 82, color: '#f7df1e' },
    { name: 'HTML & CSS', level: 90, color: '#e34f26' },
    { name: 'Node.js', level: 70, color: '#68d391' },
    { name: 'Rust', level: 60, color: '#f4a261' },
    { name: 'Python', level: 65, color: '#a78bfa' },
]

const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Critical Thinking', 'Time Management', 'Adaptability',
    'Attention to Detail', 'Creativity',
]

const tools = [
    { name: 'Git & GitHub' },
    { name: 'VS Code' },
    { name: 'Figma' },
    { name: 'Vite' },
    { name: 'npm / yarn' },
    { name: 'Postman' },
]

export default function Skills() {
    const barsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.level + '%'
                }
            })
        }, { threshold: 0.3 })

        barsRef.current.forEach(bar => bar && observer.observe(bar))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Skills</span>
                    <h2>What I Work With</h2>
                    <p className="section-desc">Technologies, tools, and soft skills that make me effective</p>
                </div>

                <div className="skills-grid">
                    {/* Tech skills */}
                    <div className="skills-block glass-card">
                        <h3 className="skills-block-title">Technical Skills</h3>
                        <div className="skill-bars">
                            {techSkills.map((skill, i) => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            data-level={skill.level}
                                            ref={el => barsRef.current[i] = el}
                                            style={{ '--bar-color': skill.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="skills-right">
                        {/* Soft skills */}
                        <div className="skills-block glass-card">
                            <h3 className="skills-block-title">Soft Skills</h3>
                            <div className="soft-skills">
                                {softSkills.map(skill => (
                                    <span key={skill} className="soft-badge">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="skills-block glass-card">
                            <h3 className="skills-block-title">Tools & Platforms</h3>
                            <div className="tools-grid">
                                {tools.map(tool => (
                                    <div key={tool.name} className="tool-item">
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
