import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const allProducts = [
  {
    id: 'silicon-granules-soil-health',
    name: 'Silicon Granules - Soil Health',
    tagline: 'Strong Crop | Stress Protection | Better Yield',
    description: "Silicon Granules help crops become strong from inside. They improve plant strength and protect crops from heat, drought, pests, and diseases — like adding reinforcement to a building's structure.",
    benefits: [
      '🌿 Strong stem & leaves',
      '💧 Better water use',
      '🌞 Heat protection',
      '🐛 Pest resistance',
      '📈 Higher yield'
    ],
    usage: '25–50 kg/acre at land preparation or early stage',
    suitableFor: 'Paddy, Sugarcane, Maize, Cotton, Vegetables, Fruits',
    categories: ['Granules', 'Soil Health'],
    image: '/images/Silicon_Granules.png'
  },
  {
    id: 'polyhalite-granules',
    name: 'Polyhalite Granules - Multi-Nutrient',
    tagline: '4-IN-1 - 4 Nutrients in One | Balanced Growth',
    description: 'A natural fertilizer delivering Potash, Sulphur, Calcium & Magnesium together. Slow-release nutrients ensure crops receive balanced nutrition over a longer period without waste.',
    benefits: [
      '🌱 Strong roots',
      '🌸 Better flowering',
      '🍎 Quality fruits',
      '🧑‍🌾 Cost savings'
    ],
    usage: '50–100 kg/acre for field crops',
    suitableFor: 'Sugarcane, Potato, Wheat, Banana, Vegetables',
    categories: ['Granules', 'Nutrients'],
    image: '/images/polyhalite_logo.png'
  },
  {
    id: 'pdm-potash-granules',
    name: 'PDM Potash Granules - Potassium',
    tagline: 'High Potash | Quality Fruits | Drought Resistance',
    description: 'High-potash fertilizer that improves fruit quality, color, taste, and drought resistance. Essential for fruit crops that demand premium market grades and extended shelf life.',
    benefits: [
      '🍎 Better taste',
      '🌈 Bright color',
      '🔬 Disease resistance',
      '💪 Stronger crops'
    ],
    usage: '25–50 kg/acre',
    suitableFor: 'Grapes, Pomegranate, Mango, Banana, Tomato, All Fruit Crops',
    categories: ['Granules', 'Nutrients'],
    image: '/images/PDM_potash_granules_logo.png'
  },
  {
    id: 'sugarcane-special-granules',
    name: 'Sugarcane Special Granules - Crop Specific',
    tagline: 'Made for Sugarcane | Length + Thickness + Sweetness',
    description: 'Specially formulated granules for sugarcane, engineered to increase cane length, thickness, and sugar content — delivering premium-grade harvest for mills and farmers alike.',
    benefits: [
      '📏 Long cane',
      '💪 Thick cane',
      '🍬 More sugar',
      '📈 Higher yield',
      '🌿 Strong roots'
    ],
    usage: '100–150 kg/acre at 30–45 days after planting',
    suitableFor: 'Sugarcane (all varieties)',
    categories: ['Granules', 'Nutrients'],
    image: '/images/sugarcane_special_logo.png'
  },
  {
    id: 'prome-granules',
    name: 'Prome Granules - Organic Carbon',
    tagline: 'Soil Reviver | Carbon Source | Microbial Booster',
    description: 'Organic matter granules that improve soil structure, water holding capacity, and beneficial microbial activity — restoring the natural vitality of tired, over-farmed soils.',
    benefits: [
      '🌱 Healthy soil',
      '💧 Water retention',
      '🦠 Microbial activity',
      '🌿 Better roots',
      '♻️ Eco-friendly'
    ],
    usage: '100–200 kg/acre',
    suitableFor: 'All crops, especially degraded soils',
    categories: ['Granules', 'Soil Health'],
    image: '/images/Prome_Granules_image-removebg-preview.png'
  },
  {
    id: 'biochar-powder',
    name: 'Biochar Powder - Soil Amendment',
    tagline: 'Carbon Sequestration | Long-Term Soil Health',
    description: 'Activated biochar improves soil porosity, retains nutrients, and supports long-term soil carbon levels — building a foundation for decades of productive farming.',
    benefits: [
      '🌍 Carbon storage',
      '💧 Water holding',
      '🧪 Nutrient retention',
      '🌱 Better germination'
    ],
    usage: '200–500 kg/acre mixed in soil',
    suitableFor: 'All crops and soil types',
    categories: ['Powders', 'Soil Health'],
    image: '/images/biochar_powder_logo.png'
  },
  {
    id: 'neem-powder',
    name: 'Neem Powder - Bio-Pesticide',
    tagline: 'Natural Pest Control | Soil Nematode Protection',
    description: '100% natural neem powder that controls soil pests and nematodes without synthetic chemicals — safe for crops, beneficial organisms, and the environment.',
    benefits: [
      '🐛 Pest control',
      '🦠 Nematode control',
      '🌱 Safe for plants',
      '♻️ Eco-friendly',
      '💰 Cost-effective'
    ],
    usage: '50–100 kg/acre mixed with soil or basal dose',
    suitableFor: 'Vegetables, Fruits, Sugarcane, Cotton',
    categories: ['Powders', 'Bio-Protection'],
    image: '/images/neem_powder_logo.png'
  },
  {
    id: 'humic-acid-flex-98',
    name: 'Humic Acid Flex 98% - Soil Conditioner',
    tagline: '98% Pure | Maximum Nutrient Uptake | Soil Activator',
    description: 'High-purity humic acid powder that dramatically improves nutrient absorption efficiency and soil health — turning mediocre soils into high-performing growing environments.',
    benefits: [
      '🧪 98% purity',
      '🌱 Root growth',
      '💧 Nutrient uptake',
      '🌍 Soil health',
      '⚡ Fast acting'
    ],
    usage: '1–2 kg/acre via soil or drip irrigation',
    suitableFor: 'All crops, especially in poor or sandy soils',
    categories: ['Powders', 'Soil Health'],
    image: '/images/Humic_Acid_Flex_98_image-removebg-preview.png'
  },
  {
    id: 'zinc-boron-ssp',
    name: 'Zinc + Boron (SSP) - Micronutrient',
    tagline: 'Dual Micronutrient | Flowering + Fruiting + Grain Filling',
    description: 'Combined Zinc and Boron with SSP carrier — essential for pollination, grain filling, and fruit quality. Addresses the two most common micronutrient deficiencies in Indian soils simultaneously.',
    benefits: [
      '🌸 Better flowering',
      '🍎 Fruit setting',
      '🌾 Grain filling',
      '🌿 Strong pollen',
      '📈 Quality yield'
    ],
    usage: '25–50 kg/acre at basal or side-dressing',
    suitableFor: 'Wheat, Maize, Soybean, Cotton, Fruits, Vegetables',
    categories: ['Granules', 'Nutrients'],
    image: '/images/zinc_boron_SSP_logo.png'
  }
]

const filters = ['All', 'Granules', 'Powders', 'Soil Health', 'Nutrients']

/* ─── Products Hero ─── */
function ProductsHero() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '10rem 0 5rem' }}>
      <div ref={ref} className="max-w-[800px] mx-auto text-center" style={{ padding: '0 2rem' }}>
        <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
          PRODUCT PORTFOLIO
        </span>
        <h1 className="font-sans font-medium" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#272c1d', marginBottom: '1.5rem' }}>
          Premium Solutions for{' '}
          <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Healthy Soil &amp; Maximized Yield</em>
        </h1>
        <p className="font-sans" style={{ fontSize: '17px', lineHeight: 1.7, color: '#5c6642', maxWidth: '640px', margin: '0 auto' }}>
          Explore our range of high-efficiency fertilizers, micronutrients, organic conditioners, and biological amendments tailored for Indian farming.
        </p>
      </div>
    </section>
  )
}

/* ─── Product Grid ─── */
function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 40, childSelector: '.product-card' })

  const filteredProducts = activeFilter === 'All'
    ? allProducts
    : allProducts.filter((p) => p.categories.includes(activeFilter))

  return (
    <section style={{ backgroundColor: '#faf8f0', padding: '5rem 0 7.5rem' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
        <div ref={headerRef} className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="font-sans font-medium uppercase block" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#5c6642', marginBottom: '1rem' }}>
            AGRICULTURAL INPUTS
          </span>
          <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
            Our <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Fertilizers &amp; Amendments</em>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center" style={{ gap: '12px', marginBottom: '4rem' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="font-sans font-medium transition-all duration-300 shadow-sm"
              style={{
                border: '1px solid',
                borderColor: activeFilter === filter ? '#bc6c18' : '#e5e2d8',
                borderRadius: '50px',
                padding: '8px 24px',
                fontSize: '14px',
                backgroundColor: activeFilter === filter ? '#bc6c18' : '#ffffff',
                color: activeFilter === filter ? '#ffffff' : '#5c6642',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '30px' }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group flex flex-col justify-between"
              style={{
                border: '1px solid #e5e2d8',
                borderRadius: '16px',
              }}
            >
              <div>
                {/* Product Image Wrapper */}
                <div className="overflow-hidden relative flex items-center justify-center" style={{ backgroundColor: '#f5f3eb', aspectRatio: '4/3' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-400 group-hover:scale-[1.03]"
                    style={{ padding: '24px' }}
                  />
                  {/* Floating Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                    {product.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-sans font-bold text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-sm"
                        style={{ backgroundColor: '#bc6c18' }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Product Content Details */}
                <div style={{ padding: '32px' }}>
                  <h3 className="font-sans font-semibold mb-1" style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#272c1d' }}>
                    {product.name}
                  </h3>
                  
                  {/* Tagline Header */}
                  <h4 className="font-sans font-medium text-sm mb-4 tracking-wide uppercase" style={{ color: '#bc6c18' }}>
                    {product.tagline}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: '#5c6642', minHeight: '80px' }}>
                    {product.description}
                  </p>

                  {/* Visual Benefits List */}
                  <div className="mb-6 bg-[#faf8f0] p-4 rounded-xl border border-[#e5e2d8]/60">
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider mb-2.5" style={{ color: '#272c1d' }}>
                      ✨ Benefits
                    </h5>
                    <ul className="space-y-1.5">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="font-sans text-sm flex items-start gap-2" style={{ color: '#272c1d' }}>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usage/Dosage */}
                  <div className="mb-6 pt-4 border-t border-dashed border-[#e5e2d8]">
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider mb-1.5" style={{ color: '#272c1d' }}>
                      📋 Dosage &amp; Application
                    </h5>
                    <p className="font-sans text-sm" style={{ color: '#5c6642', lineHeight: 1.5 }}>
                      {product.usage}
                    </p>
                  </div>

                  {/* Suitable Crops */}
                  <div className="pt-4 border-t border-dashed border-[#e5e2d8]">
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider mb-2" style={{ color: '#272c1d' }}>
                      🌾 Recommended Crops
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {product.suitableFor.split(',').map((crop) => (
                        <span
                          key={crop}
                          className="font-sans text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: '#f5f3eb',
                            border: '1px solid #e5e2d8',
                            color: '#272c1d'
                          }}
                        >
                          {crop.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* View Details Link */}
              <div style={{ padding: '0 32px 32px 32px' }}>
                <Link
                  to={`/products/${product.id}`}
                  className="font-sans font-semibold inline-flex items-center transition-all duration-300 group hover:opacity-85"
                  style={{ color: '#bc6c18', fontSize: '15px' }}
                >
                  View Deep Details
                  <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={14} />
                </Link>
              </div>
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
        src="/images/plant-leaves.jpg"
        alt="Healthy plant leaves"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: '400px', padding: '0 2rem' }}
      >
        <h2
          className="font-serif font-bold text-white mb-4"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#ffffff',
          }}
        >
          Need Custom Fertigation Advice?
        </h2>
        <p
          className="font-sans text-lg mb-8"
          style={{
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}
        >
          Our agricultural consultants can design a precision dosing program tailored for your crop cycle and local soil status.
        </p>
        <Link
          to="/contact"
          className="font-sans font-bold inline-flex items-center transition-all duration-300 hover:opacity-90 shadow-lg"
          style={{
            backgroundColor: '#bc6c18',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '16px 40px',
            fontSize: '16px',
          }}
        >
          Contact Our Experts
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  )
}

/* ─── Main Products Page ─── */
export default function Products() {
  return (
    <div>
      <ProductsHero />
      <ProductGrid />
      <CTASection />
    </div>
  )
}
