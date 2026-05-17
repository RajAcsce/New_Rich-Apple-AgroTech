import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Hero Products', path: '/hero-products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent ? 'top-0 lg:top-[40px]' : 'top-0'
        }`}
        style={{
          height: '80px',
          backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 248, 240, 0.92)',
          backdropFilter: isTransparent ? 'none' : 'blur(12px)',
          WebkitBackdropFilter: isTransparent ? 'none' : 'blur(12px)',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(229, 226, 216, 0.6)',
        }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between" style={{ padding: '0 2rem' }}>
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/Rich Apple Logo.png" 
              alt="Rich Apple Logo" 
              className="h-10 w-auto object-contain rounded-sm"
              style={{ filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
            />
            <div className="flex flex-col">
              <span
                className="font-sans text-lg font-bold tracking-wider transition-colors duration-300"
                style={{
                  color: isTransparent ? '#ffffff' : '#272c1d',
                  fontSize: '18px',
                  letterSpacing: '0.04em',
                }}
              >
                RICH APPLE
              </span>
              <span
                className="font-sans text-xs font-medium transition-colors duration-300"
                style={{
                  color: isTransparent ? 'rgba(255,255,255,0.5)' : 'rgba(39, 44, 29, 0.5)',
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                }}
              >
                AGROTECH INDIA PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" style={{ gap: '32px' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative font-sans font-medium text-sm transition-colors duration-300 hover:text-accent"
                  style={{
                    color: isActive ? '#bc6c18' : isTransparent ? '#ffffff' : '#272c1d',
                    fontSize: '15px',
                    letterSpacing: '0.01em',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid #bc6c18' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: isTransparent ? '#ffffff' : '#272c1d' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ backgroundColor: '#faf8f0' }}
        >
          <nav className="flex flex-col items-center" style={{ gap: '36px' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans font-medium transition-all duration-300 hover:text-accent"
                style={{
                  color: location.pathname === link.path ? '#bc6c18' : '#272c1d',
                  fontSize: '36px',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
