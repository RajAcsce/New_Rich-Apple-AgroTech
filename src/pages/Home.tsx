import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChevronDown,
  Sprout,
  Settings,
  Smartphone,
  TrendingUp,
  Leaf,
  BarChart3,
  Check,
  Users,
  Handshake,
  Briefcase,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

/* ─── Hero Section ─── */
function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroContent = contentRef.current
    if (!heroContent) return

    // Hero content entrance animation
    gsap.fromTo(heroContent, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0%)', duration: 1.2, ease: 'power3.inOut', delay: 0.3 })
  }, [])

  return (
    <>
      <div className="hero-section relative w-full flex items-center justify-center overflow-hidden" style={{ height: '100vh', backgroundColor: '#0a0a0a', zIndex: 2 }}>
      {/* Full-screen sugarcane background image with optimized overlay */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <img
          src="/images/sugarcane_farming.png"
          alt="Sugarcane Farming"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
      </div>
        <div
          ref={contentRef}
          className="relative z-10 text-center flex flex-col items-center"
          style={{ maxWidth: '900px', padding: '0 2rem' }}
        >
          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#bc6c18', marginBottom: '1.5rem' }}
          >
            Experience-Led Agriculture
          </span>

          <h1 className="text-white" style={{ marginBottom: '1.5rem' }}>
            <span className="font-sans font-medium block" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              An
            </span>
            <span className="font-serif font-bold block" style={{ fontSize: 'clamp(40px, 7vw, 96px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              AgriTech Company
            </span>
            <span className="font-sans font-medium block" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              from India
            </span>
          </h1>

          <p
            className="font-sans"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '580px',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            Empowering farmers, restoring soil health, and enabling sustainable growth — built on 15+ years of agricultural expertise.
          </p>

          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}
          >
            Founded December 2025 | Made for India | Scalable Globally
          </span>

          <div className="flex flex-wrap justify-center" style={{ gap: '1rem', marginBottom: '3rem' }}>
            <Link
              to="/hero-products"
              className="font-sans font-medium inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: '#bc6c18',
                color: '#ffffff',
                borderRadius: '4px',
                padding: '14px 32px',
                fontSize: '16px',
              }}
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="font-sans font-medium inline-flex items-center justify-center transition-all duration-300 hover:bg-white"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '4px',
                padding: '14px 32px',
                fontSize: '16px',
              }}
            >
              Partner With Us
            </Link>
          </div>

          <ChevronDown className="animate-scroll-down" size={24} style={{ color: 'rgba(255,255,255,0.5)' }} />
        </div>
      </div>

      {/* Content Panel (slides up on scroll) */}
      <div
        className="content-panel relative w-full rounded-t-2xl md:rounded-t-2xl"
        style={{
          zIndex: 3,
          background: 'rgba(255, 252, 240, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          margin: '0 auto',
        }}
      >
        <div className="panel-content max-w-[1280px] mx-auto" style={{ padding: '4rem 2rem' }}>
          {/* About Preview inside panel */}
          <AboutPreview />
        </div>
      </div>
    </>
  )
}

/* ─── About Preview ─── */
function AboutPreview() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '60px' }}>
      <div className="relative">
        <img
          src="/images/about-soil.jpg"
          alt="Farmer holding healthy soil"
          className="w-full object-cover"
          style={{
            aspectRatio: '3/2',
            borderRadius: '0 16px 16px 0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
        />
        <span
          className="absolute font-sans font-medium"
          style={{
            bottom: '-20px',
            left: '-20px',
            backgroundColor: '#ffffff',
            padding: '8px 16px',
            border: '1px solid #e5e2d8',
            fontSize: '13px',
            letterSpacing: '0.06em',
            color: '#5c6642',
            textTransform: 'uppercase',
          }}
        >
          Since December 2025
        </span>
      </div>

      <div>
        <span
          className="font-sans font-medium uppercase block"
          style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}
        >
          ABOUT US
        </span>
        <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '1.5rem' }}>
          Transforming Indian Agriculture Through{' '}
          <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Experience &amp; Innovation</em>
        </h2>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#272c1d', marginBottom: '1rem' }}>
          Founded in December 2025, Rich Apple Agrotech India Pvt. Ltd. is an Indian AgriTech company established with a vision to transform Indian agriculture through the power of experience and innovation. We recognize the deep agricultural wisdom embedded in Indian farming traditions, and we combine it with the latest AgriTech innovations to offer practical, affordable, and farmer-friendly solutions.
        </p>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642', marginBottom: '1.5rem' }}>
          Our mission is to strengthen Indian agriculture by increasing farmers' income, improving soil health, promoting sustainability, and introducing digital agriculture solutions.
        </p>
        <Link
          to="/about"
          className="font-sans font-medium inline-flex items-center transition-all duration-300 group"
          style={{ color: '#bc6c18', fontSize: '16px' }}
        >
          Learn More About Us
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
        </Link>
      </div>
    </div>
  )
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 20, childSelector: '.stat-block' })

  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '3rem 0' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3" style={{ padding: '0 2rem' }}>
        {[
          { value: 20000, label: 'Liters of Products Sold' },
          { value: 1000, label: 'Trusted Farmers' },
          { value: 250, label: 'Distributors & Dealers' },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-block text-center transition-transform duration-300 hover:scale-[1.02]"
            style={{
              padding: '1.5rem 0',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}
          >
            <AnimatedCounter
              target={stat.value}
              className="font-sans"
              style={{ fontSize: '3rem', letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1.0, display: 'block' }}
            />
            <span
              className="font-sans font-medium uppercase block"
              style={{ fontSize: '13px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.55)', marginTop: '0.5rem' }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── How We Work ─── */
function HowWeWork() {
  const cards = [
    { num: '01', icon: Sprout, title: 'Traditional Agricultural Wisdom', desc: 'Deep roots in Indian farming knowledge. We understand the soil, the seasons, and the soul of agriculture.' },
    { num: '02', icon: Settings, title: 'Modern AgriTech Innovation', desc: 'Cutting-edge technology meets field-tested practicality. Every solution is designed for real-world farm conditions.' },
    { num: '03', icon: Smartphone, title: 'Digital Farming Solutions', desc: 'Connecting farmers to the digital ecosystem — from soil testing apps to smart monitoring and advisory services.' },
  ]

  const ref = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.work-card' })
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '3rem' }}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
            OUR APPROACH
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Built for Farmers. Trusted by the Field. Ready for the Future.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '30px' }}>
          {cards.map((card) => (
            <div
              key={card.num}
              className="work-card bg-white transition-all duration-400 hover:-translate-y-2 group"
              style={{
                border: '1px solid #e5e2d8',
                borderRadius: '8px',
                padding: '48px 36px',
              }}
            >
              <span className="font-sans" style={{ fontSize: '13px', color: '#bc6c18', marginBottom: '1.5rem', display: 'block' }}>
                {card.num}
              </span>
              <card.icon size={40} style={{ color: '#272c1d', marginBottom: '1.5rem' }} />
              <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
                {card.title}
              </h4>
              <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Focus Areas ─── */
function FocusAreas() {
  const areas = [
    { icon: TrendingUp, title: 'Increasing Farmer Income', desc: 'Better yield, lower cost, higher profit. Every product and service is designed to put more money in the farmer\'s pocket.' },
    { icon: Leaf, title: 'Soil Health & Sustainability', desc: 'Chemical-free, organic-friendly, and long-term soil rejuvenation. We believe healthy soil is the foundation of prosperity.' },
    { icon: BarChart3, title: 'Digital & Smart Agriculture', desc: 'App-based soil testing, drone services, satellite monitoring, and AI-powered advisory for the modern farmer.' },
  ]

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const cardsRef = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.focus-card' })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
            WHAT DRIVES US
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our Core <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Focus Areas</em>
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '30px' }}>
          {areas.map((area) => (
            <div key={area.title} className="focus-card text-center" style={{ padding: '48px 36px' }}>
              <area.icon size={48} style={{ color: '#bc6c18', marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
              <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
                {area.title}
              </h4>
              <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const items = [
    '15+ Years Experience',
    'Strong Indian Farming Understanding',
    'Practical Technology',
    'Sustainability Vision',
    'Scalable Solutions',
    'Complete Farm Support',
  ]

  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })
  const checklistRef = useScrollReveal<HTMLDivElement>({ y: 20, childSelector: '.check-item' })

  return (
    <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center" style={{ padding: '0 2rem', gap: '60px' }}>
        <div>
          <img
            src="/images/farmer-field-1.png"
            alt="Rich Apple Advantage - Sustainable Farming"
            className="w-full object-cover"
            style={{ borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          />
        </div>

        <div ref={checklistRef}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
            WHY RICH APPLE
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '1rem' }}>
            The <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Rich Apple</em> Advantage
          </h2>
          <p className="font-serif italic" style={{ fontSize: '20px', color: '#bc6c18', marginBottom: '2rem', lineHeight: 1.5 }}>
            We don't sell concepts. We deliver solutions grounded in the field.
          </p>

          <div className="flex flex-col" style={{ gap: '16px' }}>
            {items.map((item) => (
              <div key={item} className="check-item flex items-start" style={{ gap: '16px' }}>
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#bc6c18',
                  }}
                >
                  <Check size={16} color="#ffffff" />
                </div>
                <span className="font-sans font-medium" style={{ fontSize: '17px', color: '#272c1d', lineHeight: 1.3 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Target Users ─── */
function TargetUsers() {
  const users = [
    { icon: Users, title: 'Farmer', desc: 'Practical solutions that increase your yield and income. Soil-friendly products designed for Indian conditions.', link: '/products', cta: 'Explore Products' },
    { icon: Handshake, title: 'Dealer / Partner', desc: 'Join our growing distribution network. Be part of the agricultural transformation across India.', link: '/about', cta: 'Become a Partner' },
    { icon: Briefcase, title: 'Investor', desc: 'A high-growth AgriTech opportunity with strong fundamentals, experienced leadership, and massive market potential.', link: '/about', cta: 'Learn More' },
  ]

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const cardsRef = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.user-card' })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
            WHO WE SERVE
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Built for <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Everyone</em> in Agriculture
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '30px' }}>
          {users.map((user) => (
            <div
              key={user.title}
              className="user-card bg-white text-center transition-all duration-400 hover:-translate-y-2"
              style={{
                border: '1px solid #e5e2d8',
                borderRadius: '16px',
                padding: '48px 36px',
              }}
            >
              <user.icon size={56} style={{ color: '#272c1d', margin: '0 auto 1.5rem' }} />
              <h3 className="font-sans font-medium" style={{ fontSize: '28px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
                {user.title}
              </h3>
              <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642', marginBottom: '1.5rem' }}>
                {user.desc}
              </p>
              <Link
                to={user.link}
                className="font-sans font-medium inline-flex items-center transition-all duration-300 group"
                style={{ color: '#bc6c18' }}
              >
                {user.cta}
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  const testimonials = [
    { quote: "Rich Apple Agrotech has been an exceptional partner for our distribution network. Their commitment to quality, timely delivery, and farmer-centric approach aligns perfectly with our values. Together, we're making a real difference in agriculture.", author: 'Shridhar Shinde', title: 'Blackworm Agrotech Pvt Ltd, Maharashtra' },
    { quote: "Partnering with Rich Apple Agrotech has been a game-changer for our organisation. Their innovative products and excellent support have helped us serve farmers better. The transparency and professionalism in every interaction is truly commendable.", author: 'Ranjit Shinde', title: 'Biolife Agro Science Pvt Ltd, Maharashtra' },
    { quote: "Rich Apple Agrotech has consistently exceeded our expectations. Their product quality, competitive pricing, and dedication to sustainable agriculture make them an ideal partner for long-term growth. We're proud to be associated with them.", author: 'Prakash Patil', title: 'Hariyali Crop Science Pvt Ltd, Maharashtra' },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeDot, setActiveDot] = useState(0)
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })

  const handleDotClick = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.children[0]?.clientWidth || 0
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setActiveDot(index)
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cardWidth = container.children[0]?.clientWidth || 1
      const index = Math.round(container.scrollLeft / cardWidth)
      setActiveDot(index)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
            TESTIMONIALS
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#ffffff' }}>
            What Our Partners <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Say</em>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="hide-scrollbar flex"
          style={{
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            gap: '20px',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex-shrink-0"
              style={{
                scrollSnapAlign: 'center',
                minWidth: '60%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px 32px',
              }}
            >
              <p className="font-serif italic" style={{ fontSize: '20px', color: '#ffffff', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                "{t.quote}"
              </p>
              <p className="font-sans font-medium" style={{ fontSize: '17px', color: '#ffffff' }}>
                {t.author}
              </p>
              <p className="font-sans" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
                {t.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center" style={{ gap: '12px', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className="transition-colors duration-300"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: activeDot === i ? '#bc6c18' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section className="relative" style={{ minHeight: '400px' }}>
      <img
        src="/images/sunset-farm.jpg"
        alt="Sunset over farmland"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: '400px', padding: '0 2rem' }}
      >
        <h2
          className="font-serif font-bold"
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: '#ffffff',
            marginBottom: '1rem',
          }}
        >
          Grow Better. Grow Smarter.
        </h2>
        <p
          className="font-sans"
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          Join thousands of farmers transforming their fields with Rich Apple Agrotech India Pvt. Ltd.
        </p>
        <Link
          to="/contact"
          className="font-sans font-medium inline-flex items-center transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: '#bc6c18',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '16px 40px',
            fontSize: '16px',
          }}
        >
          Get in Touch
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  )
}

/* ─── Top Bar ─── */
function TopBar() {
  return (
    <div
      className="hidden lg:flex items-center justify-center animate-fade-in"
      style={{
        backgroundColor: '#0a0a0a',
        height: '40px',
        padding: '0 2rem',
        gap: '24px',
      }}
    >
      <a href="tel:+918421532100" className="flex items-center gap-2 transition-colors duration-300 hover:text-accent" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
        <Phone size={14} />
        <span>+91 84215 32100</span>
      </a>
      <a href="mailto:info.richapple@gmail.com" className="flex items-center gap-2 transition-colors duration-300 hover:text-accent" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
        <Mail size={14} />
        <span>info.richapple@gmail.com</span>
      </a>
      <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
        <Clock size={14} />
        <span>Mon–Sat: 10:00 AM – 6:00 PM</span>
      </span>
    </div>
  )
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <>
      <TopBar />
      <div className="page-content">
        <HeroSection />
        <StatsBar />
        <HowWeWork />
        <FocusAreas />
        <WhyChooseUs />
        <TargetUsers />
        <Testimonials />
        <CTASection />
      </div>
    </>
  )
}
