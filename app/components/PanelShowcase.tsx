'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface PanelFeature {
  id: string
  title: string
  description: string
  icon: JSX.Element
  image: string
  color: string
}

const features: PanelFeature[] = [
  {
    id: 'dashboard',
    title: '即時監控儀表板',
    description: '一目瞭然的伺服器狀態，包含 CPU、記憶體、網路使用率，以及玩家活動資訊。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    image: '/logo.png',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'console',
    title: '伺服器終端控制',
    description: '完整的命令列控制，支援所有遊戲指令，即時查看日誌，輕鬆管理您的伺服器。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    image: '/logo.png',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'files',
    title: '檔案管理系統',
    description: '直觀的檔案管理介面，支援上傳、下載、編輯，輕鬆管理遊戲檔案與設定。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    image: '/logo.png',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'backup',
    title: '自動備份系統',
    description: '智能化備份管理，支援排程備份、一鍵還原，確保您的遊戲資料永不遺失。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    image: '/logo.png',
    color: 'from-orange-500 to-red-600'
  }
]

export default function PanelShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 自動輪播
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
      setProgress(0)
    }, 5000) // 5秒切換

    // 進度條動畫
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 2)
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [activeFeature])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            強大的管理面板
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            直觀、簡潔、功能強大的控制面板，讓你輕鬆管理伺服器
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* 左側：功能選單 */}
          <div className="lg:col-span-2 space-y-3">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-500 transform ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-2xl -translate-y-2 scale-105 border border-blue-200'
                    : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 border border-transparent'
                }`}
                onClick={() => {
                  setActiveFeature(index)
                  setProgress(0)
                }}
              >
                {/* 進度條 */}
                {activeFeature === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-b-xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-100`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  {/* 圖標 */}
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} ${
                      activeFeature === index ? 'text-white' : 'text-white opacity-80'
                    }`}
                  >
                    {feature.icon}
                  </div>

                  {/* 內容 */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className={`text-xs text-gray-600 transition-all duration-300 ${
                      activeFeature === index ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* 狀態指示器 */}
                  <div className={`transition-all duration-300 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：圖片展示 */}
          <div className="lg:col-span-3 relative h-[600px]">

            {/* 主要圖片容器 */}
            <div className="relative h-full flex items-center justify-center">
              {/* 瀏覽器框架 */}
              <div className="relative w-full max-w-2xl mx-auto">
                {/* 瀏覽器頂部欄 */}
                <div className="bg-gray-800 rounded-t-xl px-4 py-2 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-gray-700 rounded px-4 py-1 text-xs text-gray-300 inline-block">
                      panel.hostgame.com
                    </div>
                  </div>
                </div>

                {/* 圖片區域 */}
                <div className="relative bg-gray-900 rounded-b-xl overflow-hidden shadow-2xl h-96">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeFeature === index
                          ? 'opacity-100 translate-x-0 scale-100'
                          : index < activeFeature
                          ? 'opacity-0 -translate-x-full scale-95'
                          : 'opacity-0 translate-x-full scale-95'
                      }`}
                    >
                      {/* 預設背景 - 永遠顯示 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <div className="text-6xl mb-4">🖥️</div>
                          <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                          <p className="text-sm">控制面板預覽</p>
                        </div>
                      </div>
                      
                      {/* 圖片覆蓋層 - 僅在成功載入時顯示 */}
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={500}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onLoad={() => {
                          console.log('Image loaded successfully:', feature.image)
                        }}
                        onError={(e) => {
                          console.log('Image failed to load:', feature.image)
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* 指示器 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'bg-gray-400'
                  }`}
                  onClick={() => {
                    setActiveFeature(index)
                    setProgress(0)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}