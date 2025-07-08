'use client'

import { useState, useEffect } from 'react'

export default function AboutMission() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('mission-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const values = [
    {
      icon: '🎯',
      title: '團隊',
      description: '我們擁有一支熱情且專業的團隊，成員來自不同的技術背景，包括網絡工程師、Minecraft 伺服器架設者。我們的團隊成員都是遊戲愛好者，深入了解玩家和伺服器管理員的需求。',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '👁️',
      title: '願景',
      description: '我們的願景是成為亞洲區最受信賴的遊戲伺服器託管平台，讓每一位創作者和玩家都能輕鬆實現自己的遊戲夢想。通過不斷創新和優化的技術，我們持續改進我們的服務，確保每一位客戶都能獲得最佳體驗。',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💝',
      title: '技術',
      description: '我們的伺服器全部採用高性能 SSD 儲存和最新一代的處理器，無論是運行大型模組包還是支援數十位玩家同時在線，都能保持穩定流暢的性能。同時，我們使用了直覺式的控制面板，即使是技術新手也能輕鬆管理自己的伺服器，一鍵安裝插件、模組和備份世界數據。',
      gradient: 'from-orange-500 to-red-500'
    }
  ]
  
  return (
    <section id="mission-section" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            我們的核心理念
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        {/* 價值觀卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 背景裝飾 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* 圖標 */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} bg-opacity-10 flex items-center justify-center text-3xl transform transition-all duration-300 ${
                  hoveredValue === index ? 'scale-110 rotate-3' : ''
                }`}>
                  {value.icon}
                </div>
                
                {/* 標題 */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
                
                {/* 裝飾線條 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}