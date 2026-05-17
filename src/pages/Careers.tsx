import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { 
  Briefcase, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  MapPin, 
  ChevronRight,
  Send,
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

/* ─── Careers Header ─── */
function CareersHeader() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#5c6642' }}>
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
        <span className="font-sans font-medium uppercase text-white/60 mb-4 block tracking-widest text-sm">
          Join Our Team
        </span>
        <h1 className="font-serif font-bold text-white mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tight">
          Grow With Us
        </h1>
        <p className="font-sans text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
          Help us transform Indian agriculture. Build a career that actually matters 
          by empowering farmers and enabling sustainable growth.
        </p>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}

/* ─── Why Join Us ─── */
function WhyJoinUs() {
  const values = [
    { 
      icon: Target, 
      title: 'Agricultural Impact', 
      desc: 'Work on projects that directly benefit farmers across India and create measurable real-world change.' 
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation Culture', 
      desc: 'Be part of a team that constantly pushes boundaries in AgriTech with fresh ideas and bold solutions.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Growth Opportunity', 
      desc: 'Grow professionally alongside a fast-expanding company with ambitious goals across Maharashtra and India.' 
    },
    { 
      icon: Users, 
      title: 'Collaborative Environment', 
      desc: 'Work with passionate, like-minded individuals who share a genuine commitment to Indian agriculture.' 
    }
  ]

  const revealRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.value-card' })

  return (
    <section className="py-24" style={{ backgroundColor: '#faf8f0' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-accent uppercase tracking-widest text-sm mb-2 block">Our Culture</span>
          <h2 className="font-serif font-bold text-primary text-4xl mb-4">Why Join Rich Apple Agrotech India Pvt. Ltd.?</h2>
        </div>

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="value-card bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 transition-colors group-hover:bg-accent group-hover:text-white">
                <v.icon size={28} />
              </div>
              <h3 className="font-sans font-bold text-primary text-xl mb-3">{v.title}</h3>
              <p className="font-sans text-secondary text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Current Openings ─── */
function Openings() {
  const jobs = [
    {
      title: 'Agronomist / Field Officer',
      location: 'All Over Maharashtra',
      desc: 'Conduct soil and crop analysis, advise farmers on best practices, monitor field trials and product performance, and support product demonstrations across the region.'
    },
    {
      title: 'Marketing & Sales Manager',
      location: 'All Over Maharashtra',
      desc: 'Develop and implement marketing strategies to promote our products, manage dealer and distributor networks, build brand visibility, and drive sustainable market growth.'
    },
    {
      title: 'Sales Executive',
      location: 'All Over Maharashtra',
      desc: 'Responsible for visiting farmers and dealers, explaining our products, building trust and lasting relationships, and increasing product sales in your assigned territory.'
    }
  ]

  const revealRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.job-card' })

  return (
    <section className="py-24 border-t border-border" style={{ backgroundColor: '#f5f3eb' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-bold text-3xl text-primary mb-2">Open Positions</h2>
            <p className="font-sans text-secondary">We're looking for passionate people ready to make a difference.</p>
          </div>
          <div className="bg-accent/10 px-4 py-2 rounded-full text-accent font-sans font-bold text-sm">
            {jobs.length} Positions Available
          </div>
        </div>

        <div ref={revealRef} className="space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="job-card group bg-white p-8 rounded-2xl border border-border flex flex-col md:flex-row justify-between gap-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2 text-accent">
                  <Briefcase size={18} />
                  <h3 className="font-sans font-bold text-2xl text-primary group-hover:text-accent transition-colors">{job.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-secondary text-sm mb-4">
                  <MapPin size={14} /> {job.location}
                </div>
                <p className="font-sans text-secondary leading-relaxed">{job.desc}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-sans font-bold text-primary flex items-center gap-2 group-hover:text-accent transition-colors"
                >
                  Apply Now <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Application Form ─── */
function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    const phoneRegex = /^[6-9]\d{9}$/
    const cleanPhone = formData.phone.trim().replace(/\D/g, '').replace(/^91/, '')
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number starting with 6-9'
    }

    if (!formData.position || formData.position === 'Select a position...') {
      newErrors.position = 'Please select a position'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      setIsSubmitting(true)
      
      // Simulate server-side processing
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Construct email body
      const mailtoLink = `mailto:info.richapple@gmail.com?subject=Job Application: ${encodeURIComponent(formData.position)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\n\nCover Letter:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      setIsSubmitting(false)
      setIsSuccessOpen(true)
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', position: '', message: '' })
    }
  }

  return (
    <section id="apply-form" className="py-24" style={{ backgroundColor: '#faf8f0' }}>
      <div className="max-w-[800px] mx-auto px-8">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-border">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-primary mb-2">Apply Now</h2>
            <p className="font-sans text-secondary italic">Start your journey with Rich Apple Agrotech India Pvt. Ltd.</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Full Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your full name"
                  className="w-full bg-bg-light border border-border px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="space-y-2">
                <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Position Applying For *</label>
                <select 
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className={`w-full bg-bg-light border ${errors.position ? 'border-red-500' : 'border-border'} px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors appearance-none`}
                  required
                >
                  <option value="">Select a position...</option>
                  <option>Agronomist / Field Officer</option>
                  <option>Marketing & Sales Manager</option>
                  <option>Sales Executive</option>
                </select>
                {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans font-bold text-primary text-sm uppercase tracking-widest">Cover Letter / Why You're a Good Fit *</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about yourself and why you'd like to join Rich Apple Agrotech India Pvt. Ltd. ..."
                className="w-full bg-bg-light border border-border px-6 py-4 rounded-xl font-sans focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-accent text-white py-5 rounded-xl font-sans font-bold text-lg hover:bg-accent-hover transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Application'} <Send size={20} />
            </button>
          </form>
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
              Your application sent successfully. We will review your profile and get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8">
            <AlertDialogAction 
              className="w-full bg-accent hover:bg-accent-hover text-white py-6 rounded-xl font-bold text-lg transition-all"
              onClick={() => setIsSuccessOpen(false)}
            >
              Back to Careers
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default function Careers() {
  return (
    <div className="min-h-screen">
      <CareersHeader />
      <div className="page-content">
        <WhyJoinUs />
        <Openings />
        <ApplicationForm />
      </div>
    </div>
  )
}

