import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { end: 100, suffix: '%', label: 'Result in Board Exams', desc: '7 consecutive years of perfect pass rates — an unbroken record of academic excellence', color: 'text-emerald-300' },
  { end: 80,  suffix: '%', label: 'Students Secured Distinction', desc: '4 in 5 students achieve distinction — our methods consistently produce top performers', color: 'text-violet-300' },
  { end: 60,  suffix: '+', label: 'Hifz-e-Qur\'an Completions', desc: 'Students who memorised the Qur\'an in full alongside their complete academic studies', color: 'text-amber-300' },
]

/* Simple count-up hook */
function useCountUp(end, duration = 1200, trigger) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const id = setInterval(() => {
      start = Math.min(start + step, end)
      setVal(start)
      if (start >= end) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [trigger, end, duration])
  return val
}

function StatCard({ stat, trigger }) {
  const count = useCountUp(stat.end, 1200, trigger)
  return (
    <div className="relative rounded-2xl p-8 text-center overflow-hidden
                    bg-white/10 border border-white/15 backdrop-blur-sm
                    hover:bg-white/15 transition-all duration-300 group">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48
                      rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="relative z-10">
        <div className="font-display font-black text-white leading-none mb-3"
             style={{ fontSize: 'clamp(3.5rem,7vw,5.5rem)' }}>
          {count}
          <span className={`${stat.color} text-4xl align-super`}>{stat.suffix}</span>
        </div>
        <div className="text-violet-100 font-bold text-lg mb-2">{stat.label}</div>
        <div className="text-violet-300 text-sm leading-relaxed">{stat.desc}</div>
      </div>
    </div>
  )
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  /* Trigger count-up when section scrolls into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="stats"
      ref={ref}
      className="section-wrap"
      style={{ background: 'linear-gradient(135deg,#3b0764,#5b21b6)' }}
    >
      <div className="section-inner">
        <div className="section-label text-violet-400">Our Track Record</div>
        <h2 className="section-title text-white">Numbers That Speak</h2>
        <p className="section-desc text-violet-300">
          Consistent excellence across academics, character, and faith — year after year.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STATS.map(s => <StatCard key={s.label} stat={s} trigger={triggered} />)}
        </div>
      </div>
    </section>
  )
}
