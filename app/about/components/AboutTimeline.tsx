'use client'

import { useState, useEffect } from 'react'

export default function AboutTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState<number | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('timeline-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const timeline = [
    {
      year: '2022 2月',
      title: '創立初期',
      description: 'vProxy Cloud 成立於台灣，專注於 Minecraft 伺服器託管',
      milestone: '在新加坡開設首個節點',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022 10月',
      title: '擴展日本主機',
      description: '成功在日本東京開設伺服器節點，降低台灣連線延遲',
      milestone: 'Minecraft 伺服器主機遷移至日本',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022 12月',
      title: '擴展台灣主機',
      description: '在台灣開設新的伺服器節點，提升本地玩家體驗',
      milestone: '新增台灣節點，提供更穩定的連線',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2023 9月',
      title: '在新加坡開設高性能節點',
      description: '使用企業機房與新世代 AMD Ryzen 處理器，提供更高效能的遊戲體驗',
      milestone: '提供更為穩定和可靠的服務',
      color: 'from-green-500 to-teal-500'
    },
    {
      year: '2024 12月',
      title: '擴展台灣高性能節點',
      description: '在台灣新增高性能伺服器節點，擴展超過 5 台節點',
      milestone: '提供更高效能的遊戲體驗',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      year: '2025 7月',
      title: '擴展其他遊戲主機',
      description: '新增 Rust、DayZ 等遊戲伺服器，提供多樣化的遊戲體驗',
      milestone: '新增多款遊戲伺服器，滿足不同玩家需求',
      color: 'from-orange-500 to-orange-500'
    }
  ]
  
  return (
    <section id="timeline-section" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            我們的成長歷程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            三年征程，見證每一個重要時刻
          </p>
        </div>
        
        {/* 時間軸 */}
        <div className="relative">
          {/* 中心線 - 桌面版置中，手機版靠左 */}
          <div className="absolute left-[44px] lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
          
          {/* 時間點 */}
          <div className="space-y-12 lg:space-y-20">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {/* 桌面版 - 左右交替布局 */}
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* 內容卡片 */}
                  <div className="w-5/12">
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        activeYear === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setActiveYear(index === activeYear ? null : index)}
                    >
                      {/* 年份標籤 */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm mb-4`}>
                        {item.year}
                      </div>
                      
                      {/* 標題和描述 */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      
                      {/* 里程碑 */}
                      <div className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-2`}></div>
                        <span className="text-gray-500 font-medium">{item.milestone}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 中心圓點 */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}>
                        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 空白區域 */}
                  <div className="w-5/12"></div>
                </div>
                
                {/* 手機版 - 垂直布局 */}
                <div className="lg:hidden flex items-start">
                  {/* 左側時間線 - 固定寬度對齊線條 */}
                  <div className="w-[88px] flex justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg relative`}>
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* 右側內容 */}
                  <div className="flex-1 pb-8 pl-4">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        activeYear === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setActiveYear(index === activeYear ? null : index)}
                    >
                      {/* 年份標籤 */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-xs mb-3`}>
                        {item.year}
                      </div>
                      
                      {/* 標題和描述 */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                      
                      {/* 里程碑 */}
                      <div className="flex items-center text-xs">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-2`}></div>
                        <span className="text-gray-500 font-medium">{item.milestone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 未來展望 */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl px-12 py-8">
              <h3 className="text-2xl font-bold mb-2">2025 及未來</h3>
              <p className="text-lg opacity-90">持續創新，與您共創更美好的遊戲世界</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}