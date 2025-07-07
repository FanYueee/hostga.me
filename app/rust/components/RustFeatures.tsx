'use client'

import { useState } from 'react'

interface RustFeature {
  id: string
  title: string
  description: string
  icon: JSX.Element
  color: string
  bgColor: string
}

const rustFeatures: RustFeature[] = [
  {
    id: 'anti-cheat',
    title: '反作弊系統',
    description: '內建 EAC 防作弊系統，搭配伺服器端監控，確保公平的遊戲環境。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 'custom-maps',
    title: '自定義地圖',
    description: '支援多種地圖類型，包括程序生成地圖、經典地圖，以及社群創作地圖。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'wipe-schedule',
    title: '靈活清檔週期',
    description: '可自訂清檔時間，從每日到每月，滿足不同玩家的遊戲節奏需求。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 'plugins',
    title: '豐富插件系統',
    description: '支援 Oxide/uMod 插件，包括經濟系統、商店、傳送、排行榜等熱門插件。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 'performance',
    title: '高效能伺服器',
    description: '採用最新硬體配置，確保 200+ 玩家同時在線也能維持穩定 60+ FPS。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  {
    id: 'admin-tools',
    title: '管理工具',
    description: '完整的管理面板，支援玩家管理、物品生成、地圖編輯等強大功能。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50'
  }
]

export default function RustFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rust 專屬功能
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            為 Rust 玩家量身打造的專業功能，提供最佳的生存遊戲體驗
          </p>
        </div>

        {/* 功能網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rustFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative p-8 rounded-2xl transition-all duration-500 transform cursor-pointer ${
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
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* 光暈效果 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* 內容 */}
              <div className="relative z-10">
                {/* 圖標 */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* 標題 */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              準備好在 Rust 中生存了嗎？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              立即創建您的 Rust 伺服器，與朋友一起在這個充滿挑戰的世界中建立您的帝國。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                立即開始
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-orange-300 text-orange-700 font-medium rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}