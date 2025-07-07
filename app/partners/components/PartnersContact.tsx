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
      link: '/customer-center',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✉️',
      title: '電子郵件',
      description: '發送詳細的合作提案給我們',
      action: 'partners@hostga.me',
      link: 'mailto:partners@hostga.me',
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
            準備好開始合作了嗎？選擇最適合的方式與我們取得聯繫
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
          
          {/* 合作流程 */}
          <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">合作流程</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: '提交合作意向', desc: '透過客服或郵件聯繫我們' },
                { step: 2, title: '業務團隊評估', desc: '我們會在 24 小時內回覆' },
                { step: 3, title: '簽署合作協議', desc: '確定合作條件與細節' },
                { step: 4, title: '開始合作', desc: '享受豐厚收益與支援' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg flex items-center justify-center font-bold`}>
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 底部 CTA */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                讓我們一起創造成功
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                加入我們的合作夥伴計劃，享受業界最優渥的分潤制度
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/customer-center"
                  onMouseEnter={() => setHoveredButton('contact')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  立即聯繫我們
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="mailto:partners@hostga.me"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-xl hover:border-white transition-all duration-300 backdrop-blur-xl hover:bg-white/10 transform hover:scale-105"
                >
                  發送郵件
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}