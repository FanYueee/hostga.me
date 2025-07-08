'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ArkHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [clickedElement, setClickedElement] = useState<string | null>(null)
  const [liveCounter, setLiveCounter] = useState(1247)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
      
      // 視差滾動效果
      setParallaxOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    // 模擬 LIVE 玩家數量變化
    const liveInterval = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(liveInterval)
    }
  }, [])

  const handleElementClick = (elementId: string) => {
    setClickedElement(elementId)
    setTimeout(() => setClickedElement(null), 600)
  }

  return (
    <section className="relative min-h-screen lg:min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden pb-16 lg:pb-0">
      {/* 高級背景系統 */}
      <div className="absolute inset-0">
        {/* 多層漸層背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-green-800/80 to-emerald-800/90"></div>
        
        {/* 動態網格系統 */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(52,211,153,0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(52,211,153,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* 互動光效 */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-emerald-400/20 via-green-400/10 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`
          }}
        ></div>
        
        {/* 微妙紋理 */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen lg:min-h-screen flex items-center py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          
          {/* 左側內容 - 占7列 */}
          <div className="lg:col-span-7 text-left">
            {/* 品牌標識 */}
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full text-emerald-200 text-sm font-medium mb-8 mt-4 transition-all duration-1000 transform hover:scale-105 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              #1 亞洲 Ark Survival Evolved 伺服器託管
            </div>

            {/* 分行標題系統 */}
            <div className={`mb-6 transition-all duration-1000 delay-200 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
                <span className="block text-emerald-100/95 tracking-tight mb-2" style={{
                  textShadow: '0 8px 32px rgba(52, 211, 153, 0.3)'
                }}>
                  馴服
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
                  史前世界
                </span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-light text-emerald-100/80 tracking-wide">
                建立你的恐龍帝國
              </div>
            </div>

            {/* 互動描述區 */}
            <div className={`mb-8 transition-all duration-1000 delay-400 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg text-emerald-100/90 leading-relaxed font-light max-w-xl">
                在遠古的恐龍世界中，
                <button 
                  className="text-emerald-300 font-medium hover:text-emerald-200 hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => handleElementClick('tame')}
                > 馴服恐龍</button>、
                <button 
                  className="text-green-300 font-medium hover:text-green-200 hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => handleElementClick('build')}
                > 建造部落</button>、
                <button 
                  className="text-teal-300 font-medium hover:text-teal-200 hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => handleElementClick('dominate')}
                > 稱霸方舟</button>。
                專業硬體配置，為你打造頂級 ARK 體驗。
              </p>
            </div>

            {/* 互動特色標籤 */}
            <div className={`flex flex-wrap gap-3 mb-10 transition-all duration-1000 delay-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {[
                { id: 'taming', icon: '🦕', text: '恐龍馴服', color: 'emerald-500', tooltip: '馴服各種強大的恐龍，組建你的軍團' },
                { id: 'tribe', icon: '🏛️', text: '部落建設', color: 'green-500', tooltip: '建造宏偉的部落基地，擴展你的領土' },
                { id: 'pvp', icon: '⚔️', text: 'PvP 戰鬥', color: 'teal-500', tooltip: '與其他玩家激烈對戰，爭奪資源' },
                { id: 'explore', icon: '🗺️', text: '探索冒險', color: 'emerald-600', tooltip: '探索神秘的方舟世界，發現古老秘密' }
              ].map((tag) => (
                <div key={tag.id} className="relative">
                  <button
                    onClick={() => handleElementClick(`tag-${tag.id}`)}
                    onMouseEnter={() => setHoveredTag(tag.id)}
                    onMouseLeave={() => setHoveredTag(null)}
                    className={`px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 rounded-lg text-sm font-medium backdrop-blur-sm hover:bg-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 transform cursor-pointer ${
                      clickedElement === `tag-${tag.id}` ? 'scale-125 bg-emerald-500/50 shadow-lg shadow-emerald-500/25' : ''
                    }`}
                  >
                    <span className="mr-2">{tag.icon}</span>
                    {tag.text}
                  </button>
                  
                  {/* 互動提示框 */}
                  {hoveredTag === tag.id && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-20 animate-in fade-in-0 slide-in-from-bottom-2 duration-200">
                      {tag.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 互動 CTA 按鈕 */}
            <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-600 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button 
                onClick={() => {
                  handleElementClick('start-game')
                  const element = document.getElementById('ark-pricing')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className={`group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 active:scale-95 ${
                  clickedElement === 'start-game' ? 'animate-pulse scale-110' : ''
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center tracking-wide">
                  開始冒險
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* 右側視覺 - 占5列，進階動態設計 */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
          }`}>
            {/* 多層次設計系統 */}
            <div 
              className="relative"
              style={{
                transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
              }}
            >
              {/* 動態背景光暈 */}
              <div className="absolute -inset-12 bg-gradient-to-br from-emerald-400/30 via-green-600/20 to-teal-600/25 blur-3xl animate-pulse"></div>
              
              {/* 多層背景支撐 */}
              <div className="absolute inset-0 transform rotate-1 bg-gradient-to-br from-black/40 to-emerald-900/60 rounded-2xl backdrop-blur-sm opacity-60"></div>
              <div className="absolute inset-0 transform -rotate-1 bg-gradient-to-br from-slate-800/50 to-green-900/70 rounded-2xl backdrop-blur-sm opacity-50"></div>
              
              {/* 主要容器 - 動態進場 */}
              <div className={`relative bg-gradient-to-br from-black/80 via-slate-800/70 to-emerald-900/80 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/30 shadow-2xl transition-all duration-1000 delay-700 ${
                isLoaded ? 'transform rotate-0' : 'transform rotate-3'
              }`}>
                
                {/* 圖片區域 - 增強視覺效果 */}
                <div 
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  {/* 邊框光效 */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm ${
                    isImageHovered ? 'animate-pulse' : ''
                  }`}></div>
                  
                  <div className="relative bg-black rounded-xl overflow-hidden">
                    <Image
                      src="/ark.jpg"
                      alt="ARK 恐龍世界實況"
                      width={400}
                      height={500}
                      className={`w-full h-96 object-cover transition-all duration-700 filter brightness-110 contrast-125 ${
                        isImageHovered ? 'scale-110 brightness-125' : 'scale-100'
                      }`}
                      priority
                    />
                    
                    {/* 多層覆蓋效果 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-emerald-500/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-400/5 to-green-400/10"></div>
                    
                    {/* 動態 Live 標籤 */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl flex items-center space-x-2 hover:scale-110 transition-transform duration-300 ${
                      isImageHovered ? 'animate-bounce' : ''
                    }`}>
                      <div className="relative">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                      <span className="tracking-wide">LIVE</span>
                    </div>
                    
                    {/* 互動覆蓋層 */}
                    {isImageHovered && (
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-green-500/20 animate-in fade-in-0 duration-300"></div>
                    )}
                    
                    
                  </div>
                </div>
              </div>

              {/* 增強浮動裝飾元素 */}
              <div 
                className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-1000 delay-1000 cursor-pointer ${
                  isLoaded ? 'rotate-12 opacity-90 scale-100' : 'rotate-45 opacity-0 scale-50'
                } hover:rotate-0 hover:scale-110 active:animate-spin`}
                onClick={() => handleElementClick('power-boost')}
              >
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div 
                className={`absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-1000 delay-1200 cursor-pointer ${
                  isLoaded ? '-rotate-12 opacity-90 scale-100' : '-rotate-45 opacity-0 scale-50'
                } hover:rotate-0 hover:scale-110 active:animate-pulse`}
                onClick={() => handleElementClick('security-shield')}
              >
                <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* 額外動態元素 */}
              <div className={`absolute top-1/3 -left-4 w-3 h-24 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg transition-all duration-1000 delay-800 ${
                isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
              }`}></div>
              
              <div className={`absolute bottom-1/3 -right-4 w-3 h-20 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full shadow-lg transition-all duration-1000 delay-900 ${
                isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
              }`}></div>

              {/* 微妙光點裝飾 */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 進階動畫系統 */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  )
}