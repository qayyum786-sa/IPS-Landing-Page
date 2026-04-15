import React from 'react'
import { Play, Image as ImageIcon } from 'lucide-react'

const VIDEOS = [
  { id: 1, src: '/videos/video1.mp4', title: 'Video 1' },
  { id: 2, src: '/videos/video2.mp4', title: 'Video 2' },
  
]

const IMAGES = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/image${i + 1}.jpg`,
  title: `Image ${i + 1}`,
}))

export default function MediaSection() {
  return (
    <section id="media" className="section-wrap bg-white">
      <div className="section-inner">
        <div className="section-label">Media Gallery</div>
        <h2 className="section-title">Videos & Images</h2>
        <p className="section-desc mb-12">
          Glimpses into our vibrant school life, activities, and achievements.
        </p>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm group"
            >
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={(e) => {
                  const parent = e.target.parentElement

                  // hide overlay of current video
                  parent.querySelector('.overlay').style.display = 'none'

                  // pause others + show their overlay
                  const videos = document.querySelectorAll("video")
                  videos.forEach((vid) => {
                    if (vid !== e.target) {
                      vid.pause()
                      vid.parentElement.querySelector('.overlay').style.display = 'flex'
                    }
                  })
                }}
                onPause={(e) => {
                  e.target.parentElement.querySelector('.overlay').style.display = 'flex'
                }}
                onEnded={(e) => {
                  e.target.parentElement.querySelector('.overlay').style.display = 'flex'
                }}
              />

              <div className="overlay absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                  <Play className="text-black ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ImageIcon size={28} className="text-ips-green mt-6" />
            <h3 className="pt-5 text-3xl font-display font-bold text-ips-text">Images</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-sm cursor-pointer">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x400/f3f4f6/9ca3af?text=Image+' + img.id
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ImageIcon className="text-white opacity-80" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
