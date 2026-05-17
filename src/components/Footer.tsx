import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Hero Products', path: '/hero-products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
]

const heroProductLinks = [
  'INDIRA Plant Booster',
  'INDIRA Drip Special',
  'INDIRA Granules',
  'INDIRA Pro Maxx',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '5rem 2rem 3rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '40px' }}>
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/Rich Apple Logo.png" 
                alt="Rich Apple Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl" style={{ color: '#ffffff', letterSpacing: '0.04em' }}>
                  RICH APPLE
                </span>
                <span className="font-sans font-medium text-xs" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                  AGROTECH INDIA PVT. LTD.
                </span>
              </div>
            </div>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.55)', marginTop: '1rem', lineHeight: 1.7 }}>
              Experience-Led Agriculture. Technology-Driven Growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-lg" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Products */}
          <div>
            <h4 className="font-sans font-medium text-lg" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              Hero Products
            </h4>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              {heroProductLinks.map((product) => (
                <li key={product}>
                  <Link
                    to="/hero-products"
                    className="font-sans text-sm transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-medium text-lg" style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
              Contact
            </h4>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Om Gita Residency, Behind Ganapti Mandir, Vishrambag<br />
                At Post – Sangli, Taluka – Miraj<br />
                Dist. – Sangli, Maharashtra – 416416
              </p>
              <a
                href="tel:+918421532100"
                className="font-sans text-sm transition-colors duration-300 hover:text-accent"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                +91 84215 32100
              </a>
              <a
                href="mailto:info.richapple@gmail.com"
                className="font-sans text-sm transition-colors duration-300 hover:text-accent"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                info.richapple@gmail.com
              </a>
              <div className="flex flex-col" style={{ gap: '4px' }}>
                <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Mon – Sat: 10:00 AM – 6:00 PM
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <span className="font-sans font-medium text-sm block" style={{ color: '#ffffff', marginBottom: '0.8rem' }}>
                    Follow Us
                  </span>
                  <div className="flex items-center" style={{ gap: '16px' }}>
                    {[
                      { icon: Facebook, href: 'https://www.facebook.com/people/Rich-Apple-Agrotech-India-Pvt-Ltd/61587287895294/' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/company/rich-apple-agrotech-pvt-ltd/posts/?feedView=all' },
                      { icon: Instagram, href: '#' },
                      { icon: Youtube, href: 'https://www.youtube.com/channel/UC_mhChRm63bEnvFVc-WPZgg' }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target={social.href !== '#' ? "_blank" : undefined}
                        rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                        className="transition-colors duration-300 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            marginTop: '3rem',
          }}
        >
          <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Rich Apple Agrotech India Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
