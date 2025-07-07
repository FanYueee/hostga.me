'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeWord, setActiveWord] = useState(0)
  
  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    const wordInterval = setInterval(() => {
      setActiveWord(prev => (prev + 1) % 3)
    }, 3000)
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(wordInterval)
    }
  }, [])
  
  const words = ['創新', '專業', '熱情']
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20">
      {/* 動態背景 */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.3}%`,
            top: `${mousePosition.y * 0.3}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* 幾何圖形裝飾 */}
        <div className={`absolute top-20 right-20 w-24 h-24 border-4 border-blue-300/50 rotate-45 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        
        <div className={`absolute bottom-32 left-32 w-32 h-32 rounded-full border-4 border-purple-300/50 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        
        <div className={`absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-orange-300/30 to-pink-300/30 transition-all duration-1000 delay-600 ${
          isLoaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
        }`}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="text-center">
          {/* 標題動畫 */}
          <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-black mb-8 transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-gray-900 mb-4">我們是</span>
            <span className="relative inline-block">
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-700 ${
                    activeWord === index 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-90'
                  }`}
                >
                  {word}
                </span>
              ))}
              <span className="invisible">{words[0]}</span>
            </span>
            <span className="block text-gray-900">的團隊</span>
          </h1>
          
          {/* 副標題 */}
          <p className={`text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            致力於為遊戲社群提供最優質的伺服器託管服務，
            讓每一位玩家都能享受流暢、穩定的遊戲體驗
          </p>
          
          {/* 數據展示 */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '10+', label: '年經驗', color: 'from-blue-500 to-cyan-500' },
              { number: '50K+', label: '滿意客戶', color: 'from-purple-500 to-pink-500' },
              { number: '99.9%', label: '正常運行時間', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  
                  {/* 裝飾性元素 */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 滾動提示 */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}