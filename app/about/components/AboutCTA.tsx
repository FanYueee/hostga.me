'use client'

import { useState, useEffect } from 'react'

export default function AboutCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  return (
    <section id="cta-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* 背景裝飾 */}
          <div className="absolute inset-0">
            {/* 網格背景 */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* 光暈效果 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          </div>
          
          <div className="relative z-10 px-12 py-20 text-center">
            {/* 主標題 */}
            <h2 className={`text-4xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              準備好開始您的
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                遊戲冒險了嗎？
              </span>
            </h2>
            
            {/* 副標題 */}
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              加入超過 50,000 位滿意的玩家，體驗極致的遊戲伺服器服務。
              我們提供 7 天免費試用，無需信用卡。
            </p>
            
            {/* CTA 按鈕 */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                onMouseEnter={() => setHoveredButton('start')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  立即開始免費試用
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {hoveredButton === 'start' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
                )}
              </button>
              
              <button
                onMouseEnter={() => setHoveredButton('contact')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group px-10 py-5 border-2 border-gray-600 text-white font-bold text-lg rounded-2xl hover:border-white transition-all duration-300 backdrop-blur-xl hover:bg-white/10 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  聯絡銷售團隊
                  <svg className="w-6 h-6 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* 特色點 */}
            <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {[
                { icon: '🚀', text: '30 秒快速部署' },
                { icon: '💳', text: '無需信用卡' },
                { icon: '🛡️', text: '7 天免費試用' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-300">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}