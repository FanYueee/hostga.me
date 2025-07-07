'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('team-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const teamMembers = [
    {
      name: '陳志明',
      role: '創辦人 & CEO',
      description: '10年遊戲產業經驗，致力於打造最優質的遊戲體驗',
      skills: ['企業管理', '產品策略', '市場開發'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: '林雅婷',
      role: '技術總監',
      description: '資深後端工程師，專精於高併發系統架構設計',
      skills: ['系統架構', 'DevOps', '性能優化'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: '王大衛',
      role: '營運總監',
      description: '擅長客戶關係管理，確保每位客戶獲得最佳服務',
      skills: ['客戶服務', '流程優化', '團隊管理'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: '張小芳',
      role: '產品經理',
      description: '深入了解玩家需求，持續優化產品體驗',
      skills: ['產品設計', '用戶研究', '數據分析'],
      gradient: 'from-green-500 to-teal-500'
    }
  ]
  
  return (
    <section id="team-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            認識我們的團隊
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            由熱愛遊戲的專業人士組成，我們理解玩家的需求
          </p>
        </div>
        
        {/* 團隊成員網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                {/* 背景漸層 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* 頭像區域 */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} opacity-20`}></div>
                  </div>
                  
                  {/* 懸停效果 */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                    <div className="text-white">
                      <p className="text-sm mb-1">專長領域</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 資訊區域 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" 
                      style={{ backgroundImage: hoveredMember === index ? `linear-gradient(to right, var(--tw-gradient-stops))` : 'none' }}
                      className={`text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r ${member.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>
                
                {/* 社交媒體圖標 */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.gradient} bg-opacity-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 加入團隊 CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              想加入我們的團隊嗎？
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              我們正在尋找充滿熱情的夥伴，一起為遊戲社群創造價值
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              查看職缺
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}