import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search, LayoutGrid, Play } from 'lucide-react'

const CATEGORIES = ['All', 'Campus', 'Events', 'Labs', 'Activities'];

const ITEMS = [
  { 
    id: 1,
    category: 'Labs',
    label: 'Smart Classrooms',      
    sub: 'Interactive digital learning.',   
    image: '/images/smartclassrom.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 2,
    category: 'Labs',
    label: 'Computer Lab',           
    sub: 'Modern tech infrastructure.',          
    image: '/images/modern.JPG',
    span: 'md:col-span-1',              
  },
  { 
    id: 3,
    category: 'Events',
    label: 'Public Speaking',   
    sub: 'World-record oratory.',       
    image: '/images/public.JPG',
    span: 'md:col-span-1',              
  },
  { 
    id: 4,
    category: 'Labs',
    label: 'Chemistry Lab',      
    sub: 'Hands-on STEM skills.',             
    image: '/images/robotic.JPG',
    span: 'md:col-span-1',              
  },
  { 
    id: 5,
    category: 'Campus',
    label: 'Islamic Centre', 
    sub: 'Faith & Excellence.',      
    image: '/images/ismalic.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 6,
    category: 'Activities',
    label: 'Sports & Life', 
    sub: 'Athletic growth.',      
    image: '/images/activity3.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 7,
    category: 'Campus',
    label: 'Campus View', 
    sub: 'Green environment.',      
    image: '/images/image2.jpg',
    span: 'md:col-span-1', 
  },
  { 
    id: 8,
    category: 'Events',
    label: 'Annual Meet', 
    sub: 'Celebrating success.',      
    image: '/images/image3.jpg',
    span: 'md:col-span-1', 
  },
  { 
    id: 9,
    category: 'Activities',
    label: 'Creative Arts', 
    sub: 'Expressing talent.',      
    image: '/images/activity1.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 10,
    category: 'Events',
    label: 'Academic Excellence',   
    sub: 'World-record oratory.',       
    image: '/images/image4.jpg',
    span: 'md:col-span-1',              
  },
  { 
    id: 11,
    category: 'Events',
    label: 'Academic Excellence',   
    sub: 'World-record oratory.',       
    image: '/images/image3.jpg',
    span: 'md:col-span-1',              
  },  
  { 
    id: 12,
    category: 'Activities',
    label: 'Creative Arts', 
    sub: 'Expressing talent.',      
    image: '/images/activity.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 13,
    category: 'Events',
    label: 'Academic Excellence',   
    sub: 'World-record oratory.',       
    image: '/images/image9.jpg',
    span: 'md:col-span-1',              
  },
  { 
    id: 14,
    category: 'Labs',
    label: 'hands-on Lab',      
    sub: 'Hands-on STEM skills.',             
    image: '/images/lab1.JPG',
    span: 'md:col-span-1',              
  },

  { 
    id: 15,
    category: 'Campus',
    label: 'Guest Lecture', 
    sub: 'Faith & Excellence.',      
    image: '/images/public2.JPG',
    span: 'md:col-span-1',              
  },
    { 
    id: 16,
    category: 'Campus',
    label: 'Guest Lecture', 
    sub: 'Faith & Excellence.',      
    image: '/images/public3.JPG',
    span: 'md:col-span-1',              
  },
  { 
    id: 17,
    category: 'Activities',
    label: 'public Speaking', 
    sub: 'Expressing talent.',      
    image: '/images/activity7.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 18,
    category: 'Activities',
    label: 'Tour & Excursions', 
    sub: 'Expressing talent.',      
    image: '/images/activity5.JPG',
    span: 'md:col-span-1', 
  },
      { 
    id: 19,
    category: 'Campus',
    label: 'Guest Lecture', 
    sub: 'Faith & Excellence.',      
    image: '/images/campus7.JPG',
    span: 'md:col-span-1',              
  },
    { 
    id: 20,
    category: 'Activities',
    label: 'Awareness Programs', 
    sub: 'Expressing talent.',      
    image: '/images/awareness2.JPG',
    span: 'md:col-span-1', 
  },
    { 
    id: 21,
    category: 'Activities',
    label: 'Hand writing Competition', 
    sub: 'Expressing talent.',      
    image: '/images/hand2.jpeg',
    span: 'md:col-span-1', 
  },
    { 
    id: 22,
    category: 'Activities',
    label: 'Awareness Programs for Environment', 
    sub: 'Expressing talent.',      
    image: '/images/awareness.JPG',
    span: 'md:col-span-1', 
  },
  { 
    id: 23,
    category: 'Activities',
    label: 'Orientation Program', 
    sub: 'Expressing talent.',      
    image: '/images/oriented.JPG',
    span: 'md:col-span-1', 
  },
];

const VIDEOS = [
  { id: 1, src: '/videos/video1.mp4', title: 'Campus Highlights', category: 'Events' },
  { id: 2, src: '/videos/video2.mp4', title: 'Student Life', category: 'Activities' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1]
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

function GalleryCard({ item }) {
  return (
    <motion.div 
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -8 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 ${item.span}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Main Image */}
        <motion.img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Minimal Overlay Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800 uppercase tracking-widest rounded-lg shadow-sm">
            {item.category}
          </span>
        </div>

        {/* Floating Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle Bottom Content (Visible on Hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.label}</h3>
          <p className="text-white/80 text-xs font-medium">{item.sub}</p>
        </div>

        {/* View Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-12 h-12 bg-ips-purple/90 rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500 shadow-lg">
            <Search size={20} />
          </div>
        </div>
      </div>
      
      {/* Static Footer (Visible always for clean design) */}
      <div className="p-4 bg-white flex items-center justify-between border-t border-slate-50">
        <div>
          <h4 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-ips-purple transition-colors">{item.label}</h4>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{item.category}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-ips-purple-lt transition-colors">
          <ArrowUpRight size={14} className="text-slate-400 group-hover:text-ips-purple transition-colors" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? ITEMS 
    : ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-wrap bg-[#fcfcfd] relative overflow-hidden py-24">
      {/* Clean soft background blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-ips-purple/5 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-ips-green/5 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-ips-purple font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Gallery & Showcase
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Campus <span className="text-ips-purple italic font-serif">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-ips-purple mx-auto rounded-full mb-8" />
          
          {/* Minimalist Filter */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Videos Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Featured <span className="text-ips-purple italic">Stories</span></h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">Watch our students in action and explore the vibrant life at IPS International.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl group border border-slate-200"
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onPlay={(e) => {
                    const parent = e.target.parentElement
                    // hide overlay of current video
                    const overlay = parent.querySelector('.overlay')
                    if (overlay) overlay.style.opacity = '0'
                    
                    // pause others + show their overlay
                    const videos = document.querySelectorAll("video")
                    videos.forEach((vid) => {
                      if (vid !== e.target) {
                        vid.pause()
                        const otherOverlay = vid.parentElement.querySelector('.overlay')
                        if (otherOverlay) otherOverlay.style.opacity = '1'
                      }
                    })
                  }}
                  onPause={(e) => {
                    const overlay = e.target.parentElement.querySelector('.overlay')
                    if (overlay) overlay.style.opacity = '1'
                  }}
                  onEnded={(e) => {
                    const overlay = e.target.parentElement.querySelector('.overlay')
                    if (overlay) overlay.style.opacity = '1'
                  }}
                />
                
                {/* Professional Video Overlay */}
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl">
                      <Play size={28} className="text-ips-purple fill-ips-purple ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="px-3 py-1 bg-ips-purple/80 backdrop-blur-sm rounded-lg text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">
                      {video.category}
                    </span>
                    <h4 className="text-xl font-bold">{video.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          {/* <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            View All Media <LayoutGrid size={16} className="text-ips-purple" />
          </button> */}
        </motion.div>
      </div>


      
    </section>
  )
}


