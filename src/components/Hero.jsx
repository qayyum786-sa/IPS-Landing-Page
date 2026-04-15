import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Sparkles, MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/promo video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      {/* Background textures */}
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="animate-fade-up">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40
                            text-amber-200 text-xs font-bold tracking-wide uppercase
                            px-4 py-2 rounded-full mb-6">
              <Trophy size={13} />
              World Record Holders · Multilingual Public Speaking
            </div>

            {/* Main heading */}
            <h1 className="font-display font-black text-white leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}>
              <span style={{ color: '#4ade80' }}>I</span>
              <span style={{ color: '#60a5fa' }}>P</span>
              <span style={{ color: '#f472b6' }}>S</span>
              {' '}International<br />Group of Schools
            </h1>

            {/* Tagline */}
            <p className="text-violet-300 text-lg md:text-xl font-semibold mb-8 leading-relaxed">
              The School for Global Leaders of Tomorrow
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/40
                               text-red-300 text-xs font-bold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                Limited Seats Available
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40
                               text-emerald-300 text-xs font-bold px-4 py-2 rounded-full">
                <Sparkles size={12} />
                Free Campus Visit + Admission Guidance
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact" className="btn-green text-sm px-8 py-4 text-base rounded-2xl">
                Enroll Now →
              </Link>
              <a
                href="#achievements"
                onClick={e => { e.preventDefault(); document.querySelector('#achievements')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline-white text-sm px-8 py-4 rounded-2xl"
              >
                Our Achievements
              </a>
            </div>

            {/* Branch chips */}
            <div className="flex flex-wrap items-center gap-2 text-violet-400 text-xs font-semibold">
              <MapPin size={12} className="flex-shrink-0" />
              {['Sayeedabad', 'Tolichowki', 'Jahanuma', 'Karimnagar'].map((b, i, arr) => (
                <React.Fragment key={b}>
                  <span className="text-violet-300">{b}</span>
                  {i < arr.length - 1 && <span className="text-violet-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Right side visual ── */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            {/* Main emblem */}
            <div
              className="w-60 h-60 rounded-full flex flex-col items-center justify-center
                         text-center p-6 animate-bounce-sm"
              style={{
                background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
                border: '4px solid rgba(255,255,255,0.15)',
                boxShadow: '0 0 80px rgba(139,92,246,0.45)',
              }}
            >
              <div className="font-display font-black text-[5rem] leading-none">
                <span style={{ color: '#4ade80' }}>I</span>
                <span style={{ color: '#60a5fa' }}>P</span>
                <span style={{ color: '#f472b6' }}>S</span>
              </div>
              <div className="text-violet-200 text-[9px] font-bold tracking-[3px] uppercase mt-1">
                International
              </div>
              <div className="text-amber-400 text-sm mt-2 tracking-widest">★ ★ ★ ★ ★</div>
              <div className="text-violet-300 text-[10px] font-medium mt-2 leading-snug">
                Lead to Success in<br />this World & the Hereafter
              </div>
            </div>

            {/* Stats preview row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[
                { n: '100%', label: 'Board Results' },
                { n: '80%',  label: 'Distinction' },
                { n: '60+',  label: 'Hifz Students' },
              ].map(s => (
                <div key={s.n}
                  className="bg-white/10 border border-white/15 rounded-xl p-3 text-center backdrop-blur-sm">
                  <div className="font-display font-black text-white text-xl leading-none">{s.n}</div>
                  <div className="text-violet-300 text-[10px] mt-1 font-semibold leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* "1st in India" badge */}
            <div className="w-full max-w-xs rounded-2xl p-4 text-center"
              style={{ background: 'linear-gradient(135deg,#fef3c7,#fde68a)', border: '1px solid #fbbf24' }}>
              <div className="font-display font-black text-amber-700 text-3xl">1st</div>
              <div className="text-amber-800 font-bold text-xs mt-1">School in India</div>
              <div className="text-amber-700 text-[11px] mt-0.5 leading-snug">
                SSC/CBSE + Alim + Hifz + Public Speaking
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                        text-violet-400 text-[10px] font-semibold tracking-widest uppercase animate-bounce-sm">
          <span>Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  )
}
