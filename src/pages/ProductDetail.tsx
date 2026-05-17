import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Shield, TrendingUp, Leaf, Droplets, Beaker, Sprout } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const productData: Record<string, {
  name: string
  tagline: string
  description: string
  benefits: { icon: typeof Shield; title: string; desc: string }[]
  usage: { method: string; dosage: string; frequency: string }
  crops: string[]
  image: string
}> = {
  'silicon-granules-soil-health': {
    name: 'Silicon Granules - Soil Health',
    tagline: 'Strong Crop | Stress Protection | Better Yield',
    description: "Silicon Granules help crops become strong from inside. They improve plant strength and protect crops from heat, drought, pests, and diseases — like adding reinforcement to a building's structure.",
    benefits: [
      { icon: Leaf, title: 'Cell Structure Boost', desc: '🌿 Strong stem & leaves' },
      { icon: Droplets, title: 'Hydration Efficiency', desc: '💧 Better water use' },
      { icon: Shield, title: 'Extreme Weather Guard', desc: '🌞 Heat protection' },
      { icon: TrendingUp, title: 'Defense & Yield', desc: '🐛 Pest resistance & higher yield 📈' },
    ],
    usage: {
      method: 'Soil application mixed with basal fertilizers or during early stages.',
      dosage: '25–50 kg/acre',
      frequency: 'At land preparation or early vegetative stage.',
    },
    crops: ['Paddy', 'Sugarcane', 'Maize', 'Cotton', 'Vegetables', 'Fruits'],
    image: '/images/Silicon_Granules.png',
  },
  'polyhalite-granules': {
    name: 'Polyhalite Granules - Multi-Nutrient',
    tagline: '4-IN-1 - 4 Nutrients in One | Balanced Growth',
    description: 'A natural fertilizer delivering Potash, Sulphur, Calcium & Magnesium together. Slow-release nutrients ensure crops receive balanced nutrition over a longer period without waste.',
    benefits: [
      { icon: Sprout, title: 'Rhizosphere Expansion', desc: '🌱 Strong roots' },
      { icon: Leaf, title: 'Fertility Maximizer', desc: '🌸 Better flowering' },
      { icon: TrendingUp, title: 'Brix and Quality', desc: '🍎 Quality fruits' },
      { icon: Beaker, title: 'Resource Efficiency', desc: '🧑‍🌾 Cost savings' },
    ],
    usage: {
      method: 'Broadcast evenly over the field or side-dress along the crop rows.',
      dosage: '50–100 kg/acre',
      frequency: 'For field crops during land preparation or early sowing phases.',
    },
    crops: ['Sugarcane', 'Potato', 'Wheat', 'Banana', 'Vegetables'],
    image: '/images/polyhalite_logo.png',
  },
  'pdm-potash-granules': {
    name: 'PDM Potash Granules - Potassium',
    tagline: 'High Potash | Quality Fruits | Drought Resistance',
    description: 'High-potash fertilizer that improves fruit quality, color, taste, and drought resistance. Essential for fruit crops that demand premium market grades and extended shelf life.',
    benefits: [
      { icon: Leaf, title: 'Taste & Sugar Enhancement', desc: '🍎 Better taste' },
      { icon: TrendingUp, title: 'Pigmentation Vitality', desc: '🌈 Bright color' },
      { icon: Shield, title: 'Pathogen Suppressant', desc: '🔬 Disease resistance' },
      { icon: Droplets, title: 'Hydrolitic Protection', desc: '💪 Stronger crops' },
    ],
    usage: {
      method: 'Incorporate into the soil close to the active root zones.',
      dosage: '25–50 kg/acre',
      frequency: 'During fruit-setting, flowering, or as recommended by crop stage.',
    },
    crops: ['Grapes', 'Pomegranate', 'Mango', 'Banana', 'Tomato', 'All Fruit Crops'],
    image: '/images/PDM_potash_granules_logo.png',
  },
  'sugarcane-special-granules': {
    name: 'Sugarcane Special Granules - Crop Specific',
    tagline: 'Made for Sugarcane | Length + Thickness + Sweetness',
    description: 'Specially formulated granules for sugarcane, engineered to increase cane length, thickness, and sugar content — delivering premium-grade harvest for mills and farmers alike.',
    benefits: [
      { icon: Sprout, title: 'Cane Elongation', desc: '📏 Long cane' },
      { icon: Shield, title: 'Inter-node Thickness', desc: '💪 Thick cane' },
      { icon: Beaker, title: 'Brix Content Boost', desc: '🍬 More sugar' },
      { icon: TrendingUp, title: 'Tonnage & Vitality', desc: '📈 Higher yield & strong roots 🌿' },
    ],
    usage: {
      method: 'Apply as side-dressing near roots followed by adequate irrigation.',
      dosage: '100–150 kg/acre',
      frequency: 'Between 30 to 45 days post-planting.',
    },
    crops: ['Sugarcane (all varieties)'],
    image: '/images/sugarcane_special_logo.png',
  },
  'prome-granules': {
    name: 'Prome Granules - Organic Carbon',
    tagline: 'Soil Reviver | Carbon Source | Microbial Booster',
    description: 'Organic matter granules that improve soil structure, water holding capacity, and beneficial microbial activity — restoring the natural vitality of tired, over-farmed soils.',
    benefits: [
      { icon: Leaf, title: 'Humus Accumulation', desc: '🌱 Healthy soil' },
      { icon: Droplets, title: 'Porosity & Retention', desc: '💧 Water retention' },
      { icon: Sprout, title: 'Biotic Activation', desc: '🦠 Microbial activity' },
      { icon: TrendingUp, title: 'Rhizomorphic Network', desc: '🌿 Better roots & eco-friendly ♻️' },
    ],
    usage: {
      method: 'Broadcast uniformly during seedbed prep or primary tillage.',
      dosage: '100–200 kg/acre',
      frequency: 'Pre-sowing or during early-stage transplanting.',
    },
    crops: ['All crops', 'Especially degraded soils'],
    image: '/images/Prome_Granules_image-removebg-preview.png',
  },
  'biochar-powder': {
    name: 'Biochar Powder - Soil Amendment',
    tagline: 'Carbon Sequestration | Long-Term Soil Health',
    description: 'Activated biochar improves soil porosity, retains nutrients, and supports long-term soil carbon levels — building a foundation for decades of productive farming.',
    benefits: [
      { icon: Leaf, title: 'Permanent Carbon Sink', desc: '🌍 Carbon storage' },
      { icon: Droplets, title: 'Micro-pores Grid', desc: '💧 Water holding' },
      { icon: Beaker, title: 'Nutrient Matrix', desc: '🧪 Nutrient retention' },
      { icon: Sprout, title: 'Seedling Vigorousness', desc: '🌱 Better germination' },
    ],
    usage: {
      method: 'Integrate into root-zone soils, ideally pre-mixed with manure or compost.',
      dosage: '200–500 kg/acre',
      frequency: 'Apply once per annual lifecycle, before major crops.',
    },
    crops: ['All crops', 'All soil types'],
    image: '/images/biochar_powder_logo.png',
  },
  'neem-powder': {
    name: 'Neem Powder - Bio-Pesticide',
    tagline: 'Natural Pest Control | Soil Nematode Protection',
    description: '100% natural neem powder that controls soil pests and nematodes without synthetic chemicals — safe for crops, beneficial organisms, and the environment.',
    benefits: [
      { icon: Shield, title: 'Natural Insect Guard', desc: '🐛 Pest control' },
      { icon: Beaker, title: 'Root Nematode Shield', desc: '🦠 Nematode control' },
      { icon: Sprout, title: 'Zero Phyto-Toxicity', desc: '🌱 Safe for plants' },
      { icon: Leaf, title: 'Bio-Friendly Defense', desc: '♻️ Eco-friendly & cost-effective 💰' },
    ],
    usage: {
      method: 'Mix thoroughly with soil as a basal application or top layer treatment.',
      dosage: '50–100 kg/acre',
      frequency: 'Mixed with soil or basal dose during soil prep.',
    },
    crops: ['Vegetables', 'Fruits', 'Sugarcane', 'Cotton'],
    image: '/images/neem_powder_logo.png',
  },
  'humic-acid-flex-98': {
    name: 'Humic Acid Flex 98% - Soil Conditioner',
    tagline: '98% Pure | Maximum Nutrient Uptake | Soil Activator',
    description: 'High-purity humic acid powder that dramatically improves nutrient absorption efficiency and soil health — turning mediocre soils into high-performing growing environments.',
    benefits: [
      { icon: Beaker, title: '98% Pure Extracts', desc: '🧪 98% purity' },
      { icon: Sprout, title: 'Root Hair Multiplication', desc: '🌱 Root growth' },
      { icon: Droplets, title: 'Chelation Agent', desc: '💧 Nutrient uptake' },
      { icon: Leaf, title: 'Organic Mobilizer', desc: '🌍 Soil health & fast acting ⚡' },
    ],
    usage: {
      method: 'Dissolve fully in water for drip systems or broadcast as soluble top dress.',
      dosage: '1–2 kg/acre',
      frequency: 'Apply via soil or drip irrigation 2-3 times per season.',
    },
    crops: ['All crops', 'Poor soils', 'Sandy soils'],
    image: '/images/Humic_Acid_Flex_98_image-removebg-preview.png',
  },
  'zinc-boron-ssp': {
    name: 'Zinc + Boron (SSP) - Micronutrient',
    tagline: 'Dual Micronutrient | Flowering + Fruiting + Grain Filling',
    description: 'Combined Zinc and Boron with SSP carrier — essential for pollination, grain filling, and fruit quality. Addresses the two most common micronutrient deficiencies in Indian soils simultaneously.',
    benefits: [
      { icon: Leaf, title: 'Pollination Booster', desc: '🌸 Better flowering' },
      { icon: TrendingUp, title: 'Fructification Set', desc: '🍎 Fruit setting' },
      { icon: Sprout, title: 'Endosperm Density', desc: '🌾 Grain filling' },
      { icon: Shield, title: 'Pollen Tube Elongation', desc: '🌿 Strong pollen & quality yield 📈' },
    ],
    usage: {
      method: 'Broadcast as basal dressing or side-dressing during primary growth.',
      dosage: '25–50 kg/acre',
      frequency: 'At basal or early crop growth phase.',
    },
    crops: ['Wheat', 'Maize', 'Soybean', 'Cotton', 'Fruits', 'Vegetables'],
    image: '/images/zinc_boron_SSP_logo.png',
  },
}

const relatedProducts = [
  { id: 'silicon-granules-soil-health', name: 'Silicon Granules - Soil Health', tagline: 'Strong Crop & Better Yield' },
  { id: 'polyhalite-granules', name: 'Polyhalite Granules', tagline: '4-IN-1 Multi-Nutrient' },
  { id: 'pdm-potash-granules', name: 'PDM Potash Granules', tagline: 'Premium Fruit Quality' },
  { id: 'sugarcane-special-granules', name: 'Sugarcane Special Granules', tagline: 'Tailored for Sugarcane' },
  { id: 'prome-granules', name: 'Prome Granules', tagline: 'Soil Carbon Source' },
  { id: 'biochar-powder', name: 'Biochar Powder', tagline: 'Activated Soil Amendment' },
  { id: 'neem-powder', name: 'Neem Powder', tagline: 'Organic Bio-Pesticide' },
  { id: 'humic-acid-flex-98', name: 'Humic Acid Flex 98%', tagline: 'Ultra Pure Soluble Activator' },
  { id: 'zinc-boron-ssp', name: 'Zinc + Boron (SSP)', tagline: 'Dual Micronutrient Complex' },
]

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = id ? productData[id] : null
  const heroRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const benefitsRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.benefit-card' })
  const usageRef = useScrollReveal<HTMLDivElement>({ y: 30 })
  const relatedRef = useScrollReveal<HTMLDivElement>({ y: 30, childSelector: '.related-card' })

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#faf8f0' }}>
        <h2 className="font-serif font-bold animate-pulse" style={{ fontSize: '36px', color: '#272c1d', marginBottom: '1rem' }}>
          Product Not Found
        </h2>
        <Link
          to="/products"
          className="font-sans font-semibold inline-flex items-center text-accent transition-colors duration-300 hover:opacity-80"
          style={{ color: '#bc6c18' }}
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Products Catalog
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#faf8f0' }}>
      {/* Product Hero */}
      <section style={{ padding: '10rem 0 5rem' }}>
        <div ref={heroRef} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center" style={{ padding: '0 2rem', gap: '60px' }}>
          {/* Custom Image Card */}
          <div className="flex items-center justify-center bg-white shadow-md border border-[#e5e2d8]" style={{ borderRadius: '24px', padding: '32px', aspectRatio: '1/1' }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <Link
              to="/products"
              className="font-sans font-semibold inline-flex items-center transition-colors duration-300 hover:text-accent"
              style={{ color: '#5c6642', fontSize: '14px', marginBottom: '1.5rem' }}
            >
              <ArrowLeft className="mr-1" size={14} />
              Back to Catalog
            </Link>
            <span className="font-sans font-bold uppercase block tracking-wider" style={{ fontSize: '13px', color: '#5c6642', marginBottom: '0.75rem' }}>
              AGRO-SOLUTION SPECIFICATION
            </span>
            <h1 className="font-sans font-bold" style={{ fontSize: 'clamp(32px, 4vw, 44px)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#272c1d', marginBottom: '0.75rem' }}>
              {product.name}
            </h1>
            <h3 className="font-serif italic mb-6" style={{ fontSize: '24px', color: '#bc6c18' }}>
              {product.tagline}
            </h3>
            <p className="font-sans text-[#5c6642]" style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {product.description}
            </p>
            <Link
              to="/contact"
              className="font-sans font-bold inline-flex items-center transition-all duration-300 hover:opacity-90 shadow-md"
              style={{
                backgroundColor: '#bc6c18',
                color: '#ffffff',
                borderRadius: '4px',
                padding: '16px 40px',
                fontSize: '16px',
                display: 'inline-flex',
              }}
            >
              Request Pricing &amp; Orders
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Visual Grid */}
      <section style={{ backgroundColor: '#ffffff', padding: '7.5rem 0', borderTop: '1px solid #e5e2d8' }}>
        <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '4rem' }}>
            Biological &amp; Crop <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Benefits</em>
          </h2>

          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
            {product.benefits.map((b, idx) => (
              <div key={idx} className="benefit-card bg-[#faf8f0] border border-[#e5e2d8] rounded-2xl transition-all duration-300 hover:shadow-md" style={{ padding: '32px' }}>
                <b.icon size={36} style={{ color: '#bc6c18', marginBottom: '1.25rem' }} />
                <h4 className="font-sans font-bold" style={{ fontSize: '20px', color: '#272c1d', marginBottom: '0.75rem' }}>
                  {b.title}
                </h4>
                <p className="font-sans text-sm font-medium" style={{ lineHeight: 1.6, color: '#272c1d' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage & Application Guidelines */}
      <section style={{ backgroundColor: '#f5f3eb', padding: '7.5rem 0', borderTop: '1px solid #e5e2d8', borderBottom: '1px solid #e5e2d8' }}>
        <div ref={usageRef} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ padding: '0 2rem', gap: '60px' }}>
          <div>
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '3rem' }}>
              Application &amp; Dosing <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Guidelines</em>
            </h2>

            <div className="flex flex-col" style={{ gap: '2rem' }}>
              <div className="bg-white p-6 rounded-2xl border border-[#e5e2d8]/60 shadow-sm">
                <h4 className="font-sans font-bold uppercase tracking-wider text-xs mb-2" style={{ color: '#bc6c18' }}>
                  Application Method
                </h4>
                <p className="font-sans text-base" style={{ lineHeight: 1.6, color: '#272c1d' }}>
                  {product.usage.method}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#e5e2d8]/60 shadow-sm">
                <h4 className="font-sans font-bold uppercase tracking-wider text-xs mb-2" style={{ color: '#bc6c18' }}>
                  Standard Dosage
                </h4>
                <p className="font-sans text-lg font-bold" style={{ color: '#272c1d' }}>
                  {product.usage.dosage}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#e5e2d8]/60 shadow-sm">
                <h4 className="font-sans font-bold uppercase tracking-wider text-xs mb-2" style={{ color: '#bc6c18' }}>
                  Frequency
                </h4>
                <p className="font-sans text-base" style={{ lineHeight: 1.6, color: '#272c1d' }}>
                  {product.usage.frequency}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif font-bold mb-8" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d' }}>
              Suitable <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Crops &amp; Soils</em>
            </h2>
            <p className="font-sans text-sm text-[#5c6642] mb-6">
              This product is field-tested and recommended for maximum physiological performance on the following:
            </p>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {product.crops.map((crop) => (
                <span
                  key={crop}
                  className="font-sans font-semibold shadow-sm transition-all hover:scale-105"
                  style={{
                    border: '1px solid #e5e2d8',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    color: '#272c1d',
                    backgroundColor: '#ffffff',
                  }}
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section style={{ backgroundColor: '#faf8f0', padding: '7.5rem 0' }}>
        <div className="max-w-[1280px] mx-auto" style={{ padding: '0 2rem' }}>
          <h2 className="font-serif font-bold text-center" style={{ fontSize: 'clamp(28px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#272c1d', marginBottom: '4rem' }}>
            Explore Other <em className="font-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Inputs</em>
          </h2>

          <div ref={relatedRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            {relatedProducts
              .filter((p) => p.id !== id)
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((rp) => (
                <Link
                  key={rp.id}
                  to={`/products/${rp.id}`}
                  className="related-card bg-white transition-all duration-300 hover:-translate-y-1 block shadow-sm hover:shadow-md"
                  style={{
                    border: '1px solid #e5e2d8',
                    borderRadius: '16px',
                    padding: '32px',
                    textDecoration: 'none',
                  }}
                >
                  <h4 className="font-sans font-bold" style={{ fontSize: '19px', color: '#272c1d', marginBottom: '0.5rem' }}>
                    {rp.name}
                  </h4>
                  <p className="font-sans text-sm" style={{ color: '#5c6642', marginBottom: '1.25rem', height: '40px', overflow: 'hidden' }}>
                    {rp.tagline}
                  </p>
                  <span className="font-sans font-bold inline-flex items-center text-xs" style={{ color: '#bc6c18' }}>
                    View Full Specs
                    <ArrowRight className="ml-1" size={13} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
