import React from 'react'
import { Trophy, Star, Cpu, Globe2, Award, BookOpen, Mic2 } from 'lucide-react'

const AWARDS = [
  {
    icon: <Trophy size={24} />,
    color: 'bg-amber-50 text-amber-600',
    tag: 'tag-amber',
    title: 'Two World Records — Multilingual Public Speaking',
    sub: 'Unprecedented achievement in multilingual oratory — putting IPS on the global map',
    year: 'World Record',
    featured: true,
  },
  {
    icon: <Cpu size={24} />,
    color: 'bg-violet-50 text-violet-600',
    tag: 'tag-violet',
    title: 'Excellence in Integrating Technology — Coding, Robotics & AI',
    sub: 'CITD Global Education & Trade Promotion Awards 2025',
    year: '2025',
    
  },
  {
    icon: <Star size={24} />,
    color: 'bg-blue-50 text-blue-600',
    tag: 'tag-blue',
    title: 'School of Excellence Award 2024–25',
    sub: 'Awarded by ET TECH for academic innovation and student outcomes',
    year: '2024–25',
  },
  {
    icon: <Globe2 size={24} />,
    color: 'bg-amber-50 text-amber-600',
    tag: 'tag-amber',
    title: 'Best Public School in Telangana — India',
    sub: 'Indo-Arab Leaders Summit & Award, Dubai – UAE',
    year: '2022',
  },
  {
    icon: <Award size={24} />,
    color: 'bg-emerald-50 text-emerald-600',
    tag: 'tag-green',
    title: 'Top 5 Promising School of Hyderabad',
    sub: 'Education Excellence — Global Triumph Foundation',
    year: '2021–22',
  },
  {
    icon: <BookOpen size={24} />,
    color: 'bg-violet-50 text-violet-600',
    tag: 'tag-violet',
    title: 'Excellence in Value Education Program',
    sub: 'Awarded by ELDROK for outstanding value-based education',
    year: '2019–20',
  },
  {
    icon: <Mic2 size={24} />,
    color: 'bg-amber-50 text-amber-600',
    tag: 'tag-amber',
    title: 'Best School of the Year',
    sub: 'Awarded by CITD — consistent academic and character excellence',
    year: '2017–18',
  },
]

const TAG_STYLES = {
  'tag-amber':  'bg-amber-100 text-amber-700',
  'tag-violet': 'bg-violet-100 text-violet-700',
  'tag-blue':   'bg-blue-100 text-blue-700',
  'tag-green':  'bg-emerald-100 text-emerald-700',
}

function AchCard({ a }) {
  return (
    <div className={`group relative card overflow-hidden ${a.featured ? 'border-amber-200 shadow-amber-50' : ''}`}>
      {a.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
      )}
      <div className={`w-12 h-12 rounded-xl ${a.color} flex items-center justify-center mb-4`}>
        {a.icon}
      </div>
      <h3 className="font-bold text-ips-text text-sm leading-snug mb-2">{a.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{a.sub}</p>
      <span className={`inline-block mt-4 text-[10px] font-bold px-3 py-1 rounded-full ${TAG_STYLES[a.tag]}`}>
        {a.year}
      </span>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap bg-white">
      <div className="section-inner">
        <div className="section-label">Recognition & Excellence</div>
        <h2 className="section-title">Achievements &amp; Awards</h2>
        <p className="section-desc">
          Over a decade of recognition from national and international bodies — proof of IPS's commitment to total excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AWARDS.map(a => <AchCard key={a.title} a={a} />)}
        </div>

        {/* World Records banner */}
        {/* <div className="mt-10 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#1e0a3c,#4c1d95)' }}>
          <div className="dot-pattern p-10 text-center">
            <div className="text-4xl mb-3">🏆 🏆</div>
            <h3 className="font-display font-black text-white text-3xl md:text-4xl mb-2">
              Two World Records
            </h3>
            <p className="text-violet-300 text-base font-semibold">
              Awarded in Multilingual Public Speaking — Hyderabad, India
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
