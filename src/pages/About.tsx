import { Link } from 'react-router-dom'
import {
  Sprout,
  Globe,
  Zap,
  Handshake,
  TrendingUp,
  Award,
  Building2,
  Rocket,
  ArrowRight,
  Leaf,
  Settings,
  BookOpen,
  Target,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

/* ─── About Hero ─── */
function AboutHero() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '10rem 0 5rem' }}>
      <div ref={ref} className="max-w-[800px] mx-auto text-center" style={{ padding: '0 2rem' }}>
        <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
          ABOUT US
        </span>
        <h1 className="font-sans font-medium" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#272c1d', marginBottom: '1.5rem' }}>
          Transforming Agriculture Through{' '}
          <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Innovation</em>
        </h1>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642', maxWidth: '640px', margin: '0 auto' }}>
          Founded in December 2025, Rich Apple Agrotech India Pvt. Ltd. is an Indian AgriTech company built on 15+ years of agricultural expertise, dedicated to strengthening Indian agriculture through practical, technology-driven solutions.
        </p>
      </div>
    </section>
  )
}

/* ─── Story Section ─── */
function StorySection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: 'p' })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div ref={ref} className="max-w-[800px] mx-auto" style={{ padding: '0 2rem' }}>
        <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '2rem' }}>
          Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Story</em>
        </h2>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#272c1d', marginBottom: '1.5rem' }}>
          Rich Apple Agrotech India Pvt. Ltd. is a next-generation AgriTech company transforming Indian agriculture through technology-driven solutions. Founded in December 2025, we represent a convergence of traditional agricultural wisdom and cutting-edge innovation — built on over 15 years of hands-on field experience.
        </p>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#272c1d', marginBottom: '1.5rem' }}>
          While our company may be new, our understanding of agriculture runs deep. Our journey began long before incorporation — in the fields alongside farmers, navigating soil management, witnessing the unpredictability of monsoons, adapting to shifting crop cycles, and experiencing firsthand the economic pressures that shape farming decisions across India.
        </p>
      </div>
    </section>
  )
}

/* ─── Stats Row ─── */
function StatsRow() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 20, childSelector: '.stat-item' })

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '3rem 0' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ padding: '0 2rem' }}>
        {[
          { value: 15, label: 'Years of Experience' },
          { value: 1000, label: 'Farmers Empowered' },
          { value: 250, label: 'Distribution Partners' },
          { value: 4, label: 'Premium Products' },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-item text-center"
            style={{
              padding: '1.5rem 0',
              borderRight: i < 3 ? '1px solid #e5e2d8' : 'none',
            }}
          >
            <AnimatedCounter
              target={stat.value}
              className="font-sans"
              style={{ fontSize: '3rem', letterSpacing: '-0.02em', color: '#bc6c18', lineHeight: 1.0, display: 'block' }}
            />
            <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginTop: '0.5rem' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Foundation Cards ─── */
function FoundationCards() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.foundation-card' })

  return (
    <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2" style={{ padding: '0 2rem', gap: '30px' }}>
        <div className="foundation-card bg-white" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '48px' }}>
          <Building2 size={48} style={{ color: '#bc6c18', marginBottom: '1.5rem' }} />
          <h3 className="font-sans font-medium" style={{ fontSize: '28px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
            Built on Experience
          </h3>
          <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
            15+ years of hands-on agricultural knowledge. We understand Indian soil, climate, crops, and farming challenges because we've lived them.
          </p>
        </div>
        <div className="foundation-card bg-white" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '48px' }}>
          <Rocket size={48} style={{ color: '#bc6c18', marginBottom: '1.5rem' }} />
          <h3 className="font-sans font-medium" style={{ fontSize: '28px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
            Driven by Innovation
          </h3>
          <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
            Modern AgriTech solutions designed for practical farm application. From soil testing apps to drone services, we bring the future of farming to your field.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Mission Pillars ─── */
function MissionPillars() {
  const pillars = [
    { num: '01', title: 'Empower Farmers', desc: 'Providing tools, knowledge, and resources for farmers to increase productivity and income sustainably.' },
    { num: '02', title: 'Restore Soil Health', desc: 'Promoting organic, chemical-free, and sustainable farming practices that rejuvenate the land.' },
    { num: '03', title: 'Enable Digital Agriculture', desc: 'Connecting Indian farmers to the world of smart agriculture through technology and innovation.' },
  ]

  const ref = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.pillar-card' })
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Mission</em> Pillars
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '30px' }}>
          {pillars.map((p) => (
            <div key={p.num} className="pillar-card bg-white" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '36px' }}>
              <span className="font-sans" style={{ fontSize: '13px', color: '#bc6c18', marginBottom: '1rem', display: 'block' }}>
                {p.num}
              </span>
              <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '1rem' }}>
                {p.title}
              </h4>
              <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Methodology Grid ─── */
function MethodologyGrid() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Deep analysis of local agricultural conditions, farmer needs, and soil characteristics.', icon: BookOpen },
    { num: '02', title: 'Develop', desc: 'Creating tailored AgriTech solutions combining traditional wisdom with modern science.', icon: Settings },
    { num: '03', title: 'Test', desc: 'Rigorous field testing to ensure effectiveness in real-world Indian farm conditions.', icon: Target },
    { num: '04', title: 'Deliver', desc: 'Efficient distribution through our network of dealers and partners across India.', icon: Leaf },
    { num: '05', title: 'Support', desc: 'Ongoing guidance, advisory services, and digital tools for continuous improvement.', icon: Handshake },
    { num: '06', title: 'Scale', desc: 'Expanding successful solutions to new regions and farming communities nationwide.', icon: TrendingUp },
  ]

  const ref = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.method-item' })
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} style={{ marginBottom: '3rem' }}>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Methodology</em>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '30px' }}>
          {steps.map((step) => (
            <div key={step.num} className="method-item" style={{ padding: '24px' }}>
              <div className="flex items-center" style={{ gap: '16px', marginBottom: '1rem' }}>
                <step.icon size={24} style={{ color: '#bc6c18' }} />
                <span className="font-sans" style={{ fontSize: '3rem', letterSpacing: '-0.02em', color: '#bc6c18', lineHeight: 1.0 }}>
                  {step.num}
                </span>
              </div>
              <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '0.5rem' }}>
                {step.title}
              </h4>
              <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #faf8f0 0%, #f5f3eb 100%)',
        padding: '5rem 0',
      }}
    >
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2" style={{ padding: '0 2rem', gap: '60px' }}>
        <div>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#bc6c18', marginBottom: '1rem' }}>
            VISION
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '1rem' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Vision</em>
          </h2>
          <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#272c1d' }}>
            To become a globally respected AgriTech company from India, creating a future where farmers prosper, soil thrives, and agriculture becomes digitally empowered — benefiting millions of farming families across generations.
          </p>
        </div>

        <div>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#bc6c18', marginBottom: '1rem' }}>
            MISSION
          </span>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '1rem' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Mission</em>
          </h2>
          <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#272c1d' }}>
            To deliver experience-driven AgriTech solutions that enhance farmer income, promote soil sustainability, and accelerate the digital transformation of agriculture — making Indian farming economically vibrant and globally competitive.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Leadership Profile ─── */
function LeadershipProfile() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.leader-card' })

  const leaders = [
    {
      name: 'Mr. Bhimrao Saymote',
      title: 'Founder & CEO',
      desc: "Visionary leader responsible for strategic growth, innovation, and building long-term business value. With 15+ years of agricultural expertise, he leads the company's mission to transform Indian agriculture through technology and field-tested solutions.",
      image: '/images/Mr_Bhimrao_Saymote_image-removebg-preview.png'
    },
    {
      name: 'Mr. Prathamesh Dixit',
      title: 'Business & Operations Head',
      desc: "Leads business operations, partnerships, and ensures sustainable growth across all verticals. His strategic approach drives operational excellence and market expansion, connecting our products to farmers across Maharashtra and beyond.",
      image: '/images/prathamesh_dixit.jpeg'
    }
  ]

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Leadership</em>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {leaders.map((leader, i) => (
            <div key={i} className="leader-card bg-white" style={{ border: '1px solid #e5e2d8', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div
                className="mx-auto flex items-center justify-center overflow-hidden"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f3eb',
                  marginBottom: '1.5rem',
                  border: '4px solid #f5f3eb'
                }}
              >
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/180?text=' + leader.name.split(' ').map(n => n[0]).join('')
                  }}
                />
              </div>
              <h3 className="font-sans font-medium" style={{ fontSize: '24px', letterSpacing: '-0.02em', color: '#272c1d' }}>
                {leader.name}
              </h3>
              <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#bc6c18', marginTop: '8px' }}>
                {leader.title}
              </span>
              <p className="font-sans" style={{ fontSize: '16px', lineHeight: 1.6, color: '#5c6642', marginTop: '1.5rem' }}>
                {leader.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Core Values ─── */
function CoreValues() {
  const values = [
    { icon: Sprout, title: 'Farmer First', desc: "Every decision starts with the farmer's success." },
    { icon: Globe, title: 'Sustainability', desc: 'Environmental responsibility in every solution.' },
    { icon: Zap, title: 'Innovation', desc: 'Embracing technology for agricultural advancement.' },
    { icon: Handshake, title: 'Integrity', desc: 'Honest, transparent partnerships with all stakeholders.' },
    { icon: TrendingUp, title: 'Growth', desc: 'Continuous improvement and scalable impact.' },
    { icon: Award, title: 'Excellence', desc: 'Uncompromising quality in products and services.' },
  ]

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.value-item' })

  return (
    <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Core Values</em>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '30px' }}>
          {values.map((v) => (
            <div key={v.title} className="value-item text-center" style={{ padding: '36px' }}>
              <v.icon size={40} style={{ color: '#bc6c18', margin: '0 auto 1rem' }} />
              <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '0.5rem' }}>
                {v.title}
              </h4>
              <p className="font-sans" style={{ fontSize: '15px', lineHeight: 1.7, color: '#5c6642' }}>
                {v.desc}
              </p>
            </div>
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
        src="/images/drone-tech.jpg"
        alt="Agricultural technology"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
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
          Ready to Transform Your Farm?
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
          Discover how Rich Apple can help you achieve better yields and sustainable growth.
        </p>
        <Link
          to="/hero-products"
          className="font-sans font-medium inline-flex items-center transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: '#bc6c18',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '16px 40px',
            fontSize: '16px',
          }}
        >
          Explore Our Products
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  )
}

/* ─── Contact Info Section ─── */
function ContactInfo() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.contact-card' })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3" style={{ padding: '0 2rem', gap: '30px' }}>
        <div className="contact-card bg-white text-center" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '48px 36px' }}>
          <Phone size={40} style={{ color: '#bc6c18', margin: '0 auto 1rem' }} />
          <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '0.5rem' }}>
            Phone
          </h4>
          <a href="tel:+918421532100" className="font-sans transition-colors duration-300 hover:text-accent" style={{ fontSize: '17px', color: '#5c6642' }}>
            +91 84215 32100
          </a>
        </div>
        <div className="contact-card bg-white text-center" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '48px 36px' }}>
          <Mail size={40} style={{ color: '#bc6c18', margin: '0 auto 1rem' }} />
          <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '0.5rem' }}>
            Email
          </h4>
          <a href="mailto:info.richapple@gmail.com" className="font-sans transition-colors duration-300 hover:text-accent" style={{ fontSize: '17px', color: '#5c6642' }}>
            info.richapple@gmail.com
          </a>
        </div>
        <div className="contact-card bg-white text-center" style={{ border: '1px solid #e5e2d8', borderRadius: '8px', padding: '48px 36px' }}>
          <Clock size={40} style={{ color: '#bc6c18', margin: '0 auto 1rem' }} />
          <h4 className="font-sans font-medium" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d', marginBottom: '0.5rem' }}>
            Working Hours
          </h4>
          <p className="font-sans" style={{ fontSize: '17px', color: '#5c6642' }}>
            Mon – Sat: 10:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Main About Page ─── */
export default function About() {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <VisionMission />
      <StatsRow />
      <FoundationCards />
      <MissionPillars />
      <MethodologyGrid />
      <LeadershipProfile />
      <CoreValues />
      <ContactInfo />
      <CTASection />
    </div>
  )
}
