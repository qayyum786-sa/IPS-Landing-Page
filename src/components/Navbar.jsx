import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',         to: '/',        scroll: null },
  { label: 'About',        to: '/',        scroll: '#highlights' },
  { label: 'Achievements', to: '/',        scroll: '#achievements' },
  { label: 'Branches',     to: '/',        scroll: '#branches' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  /* shadow on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* close mobile menu on resize */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const handleNavClick = (link) => {
    setOpen(false)
    if (link.scroll) {
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.querySelector(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-md shadow-purple-50/60'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* ── Brand ── */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/images/logo2.png"
              alt="IPS International"
              className="h-15 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-sm font-semibold text-ips-text hover:text-ips-purple
                           px-3 py-2 rounded-lg hover:bg-ips-purple-lt transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-purple text-xs px-5 py-2.5">
              Contact Us
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden border-t border-gray-100 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 py-3 space-y-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="w-full text-left text-sm font-semibold text-ips-text
                         hover:text-ips-purple hover:bg-ips-purple-lt
                         px-3 py-2.5 rounded-xl transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-purple w-full justify-center text-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
