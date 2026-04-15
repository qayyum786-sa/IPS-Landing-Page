import React from 'react'
import { MapPin, Phone, ExternalLink } from 'lucide-react'

const BRANCHES = [
  {
    name: 'Sayeedabad',
    phone: '9848963139',
    address: 'Sayeedabad, Hyderabad, Telangana',
    mapUrl: 'https://maps.google.com/?q=Sayeedabad+Hyderabad',
    color: 'from-violet-600 to-violet-800',
    glow: 'shadow-violet-200',
  },
  {
    name: 'Tolichowki',
    phone: '9848864865',
    address: 'Tolichowki, Hyderabad, Telangana',
    mapUrl: 'https://maps.google.com/?q=Tolichowki+Hyderabad',
    color: 'from-emerald-600 to-emerald-800',
    glow: 'shadow-emerald-200',
  },
  {
    name: 'Jahanuma',
    phone: '9133995666',
    address: 'Jahanuma, Hyderabad, Telangana',
    mapUrl: 'https://maps.google.com/?q=Jahanuma+Hyderabad',
    color: 'from-blue-600 to-blue-800',
    glow: 'shadow-blue-200',
  },
  {
    name: 'Karimnagar',
    phone: '8686122181',
    address: 'Karimnagar, Telangana',
    mapUrl: 'https://maps.google.com/?q=Karimnagar+Telangana',
    color: 'from-amber-500 to-amber-700',
    glow: 'shadow-amber-200',
  },
]

function BranchCard({ b }) {
  return (
    <div className={`group card hover:shadow-xl hover:${b.glow}`}>
      {/* Colour strip */}
      <div className={`h-1.5 rounded-full bg-gradient-to-r ${b.color} mb-5 -mx-6 -mt-6 rounded-t-2xl`} />

      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center
                       text-white font-black text-lg mb-4`}>
        {b.name[0]}
      </div>

      <h3 className="font-bold text-ips-text text-lg mb-3">{b.name}</h3>

      <div className="space-y-2.5">
        <a href={`tel:+91${b.phone}`}
           className="flex items-center gap-2.5 text-sm font-semibold text-ips-text
                      hover:text-ips-purple transition-colors group/phone">
          <Phone size={15} className="text-gray-400 group-hover/phone:text-ips-purple transition-colors" />
          {b.phone}
        </a>
        <div className="flex items-start gap-2.5 text-sm text-gray-500">
          <MapPin size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
          {b.address}
        </div>
      </div>

      <a
        href={b.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-ips-purple
                   hover:text-ips-purple-dk transition-colors"
      >
        View on Maps <ExternalLink size={11} />
      </a>
    </div>
  )
}

export default function Branches() {
  return (
    <section id="branches" className="section-wrap bg-ips-bg">
      <div className="section-inner">
        <div className="section-label">Our Locations</div>
        <h2 className="section-title">Find a Branch Near You</h2>
        <p className="section-desc">
          IPS International operates four branches across Hyderabad and Karimnagar.
          Walk in any time or call ahead — we're always ready to welcome you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BRANCHES.map(b => <BranchCard key={b.name} b={b} />)}
        </div>
      </div>
    </section>
  )
}
