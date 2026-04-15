import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Facebook, Youtube, Instagram, Mail } from 'lucide-react'

const BRANCHES = [
  { name: 'Sayeedabad', phone: '9848963139' },
  { name: 'Tolichowki', phone: '9848864865' },
  { name: 'Jahanuma', phone: '9133995666' },
  { name: 'Karimnagar', phone: '8686122181' },
]

const ACADEMICS = ['SSC / CBSE Curriculum', 'Alim Course', 'Hifz-e-Qur\'an', 'Public Speaking', 'Coding & Robotics', '5 Languages Program']
const QUICK = ['About IPS', 'Achievements', 'Gallery', 'Admissions', 'Contact Us']

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0f0a2e] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center group flex-shrink-0 ">
              <img
                src="/images/logo2.png"
                alt="IPS International"
                className="h-15 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="text-violet-200 font-bold text-sm mb-3"></div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5">
              The School for Global Leaders of Tomorrow — leading students to success in this world and the Hereafter.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <Facebook size={15} />, label: 'Facebook', href: 'https://www.facebook.com/ipsinternational1' },
                { icon: <Youtube size={15} />, label: 'YouTube', href: 'https://www.youtube.com/c/IPSInternationalSchool' },
                { icon: <Instagram size={15} />, label: 'Instagram', href: 'https://www.instagram.com/ips_international4?fbclid=IwY2xjawRMGM9leHRuA2FlbQIxMABicmlkETFHTkZOYXFiN1d0UTNPMmJvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtua8-IVwdmSPUAvP5Y5sjkWHZD1SG82LMyZIt-AN1ioHs5PDn5raaomC_GI_aem_XYHPrlg91mrN5Ff4pdZkbQ' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/6 border border-white/10 rounded-lg
                             flex items-center justify-center text-violet-400
                             hover:bg-white/15 hover:text-white transition-all duration-150"
                >
                  {icon}
                </a>
              ))}
              <a href="https://wa.me/919848963139" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366]/20 border border-[#25D366]/30 rounded-lg
                           flex items-center justify-center text-[#25D366]
                           hover:bg-[#25D366]/30 transition-all duration-150 text-xs font-bold">
                WA
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2.5px] uppercase text-violet-500 mb-4">
              Our Branches
            </h4>
            <div className="space-y-3">
              {BRANCHES.map(({ name, phone }) => (
                <div key={name} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <MapPin size={11} className="text-violet-500 flex-shrink-0" />
                    <span className="text-white font-semibold text-sm">{name}</span>
                  </div>
                  <a href={`tel:+91${phone}`}
                    className="flex items-center gap-1.5 text-gray-500 text-xs hover:text-violet-300 transition-colors">
                    <Phone size={11} /> {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2.5px] uppercase text-violet-500 mb-4">Academics</h4>
            <ul className="space-y-2">
              {ACADEMICS.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2.5px] uppercase text-violet-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-violet-400 text-sm hover:text-white font-semibold transition-colors">
                  Enroll Now →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/6 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} IPS International Group of Schools. All rights reserved. Hyderabad, Telangana.
          </p>
          <p className="text-gray-700 text-xs italic">
            Lead to Success in this World &amp; the Hereafter
          </p>
        </div>
      </div>
    </footer>
  )
}
