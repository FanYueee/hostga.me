'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Game {
  id: string
  name: string
  description: string
  color: string
  gradient: string
  features: string[]
  playerCount: string
  icon: string
}

const games: Game[] = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    description: '建造、探索、生存的沙盒世界',
    color: 'from-green-500 to-emerald-600',
    gradient: 'from-green-50 to-emerald-50',
    features: ['創造模式', '生存模式', '多人連線', '模組支援'],
    playerCount: '2-100 人',
    icon: '⛏️'
  },
  {
    id: 'ark',
    name: 'ARK: Survival Evolved',
    description: '馴服恐龍，征服史前世界',
    color: 'from-orange-500 to-red-600',
    gradient: 'from-orange-50 to-red-50',
    features: ['恐龍馴服', '基地建設', 'PVP/PVE', '生存挑戰'],
    playerCount: '10-70 人',
    icon: '🦕'
  },
  {
    id: 'rust',
    name: 'Rust',
    description: '極限生存，信任無人',
    color: 'from-gray-600 to-gray-800',
    gradient: 'from-gray-50 to-slate-50',
    features: ['掠奪系統', '建築系統', '戰鬥系統', '團隊合作'],
    playerCount: '50-200 人',
    icon: '🔧'
  },
  {
    id: 'dayz',
    name: 'DayZ',
    description: '喪屍末日，活下去',
    color: 'from-purple-600 to-indigo-700',
    gradient: 'from-purple-50 to-indigo-50',
    features: ['開放世界', '生存要素', '喪屍威脅', '真實物理'],
    playerCount: '30-60 人',
    icon: '🧟'
  }
]

export default function GameSelection() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            選擇你的遊戲世界
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            四款熱門遊戲，專業伺服器託管，給你最穩定的遊戲體驗
          </p>
        </div>

        {/* 遊戲卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Link
              key={game.id}
              href={`/${game.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div 
                className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 背景漸層 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-50 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* 動態背景效果 */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${game.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr ${game.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                </div>

                {/* 內容 */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* 頂部圖標和標題 */}
                  <div className="mb-6">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {game.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {game.name}
                    </h3>
                    <p className="text-gray-600">
                      {game.description}
                    </p>
                  </div>

                  {/* 特色列表 */}
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {game.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-700"
                          style={{
                            opacity: hoveredGame === game.id ? 1 : 0.7,
                            transform: hoveredGame === game.id ? 'translateX(0)' : 'translateX(-10px)',
                            transition: `all 300ms ${idx * 50}ms`
                          }}
                        >
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 底部資訊 */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        支援人數
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {game.playerCount}
                      </span>
                    </div>
                  </div>

                  {/* hover 時顯示的按鈕 - 手機版直接顯示 */}
                  <div className={`absolute bottom-8 left-8 right-8 transition-all duration-300 ${
                    hoveredGame === game.id ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4'
                  }`}>
                    <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${game.color} text-white font-medium rounded-lg shadow-lg`}>
                      瞭解更多
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 裝飾邊框 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}