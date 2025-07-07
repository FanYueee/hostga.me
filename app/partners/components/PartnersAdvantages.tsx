'use client'

import { useState, useEffect } from 'react'

export default function PartnersAdvantages() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredAdvantage, setHoveredAdvantage] = useState<number | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('advantages-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const advantages = [
    {
      icon: '💰',
      title: '經銷代理',
      description: '成為我們的經銷夥伴，享受豐厚的佣金分潤制度',
      benefits: ['高額首次佣金', '持續性月費分潤', '階梯式獎勵制度'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🛠️',
      title: '技術合作',
      description: '技術資源整合，共同為客戶提供更完整的解決方案',
      benefits: ['技術資源共享', '聯合產品開發', '專業技術支援'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🤝',
      title: '策略聯盟',
      description: '建立長期戰略夥伴關係，共同開拓市場機會',
      benefits: ['市場共同開發', '品牌聯合推廣', '資源優勢互補'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ]
  
  return (
    <section id="advantages-section" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            合作模式
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多元化合作方案，找到最適合您的業務模式
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* 合作模式網格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onMouseEnter={() => setHoveredAdvantage(index)}
              onMouseLeave={() => setHoveredAdvantage(null)}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* 背景漸層 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* 圖標 */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${advantage.gradient} bg-opacity-10 flex items-center justify-center text-3xl transform transition-all duration-300 ${
                  hoveredAdvantage === index ? 'scale-110 rotate-3' : ''
                }`}>
                  {advantage.icon}
                </div>
                
                {/* 標題和描述 */}
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${advantage.gradient} bg-clip-text text-transparent`}>
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {advantage.description}
                </p>
                
                {/* 優勢列表 */}
                <ul className="space-y-2">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${advantage.gradient} mr-3 flex-shrink-0`}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                {/* 底部裝飾線 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}