'use client'

import { useState } from 'react'

export default function DayzHighlights() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const highlights = [
    // 第一行
    [
      {
        id: 1,
        icon: '🚀',
        title: '極速啟動',
        description: '10 分鐘內完成完整安裝與預設配置'
      },
      {
        id: 2,
        icon: '🛡️',
        title: 'DDoS 防護',
        description: '企業級防護系統，確保穩定運行'
      },
      {
        id: 3,
        icon: '⚡',
        title: '高效能硬體',
        description: '使用企業級 CPU 處理器與高速 NVMe SSD',
      }
    ],
    // 第二行
    [
      {
        id: 4,
        icon: '🔧',
        title: '一鍵管理',
        description: '直觀的控制面板，輕鬆管理伺服器'
      },
      {
        id: 5,
        icon: '💾',
        title: '整機異地備份',
        description: '定時備份，保障資料安全'
      },
      {
        id: 6,
        icon: '🌐',
        title: '香港節點',
        description: '亞洲低延遲，提供最佳遊戲體驗'
      }
    ],
    // 第三行
    [
      {
        id: 7,
        icon: '🎯',
        title: '精準調優',
        description: '專為 DayZ 優化的伺服器配置'
      },
      {
        id: 8,
        icon: '📞',
        title: '12/7 支援',
        description: '每日 12 小時服務時間，平均回應時間 10 分鐘'
      },
      {
        id: 9,
        icon: '💎',
        title: '穩定可靠',
        description: '至今超過 99% 正常運行時間'
      }
    ]
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            為什麼選擇我們的 DayZ 伺服器？
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            專業的技術團隊，為您提供最優質的 DayZ 生存體驗
          </p>
        </div>

        {/* 特色展示 */}
        <div className="space-y-8">
          {highlights.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    hoveredItem === item.id 
                      ? 'bg-gradient-to-r from-blue-50 to-slate-50 shadow-md lg:scale-105' 
                      : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => window.innerWidth >= 1024 && setHoveredItem(item.id)}
                  onMouseLeave={() => window.innerWidth >= 1024 && setHoveredItem(null)}
                >
                  {/* 圓形圖示 */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    hoveredItem === item.id 
                      ? 'bg-gradient-to-r from-blue-500 to-slate-500 shadow-lg shadow-blue-200 lg:scale-110' 
                      : 'bg-gray-100'
                  }`}>
                    <span className="transition-all duration-300">
                      {item.icon}
                    </span>
                  </div>

                  {/* 文字內容 */}
                  <div className="flex-1">
                    <h3 className={`font-semibold text-gray-900 mb-1 transition-colors duration-300 ${
                      hoveredItem === item.id ? 'text-blue-600' : ''
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}