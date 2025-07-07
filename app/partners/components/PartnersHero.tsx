'use client'

import { useEffect, useState } from 'react'

export default function PartnersHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* 動態背景 */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-200/40 via-purple-200/30 to-pink-200/40 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.2}%`,
            top: `${mousePosition.y * 0.2}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* 幾何裝飾 */}
        <div className={`absolute top-32 right-20 w-20 h-20 border-2 border-blue-300/30 rounded-full transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        
        <div className={`absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rotate-45 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center text-center">
        {/* 主標題 */}
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            <span className="block mb-4">成為我們的</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              合作夥伴
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            與業界領先的遊戲伺服器託管服務提供商攜手合作
            <br className="hidden sm:block" />
            共同為玩家創造極致的遊戲體驗
          </p>
        </div>
        
        {/* 特色亮點 */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { icon: '🤝', title: '互利共贏', desc: '共享收益與成長機會' },
            { icon: '🎯', title: '專業支援', desc: '全方位技術與行銷支持' },
            { icon: '🚀', title: '市場領先', desc: '與創新領導者並肩前行' }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}