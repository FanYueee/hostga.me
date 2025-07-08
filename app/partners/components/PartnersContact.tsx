'use client'

import { useState, useEffect } from 'react'

export default function PartnersContact() {
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
    
    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const contactMethods = [
    {
      icon: '🎧',
      title: '客服中心',
      description: '透過客服中心與我們的業務團隊聯繫',
      action: '前往客服中心',
      link: 'https://discord.vproxy.cloud',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✉️',
      title: '電子郵件',
      description: '發送給我們業務人員',
      action: 'fanyueee@vproxy.cloud',
      link: 'mailto:fanyueee@vproxy.cloud',
      color: 'from-purple-500 to-pink-500'
    }
  ]
  
  return (
    <section id="contact-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            聯繫我們
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            準備好開始合作了嗎？與我們取得聯繫獲取更多資訊
          </p>
        </div>
        
        {/* 主要內容區 */}
        <div className="max-w-4xl mx-auto">
          {/* 聯繫方式 */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group block bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${method.color} bg-opacity-10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.color} text-white font-medium rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                    {method.action}
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}