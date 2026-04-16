import React from 'react'
import { Languages, Cpu, Mic2, BookHeart, CheckCircle2 } from 'lucide-react'

const FEATURES = [
  {
    icon: <Languages size={26} />,
    bg: 'bg-violet-100', color: 'text-ips-purple',
    title: 'Students Learn 5 Languages',
    desc: 'English, Hindi, Urdu, Arabic, Telugu— multilingual mastery from day one.',
  },
  {
    icon: <Cpu size={26} />,
    bg: 'bg-amber-100', color: 'text-amber-700',
    title: 'Coding, Robotics & AI',
    desc: 'Award-winning technology curriculum preparing students for tomorrow\'s careers.',
  },
  {
    icon: <Mic2 size={26} />,
    bg: 'bg-blue-100', color: 'text-blue-700',
    title: 'Public Speaking Training',
    desc: 'World-record oratory program — students trained to speak with confidence globally.',
  },
  {
    icon: <BookHeart size={26} />,
    bg: 'bg-emerald-100', color: 'text-emerald-700',
    title: 'Islamic + Academic Education',
    desc: 'SSC/CBSE integrated with Alim Course and Hifz-e-Qur\'an — unique in all of India.',
  },
]

const CHECKLIST = [
  '100% Board Exam Results for 7 years',
  '5 languages taught to every student',
  'Two World Records in Public Speaking',
  'Coding, Robotics & AI curriculum',
  'Integrated Islamic + Academic program',
  '1st school in India with this curriculum',
]

export default function Highlights() {
  return (
    <section id="highlights" className="section-wrap bg-ips-bg">
      <div className="section-inner">
        <div className="section-label">What Makes Us Different</div>
        <h2 className="section-title">A Unique Educational Experience</h2>
        <p className="section-desc">
          IPS doesn't just educate — it nurtures scholars, leaders, and global citizens under one roof.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {FEATURES.map(f => (
            <div key={f.title} className="card flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center flex-shrink-0`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-ips-text text-base mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column deeper section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Checklist */}
          <div>
            <h3 className="font-display font-black text-2xl text-ips-text mb-6">
              Why parents choose IPS
            </h3>
            <ul className="space-y-3">
              {CHECKLIST.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-ips-text">
                  <CheckCircle2 size={18} className="text-ips-green flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[220px]"
              style={{ background: 'linear-gradient(135deg,#ede9fe,#ddd6fe)', border: '2px dashed #c4b5fd' }}>
              <div className="text-5xl mb-3">🎓</div>
              <p className="font-bold text-ips-purple-dk text-lg mb-1">Shaping Tomorrow's Leaders</p>
              <p className="text-violet-600 text-sm leading-relaxed max-w-xs">
                Learning across languages, technology, and Islamic studies — all under one roof.
              </p>
            </div>
            <div className="rounded-2xl p-5 text-center"
              style={{ background: 'linear-gradient(135deg,#fef3c7,#fde68a)', border: '1px solid #fbbf24' }}>
              <span className="font-display font-black text-amber-600 text-4xl">1st</span>
              <span className="font-bold text-amber-800 text-sm ml-2">School in India</span>
              <p className="text-amber-700 text-xs mt-1">
                Offering SSC/CBSE + Alim Course + Hifz-e-Qur'an + Public Speaking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
