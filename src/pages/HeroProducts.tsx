import { useScrollReveal } from '../hooks/useScrollReveal'
import { 
  Zap, 
  Droplets, 
  Recycle, 
  Sprout, 
  ArrowRight,
  ShieldCheck,
  Microscope,
  Leaf,
  FlaskConical,
  CheckCircle2,
  TrendingUp,
  Maximize2,
  Flower2
} from 'lucide-react'
import { Link } from 'react-router-dom'

/* ─── Hero Header ─── */
function HeroHeader() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
        <span className="font-sans font-medium uppercase text-accent mb-4 block tracking-widest text-sm">
          ⭐ Our Hero Product Range
        </span>
        <h1 className="font-serif font-bold text-white mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tight">
          Elite Performance <br />
          <em className="font-serif italic font-normal">for Modern Farming</em>
        </h1>
        <p className="font-sans text-white/70 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Discover the power of INDIRA — our flagship line of organic growth enhancers, 
          scientifically engineered to deliver maximum yield and premium crop quality.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}

/* ─── Product Card Component ─── */
interface ProductProps {
  id: string
  tag: string
  title: string
  subtitle: string
  size: string
  description: string
  image: string
  benefits: { icon: any, title: string, desc: string }[]
  composition: { label: string, value: string, desc: string }[]
  mechanisms: { icon: any, title: string, desc: string }[]
  dosage: { crops: string[], application: { icon: any, title: string, value: string }[] }
  accentColor?: string
}

function ProductBlock({ product }: { product: ProductProps }) {
  const revealRef = useScrollReveal<HTMLDivElement>({ y: 40 })
  const contentRevealRef = useScrollReveal<HTMLDivElement>({ y: 30 })

  return (
    <section id={product.id} className="py-24 border-b border-border" style={{ backgroundColor: '#faf8f0' }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={revealRef} className="relative group">
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
            <img 
              src={product.image} 
              alt={product.title} 
              className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ border: '1px solid rgba(188, 108, 24, 0.1)' }}
            />
            <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-widest shadow-lg">
              {product.tag}
            </div>
          </div>

          <div ref={contentRevealRef}>
            <span className="font-sans font-bold text-accent uppercase tracking-widest text-sm mb-2 block">{product.subtitle}</span>
            <h2 className="font-serif font-bold text-primary text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              {product.title}
            </h2>
            <p className="font-sans text-secondary text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-sans font-bold text-2xl text-primary">{product.size}</span>
              <div className="h-8 w-px bg-border" />
              <Link 
                to="/contact"
                className="font-sans font-bold bg-accent text-white px-8 py-3 rounded hover:bg-accent-hover transition-colors flex items-center gap-2"
              >
                Enquire Now <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {product.composition.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <span className="font-sans font-bold text-accent text-2xl block">{item.value}</span>
                  <span className="font-sans font-bold text-primary text-sm uppercase block mb-1">{item.label}</span>
                  <p className="font-sans text-secondary text-xs leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mechanisms */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-3xl text-primary mb-2">Powerful Mechanisms</h3>
            <p className="font-sans text-secondary italic text-lg">Key Benefits of {product.title}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.mechanisms.map((m, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/20">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <m.icon size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-primary mb-2">{m.title}</h4>
                  <p className="font-sans text-secondary text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application */}
        <div className="bg-primary p-10 md:p-16 rounded-3xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif font-bold text-3xl mb-8">Recommended Crops</h3>
              <div className="flex flex-wrap gap-3">
                {product.dosage.crops.map((crop, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full font-sans font-medium text-sm border border-white/10 hover:bg-white/20 transition-colors">
                    {crop}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-3xl mb-8">Dosage & Application</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.dosage.application.map((app, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0">
                      <app.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-accent uppercase tracking-widest text-xs mb-1">{app.title}</h4>
                      <p className="font-sans text-xl font-bold">{app.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HeroProducts() {
  const products: ProductProps[] = [
    {
      id: 'indira-booster',
      tag: '⭐ Our Hero Product',
      title: 'INDIRA — Plant Booster',
      subtitle: 'High-End Organic Fruit & Plant Enhancer',
      size: '1 Liter',
      description: "A complete physiological growth enhancer — not just a booster. Designed for fruit crops, vegetables, sugarcane, and cut flowers. It's our #1 product for high-end organic agriculture.",
      image: '/products/INDIRA_Plant_Booster.png',
      composition: [
        { label: 'Amino Acids', value: '25%', desc: 'Building blocks of plant proteins — accelerates growth and stress recovery.' },
        { label: 'Fulvic Acid', value: '25%', desc: 'Carries nutrients directly into plant cells — improves fertilizer efficiency.' },
        { label: 'Vitamins & Auxins', value: '1200PPM', desc: 'Natural growth hormones driving cell division and flowering.' }
      ],
      mechanisms: [
        { icon: Sprout, title: 'Lateral Bud Branching', desc: 'Encourages more side shoots resulting in higher fruit setting and yield.' },
        { icon: Maximize2, title: 'Stem & Leaf Expansion', desc: 'Stronger, thicker stems and larger leaf area for better photosynthesis.' },
        { icon: Zap, title: 'Nutrient Mobilization', desc: 'Improves nutrient movement and utilization efficiency across plant parts.' },
        { icon: Flower2, title: 'Ideal for Cut Flowers', desc: 'Improves stem length, strength, and continuous flowering cycles.' },
        { icon: Leaf, title: 'Chlorophyll Formation', desc: 'Enhances green color and plant vigor, boosting overall productivity.' },
        { icon: TrendingUp, title: 'Premium Crop Quality', desc: 'Improves size, color, weight, and market value significantly.' }
      ],
      dosage: {
        crops: ['🎋 Sugarcane', '🍇 Grapes', '🍎 Pomegranates', '🥦 Vegetables', '🍊 Fruit Crops', '🌸 Cut Flowers'],
        application: [
          { icon: Droplets, title: 'Foliar Spray', value: '5 ml per Liter' },
          { icon: Zap, title: 'Drip Irrigation', value: '2 Liters per Acre' }
        ]
      },
      benefits: []
    },
    {
      id: 'indira-drip',
      tag: '⭐ Best-Selling Drip',
      title: 'INDIRA Drip Special',
      subtitle: 'Premium Organic Growth Enhancer',
      size: '5 Liters',
      description: "A powerful fertigation solution for modern drip farming. Scientifically balanced for maximum plant response via root-to-shoot activation.",
      image: '/products/INDIRA_Drip_Special.png',
      composition: [
        { label: 'Seaweed Extract', value: '20%', desc: 'Ascophyllum nodosum — Natural hormones and stress tolerance.' },
        { label: 'Potassium Humate', value: '15%', desc: 'Soil health and nutrient chelation — improves root zone biology.' },
        { label: 'Bio Enhancer Complex', value: '65%', desc: 'Proprietary blend of vitamins and metabolic activators.' }
      ],
      mechanisms: [
        { icon: Sprout, title: 'Mop Formation', desc: 'Promotes lateral bud branching for increased side shoots and branches.' },
        { icon: Maximize2, title: 'Leaf Surface Area', desc: 'Expands leaf area for enhanced photosynthesis efficiency.' },
        { icon: Zap, title: 'Nutrient Transport', desc: 'Improves nutrient movement from root to shoot throughout the plant.' },
        { icon: Flower2, title: 'Stem Strength', desc: 'Enhances stem strength and quality, perfect for cut flowers.' },
        { icon: Leaf, title: 'Vigor Boost', desc: 'Vital for chlorophyll formation and boosting plant vigor.' },
        { icon: Microscope, title: 'Soil Biology', desc: 'Improves fertilizer efficiency and root zone biological activity.' }
      ],
      dosage: {
        crops: ['🎋 Sugarcane', '🍇 Grapes', '🍎 Pomegranates', '🥦 Vegetables', '🍊 Fruit Crops', '🌸 Cut Flowers'],
        application: [
          { icon: Zap, title: 'Drip Irrigation', value: '5 Liters per Acre' },
          { icon: CheckCircle2, title: 'Timing', value: 'Vegetative & Pre-Flowering' }
        ]
      },
      benefits: []
    },
    {
      id: 'indira-granules',
      tag: '⭐ Premium Granule',
      title: 'INDIRA Granules',
      subtitle: 'Amino + Fulvic + Vitamins',
      size: '1 Kg',
      description: "A powerful triple-action granule blend engineered for deep soil application and sustained plant nutrition. ISO certified quality for consistent results.",
      image: '/products/INDIRA_Granules.png',
      composition: [
        { label: 'Amino Acids', value: 'High Conc.', desc: 'Accelerates metabolic activity and stress recovery at cellular level.' },
        { label: 'Fulvic Acid', value: 'Pure Form', desc: 'Improves root zone absorption and fertilizer utilization efficiency.' },
        { label: 'Vitamins Complex', value: 'Essential', desc: 'Growth co-factors that support enzyme activity and root elongation.' }
      ],
      mechanisms: [
        { icon: Sprout, title: 'Root Development', desc: 'Stimulates root elongation and lateral branching for better uptake.' },
        { icon: Microscope, title: 'Plant Metabolism', desc: 'Activates key enzymes, accelerating processes for faster growth.' },
        { icon: ShieldCheck, title: 'Stress Tolerance', desc: 'Helps plants recover faster from heat, drought, and disease stress.' },
        { icon: Leaf, title: 'Chlorophyll Synthesis', desc: 'Supports deeper green foliage and stronger overall plant vitality.' },
        { icon: TrendingUp, title: 'Market Value', desc: 'Results in better size, weight, and color of harvested produce.' },
        { icon: FlaskConical, title: 'ISO Certified', desc: 'Manufactured under strict standards for guaranteed consistency.' }
      ],
      dosage: {
        crops: ['🎋 Sugarcane', '🍇 Grapes', '🍎 Pomegranates', '🥦 Vegetables', '🍊 Fruit Crops', '🌾 Cereals'],
        application: [
          { icon: Leaf, title: 'Soil Application', value: 'Broadcast' },
          { icon: CheckCircle2, title: 'Timing', value: 'Land Prep / Top Dressing' }
        ]
      },
      benefits: []
    },
    {
      id: 'indira-pro-maxx',
      tag: '⭐ Green Seaweed Booster',
      title: 'INDIRA Pro Maxx',
      subtitle: 'Advance Plant Growth Booster',
      size: '500 ml',
      description: "Powered by Spirulin — a next-generation green seaweed extract that activates every stage of plant growth from root to shoot with 12 powerful mechanisms.",
      image: '/products/INDIRA_Pro_Maxx.png',
      composition: [
        { label: 'Spirulin', value: '20%', desc: 'Premium green seaweed extract for natural growth hormones.' },
        { label: 'Bio Enhancer', value: 'Advance', desc: 'Auxins, cytokinins, and vitamins for complete plant activation.' },
        { label: 'Shelf Life', value: '3 Years', desc: 'ISO 9001:2015 Certified long-term effectiveness.' }
      ],
      mechanisms: [
        { icon: Sprout, title: 'Additional Budding', desc: 'Stimulates lateral bud formation for increased branching and yield.' },
        { icon: Microscope, title: 'Nutrient Uptake', desc: 'Improves absorption of macro and micro nutrients from the soil.' },
        { icon: ShieldCheck, title: 'Frost Protection', desc: 'Builds resilience against temperature extremes and diseases.' },
        { icon: TrendingUp, title: 'Extended Shelf Life', desc: 'Keeps fruit fresher for longer after harvest, reducing spoilage.' },
        { icon: Zap, title: 'Growth Balancing', desc: 'Natural auxins regulate growth speed at different plant stages.' },
        { icon: Recycle, title: 'Inorganic Uptake', desc: 'Maximizes existing soil resources by increasing mineral uptake.' }
      ],
      dosage: {
        crops: ['🎋 Sugarcane', '🍇 Grapes', '🍎 Pomegranates', '🥦 Vegetables', '🍊 Fruit Crops', '🌾 Cereals'],
        application: [
          { icon: Droplets, title: 'Foliar Spray', value: '3 ml per Liter' },
          { icon: ShieldCheck, title: 'Safety', value: 'Shake Well Before Use' }
        ]
      },
      benefits: []
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      <div className="page-content">
        {products.map((p) => (
          <ProductBlock key={p.id} product={p} />
        ))}
        
        {/* Footer CTA */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-8">Ready to Transform Your Yield?</h2>
            <p className="font-sans text-white/70 text-lg mb-10 leading-relaxed">
              Join the community of modern farmers using INDIRA Hero Range 
              to achieve sustainable, high-quality agricultural output.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded font-sans font-bold hover:bg-accent-hover transition-colors">
                Enquire for Bulk Orders
              </Link>
              <Link to="/products" className="border border-white/20 text-white px-10 py-4 rounded font-sans font-bold hover:bg-white/10 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
