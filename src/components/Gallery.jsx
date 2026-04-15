import React from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, ArrowUpRight } from 'lucide-react'

/*
  Drop your images/videos into src/assets/ and replace the
  placeholder objects below with:
    { src: '/src/assets/your-image.jpg', label: 'Caption' }
*/
const ITEMS = [
  { 
    emoji: '📖', 
    label: 'Smart Classrooms',      
    sub: 'Interactive learning environments with digital boards and tech-first teaching.',   
    bg: 'from-violet-600 to-indigo-700',   
    span: 'md:col-span-2 md:row-span-2', 
    tall: true  
  },
  { 
    emoji: '💻', 
    label: 'Computer Lab',           
    sub: 'Modern tech infrastructure for digital literacy.',          
    bg: 'from-emerald-600 to-teal-700', 
    span: '',              
    tall: false 
  },
  { 
    emoji: '🎤', 
    label: 'Public Speaking',   
    sub: 'World-record oratory programs and confidence building.',       
    bg: 'from-blue-700 to-blue-900',       
    span: '',              
    tall: false 
  },
  { 
    emoji: '🤖', 
    label: 'Robotics & AI Lab',      
    sub: 'Hands-on STEM education and future-ready skills.',             
    bg: 'from-amber-500 to-orange-700',     
    span: '',              
    tall: false 
  },
  { 
    emoji: '🕌', 
    label: 'Islamic Centre', 
    sub: 'Faith integrated with modern academic excellence.',      
    bg: 'from-teal-600 to-emerald-800',       
    span: 'md:col-span-2', 
    tall: false 
  },
 
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

function GalleryCard({ item }) {
  return (
    <motion.div 
      variants={itemVariants}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${item.span}`}
    >
      <div
        className={`bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center
                    text-center p-8 transition-transform duration-700 group-hover:scale-110
                    ${item.tall ? 'h-full min-h-[320px] md:min-h-[400px]' : 'h-64 md:h-72'}`}
      >
        <div className="relative">
          <div className="text-6xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 drop-shadow-xl">
            {item.emoji}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
        
        <div className="text-white font-display font-bold text-xl md:text-2xl tracking-tight">
          {item.label}
        </div>
        <div className="text-white/80 text-sm mt-2 max-w-[200px] leading-relaxed font-medium">
          {item.sub}
        </div>
      </div>

      {/* Glossy overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-500
                      flex flex-col justify-end p-6 pointer-events-none">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-2">
            Campus Life
          </span>
          <h3 className="text-white font-bold text-lg leading-tight">{item.label}</h3>
          <p className="text-white/90 text-xs mt-1 font-medium leading-relaxed italic">
            "{item.sub}"
          </p>
        </div>
      </div>

      {/* Glass border effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-wrap bg-ips-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ips-purple/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ips-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="section-label">Campus Life</div>
            <h2 className="section-title !mb-0 text-balance">
              Where <span className="text-ips-purple">Innovation</span> Meets Excellence
            </h2>
            <p className="text-gray-500 text-lg mt-4 leading-relaxed">
              Explore our world-class facilities designed to nurture the next generation of global leaders and innovators.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center gap-3 text-ips-purple font-bold text-sm tracking-wide bg-ips-purple-lt px-6 py-3 rounded-2xl">
              <span className="w-2 h-2 bg-ips-purple rounded-full animate-pulse" />
              6+ Specialized Labs
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {ITEMS.map(item => <GalleryCard key={item.label} item={item} />)}
        </motion.div>

        {/* Media upload hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-xs font-medium justify-center p-6 border border-dashed border-gray-200 rounded-3xl"
        >
          <div className="flex items-center gap-2">
            <ImagePlus size={16} className="text-ips-purple/50" />
            <span>Ready for your media?</span>
          </div>
          <p className="text-center sm:text-left">
            Replace emoji placeholders in <code className="bg-gray-100 px-2 py-0.5 rounded text-ips-purple font-bold">Gallery.jsx</code> with real images from your assets folder.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

