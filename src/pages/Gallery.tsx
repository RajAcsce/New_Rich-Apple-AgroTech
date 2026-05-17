import { useScrollReveal } from '../hooks/useScrollReveal'
import { Camera, Maximize2 } from 'lucide-react'

/* ─── Gallery Header ─── */
function GalleryHeader() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#272c1d' }}>
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
        <span className="font-sans font-medium uppercase text-accent mb-4 block tracking-widest text-sm" style={{ color: '#bc6c18' }}>
          Our Journey & Milestones
        </span>
        <h1 className="font-serif font-bold text-white mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tight">
          Field Gallery
        </h1>
        <p className="font-sans text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          See the real-world impact of Rich Apple Agrotech India Pvt. Ltd. Explore our certified team,
          field observations, and direct partner farmer sessions across the country.
        </p>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}

/* ─── Photo Grid Section ─── */
function PhotoGallery() {
  // Sourced exclusively from app/public/photos
  const photos = [
    { 
      title: 'Farmers Feedback.jpeg', 
      image: '/photos/Farmers Feedback.jpeg' 
    },
    { 
      title: 'Farmers buying products direclty from Rich Apple AgroTech.jpeg', 
      image: '/photos/Farmers buying products direclty from Rich Apple AgroTech.jpeg' 
    },
    { 
      title: 'Rich Apple AgroTech Team.jpeg', 
      image: '/photos/Rich Apple AgroTech Team.jpeg' 
    }
  ]

  const revealRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.photo-card' })

  return (
    <section className="py-24" style={{ backgroundColor: '#faf8f0' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(188, 108, 24, 0.1)', color: '#bc6c18' }}>
            <Camera size={24} />
          </div>
          <div>
            <h2 className="font-serif font-bold text-3xl" style={{ color: '#272c1d' }}>Photos</h2>
            <p className="font-sans italic" style={{ color: '#5c6642' }}>Field Visits & Professional Highlights</p>
          </div>
        </div>

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, i) => {
            const cleanTitle = photo.title.substring(0, photo.title.lastIndexOf('.')) || photo.title;
            return (
              <div 
                key={i} 
                className="photo-card group flex flex-col overflow-hidden rounded-xl shadow-md bg-white transition-all duration-400 hover:shadow-xl"
                style={{ border: '1px solid #e5e2d8' }}
              >
                {/* Image displayed in its entirety (no cropping or truncation) */}
                <div className="w-full bg-black/5 overflow-hidden flex items-center justify-center relative aspect-[4/3]">
                  <img 
                    src={photo.image} 
                    alt={cleanTitle}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Clean label area below the image */}
                <div className="p-6 flex flex-col justify-between flex-grow" style={{ backgroundColor: '#ffffff' }}>
                  <div>
                    <span 
                      className="font-sans font-medium uppercase text-xs tracking-wider mb-2 block" 
                      style={{ color: '#bc6c18' }}
                    >
                      FIELD ARCHIVE
                    </span>
                    
                    {/* H4 heading displaying filename without extension */}
                    <h4 className="font-serif font-bold text-xl leading-snug mb-3" style={{ color: '#272c1d' }}>
                      {cleanTitle}
                    </h4>
                  </div>
                  
                  <div className="flex items-center text-secondary text-xs font-bold uppercase tracking-widest gap-2">
                    <Maximize2 size={14} style={{ color: '#bc6c18' }} /> Verified Record
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <GalleryHeader />
      <div className="page-content">
        <PhotoGallery />
      </div>
    </div>
  )
}
