import { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Contact</span>
                    <h2>Get in Touch</h2>
                    <p className="section-desc">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </div>

                <div className="contact-grid">
                    {/* Info cards */}
                    <div className="contact-info">
                        <div className="contact-card glass-card">
                            <span className="contact-icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:poojachalam1030@gmail.com">poojachalam1030@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-card glass-card">
                            <span className="contact-icon">💼</span>
                            <div>
                                <h4>LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/pooja-gowda-2376a82a4/" target="_blank" rel="noreferrer">linkedin.com/in/pooja-gowda</a>
                            </div>
                        </div>

                        <div className="contact-card glass-card">
                            <span className="contact-icon">🗂️</span>
                            <div>
                                <h4>GitHub</h4>
                                <a href="https://github.com/pooja-1030" target="_blank" rel="noreferrer">github.com/pooja-1030</a>
                            </div>
                        </div>

                        <div className="availability-badge">
                            <span className="avail-dot" />
                            Currently available for freelance & full-time roles
                        </div>
                    </div>

                    {/* Form */}
                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <h3>Send a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name" name="name" type="text" placeholder="John Doe"
                                value={form.name} onChange={handleChange} required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                id="email" name="email" type="email" placeholder="john@example.com"
                                value={form.email} onChange={handleChange} required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message" name="message" rows="5" placeholder="Hey Pooja, I'd love to work with you on…"
                                value={form.message} onChange={handleChange} required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            {sent ? '✓ Message Sent!' : 'Send Message'}
                        </button>

                        {sent && <p className="sent-msg">Thanks! I'll get back to you soon 🎉</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}
