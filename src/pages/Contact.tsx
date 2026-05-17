import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  CheckCircle2
} from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

/* ─── Contact Header ─── */
function ContactHeader() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#bc6c18' }}>
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
        <span className="font-sans font-medium uppercase text-white/70 mb-4 block tracking-widest text-sm">
          Reach Out
        </span>
        <h1 className="font-serif font-bold text-white mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tight">
          Get in Touch
        </h1>
        <p className="font-sans text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
          We're here to answer your questions, support your farming needs, 
          and build lasting partnerships for a better agricultural future.
        </p>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}

/* ─── Contact Info Grid ─── */
function ContactInfo() {
  const infoItems = [
    {
      icon: MapPin,
      title: 'India Office',
      content: 'Om Gita Residency, Behind Ganapti Mandir, Vishrambag\nAt Post – Sangli, Taluka – Miraj\nDist. – Sangli, Maharashtra – 416416',
      cta: 'View on Map',
      ctaLink: 'https://www.google.com/maps/place/Rich+Apple+Agrotech+India+Pvt.+Ltd./@16.8460518,74.5929915,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc11900749c206d:0xb82cb0a2e1c0a48d!8m2!3d16.8460518!4d74.5929915!16s%2Fg%2F11y_tw1tt1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 84215 32100',
      link: 'https://wa.me/918421532100',
      desc: 'Mon–Sat: 10:00 AM – 6:00 PM | Sunday Off'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info.richapple@gmail.com',
      link: 'mailto:info.richapple@gmail.com',
      desc: 'For enquiries & feedback'
    }
  ]

  const revealRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.info-card' })

  return (
    <section className="py-24" style={{ backgroundColor: '#faf8f0' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, i) => (
            <div key={i} className="info-card bg-white p-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-8 shadow-lg">
                <item.icon size={28} />
              </div>
              <h3 className="font-serif font-bold text-primary text-2xl mb-4">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="font-sans text-secondary leading-relaxed mb-6 whitespace-pre-line hover:text-accent transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="font-sans text-secondary leading-relaxed mb-6 whitespace-pre-line">
                  {item.content}
                </p>
              )}
              {item.desc && <p className="font-sans text-accent text-sm font-medium mb-4">{item.desc}</p>}
              {item.cta && item.ctaLink && (
                <a 
                  href={item.ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-accent hover:text-accent-hover transition-colors flex items-center gap-2 mt-auto"
                >
                  {item.cta} <Globe size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Form & Social ─── */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const trimmedEmail = formData.email.trim()
    if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation: Indian numbers (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/
    // Remove all non-digits for validation
    const cleanPhone = formData.phone.trim().replace(/\D/g, '').replace(/^91/, '')
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number starting with 6-9'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      setIsSubmitting(true)
      
      // Simulate server-side processing delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Construct email body
      const mailtoLink = `mailto:info.richapple@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      setIsSubmitting(false)
      setIsSuccessOpen(true)
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Rich-Apple-Agrotech-India-Pvt-Ltd/61587287895294/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/rich-apple-agrotech-pvt-ltd/posts/?feedView=all' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UC_mhChRm63bEnvFVc-WPZgg' }
  ]

  return (
    <section className="py-24 border-t border-border" style={{ backgroundColor: '#f5f3eb' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Message Form */}
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-border">
            <div className="mb-12">
              <h2 className="font-serif font-bold text-3xl text-primary mb-2">Send Us a Message</h2>
              <p className="font-sans text-secondary">How can we help you today?</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Your Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Full name"
                  className="w-full bg-bg-light border border-border px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className={`w-full bg-bg-light border ${errors.email ? 'border-red-500' : 'border-border'} px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Phone Number *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full bg-bg-light border ${errors.phone ? 'border-red-500' : 'border-border'} px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors`}
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Subject *</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can we help?"
                  className="w-full bg-bg-light border border-border px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Message *</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Write your message here..."
                  className="w-full bg-bg-light border border-border px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-accent text-white py-5 rounded-xl font-sans font-bold text-lg hover:bg-accent-hover transition-all shadow-xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right: Connect & Map */}
          <div className="flex flex-col justify-center">
            <span className="font-sans font-bold text-accent uppercase tracking-widest text-sm mb-4 block">Connect With Us</span>
            <h2 className="font-serif font-bold text-primary text-4xl md:text-5xl mb-8 leading-tight">
              We Value Your <em className="font-serif italic font-normal">Feedback</em> &amp; Questions
            </h2>
            <p className="font-sans text-secondary text-lg leading-relaxed mb-10">
              Whether you're a farmer looking for advice, a dealer interested in partnership, 
              or a customer with feedback, we're ready to listen. 
              Our team typically responds within 24 business hours.
            </p>

            <div className="space-y-8 mb-12">
              <h4 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Follow Our Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    target={item.href !== '#' ? "_blank" : undefined}
                    rel={item.href !== '#' ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border aspect-video relative group bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.572!2d74.5929915!3d16.8460518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11900749c206d%3A0xb82cb0a2e1c0a48d!2sRich%20Apple%20Agrotech%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715853684123!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rich Apple Agrotech Location"
              />
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <AlertDialogContent className="bg-white border-2 border-accent/20 rounded-3xl p-8 max-w-md mx-auto">
          <AlertDialogHeader className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
              <CheckCircle2 size={48} />
            </div>
            <AlertDialogTitle className="font-serif text-3xl text-primary mb-2">Success!</AlertDialogTitle>
            <AlertDialogDescription className="font-sans text-secondary text-lg">
              Message sent successfully. We will get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8">
            <AlertDialogAction 
              className="w-full bg-accent hover:bg-accent-hover text-white py-6 rounded-xl font-bold text-lg transition-all"
              onClick={() => setIsSuccessOpen(false)}
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactHeader />
      <div className="page-content">
        <ContactInfo />
        <ContactSection />
      </div>
    </div>
  )
}


