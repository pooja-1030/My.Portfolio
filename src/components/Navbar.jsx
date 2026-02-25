import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setActive(href)
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner container">
                <a href="#hero" className="nav-logo" onClick={() => handleNav('')}>
                    Pooja Gowda V
                </a>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={active === link.href ? 'active' : ''}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:poojachalam1030@gmail.com"
                            className="nav-cta"
                            onClick={() => setMenuOpen(false)}
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(p => !p)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
