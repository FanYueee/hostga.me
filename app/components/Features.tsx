'use client'

import { useState } from 'react'
import type { ReactElement } from 'react'

interface Feature {
  id: string
  title: string
  description: string
  icon: ReactElement
  color: string
  bgColor: string
}

const features: Feature[] = [
  {
    id: 'performance',
    title: '極速效能',
    description: '使用高速 NVMe SSD 硬碟與高性能 CPU，確保遊戲在最佳狀態下運行。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  {
    id: 'security',
    title: '安全防護',
    description: '全球 Anycast DDoS 防護，輕鬆抵禦超過 100Gbps+ 攻擊。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 'support',
    title: '12/7 客服',
    description: '每日 12 小時專業技術支援，平均回應時間 10 分鐘，經驗豐富的技術團隊隨時為您解決問題。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'backup',
    title: '定時備份',
    description: '定時自動整機備份，確保您的遊戲資料安全無虞，異地備份處理。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 'scalability',
    title: '彈性擴展',
    description: '随時升級您的伺服器配置，從小型伺服器到大型集群，無縫擴展，滿足任何規模需求。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    color: 'from-indigo-400 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  },
  {
    id: 'monitoring',
    title: '即時監控',
    description: '網頁控制面板提供即時伺服器狀態監控，CPU、記憶體、網路使用狀況一目瞭然。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-pink-400 to-red-500',
    bgColor: 'from-pink-50 to-red-50'
  }
]

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* 斜分隔線 */}
      <div className="absolute -top-12 left-0 right-0 h-24 bg-white transform -skew-y-2 origin-top-left shadow-lg"></div>
      
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-100/30 to-yellow-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            為什麼選擇我們？
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我們提供業界領先的遊戲伺服器託管服務，以下是我們的核心優勢
          </p>
        </div>

        {/* 特色網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-500 transform ${
                hoveredFeature === feature.id || hoveredFeature === null
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-70 translate-y-1 scale-95'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* 背景漸層 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* 光暈效果 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* 內容 */}
              <div className="relative z-10">
                {/* 圖標 */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* 標題 */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* hover 時的邊框效果 */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-colors duration-300"></div>
              
              {/* 漂浮陰影 */}
              <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* 底部 CTA */}
      </div>
    </section>
  )
}