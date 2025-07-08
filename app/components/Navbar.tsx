'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsAnimating(true)
    } else if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isMobileMenuOpen, isAnimating])

  return (
    <nav className="relative w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 中間選單 */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 遊戲選單 */}
            <Link 
              href="/minecraft" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">Minecraft</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/ark" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">Ark 方舟生存</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/rust" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">Rust</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/dayz" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">DayZ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            
            {/* 分隔線 */}
            <div className="h-6 w-px bg-gray-200"></div>
            
            {/* 其他連結 */}
            <Link 
              href="/about" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">關於我們</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/partners" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">合作夥伴</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </div>

          {/* 右側按鈕組 */}
          <div className="flex items-center space-x-4">
            {/* 客戶中心按鈕 */}
            <Link 
              href="/customer-center" 
              className="inline-flex items-center px-4 lg:px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-lg text-sm lg:text-base"
            >
              客戶中心
            </Link>

            {/* 手機版選單按鈕 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      {isAnimating && (
        <div className={`md:hidden bg-white border-t border-gray-100 shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}>
        <div className="px-4 py-4 space-y-1">
            <Link 
              href="/minecraft" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              Minecraft
            </Link>
            <Link 
              href="/ark" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              Ark 方舟生存
            </Link>
            <Link 
              href="/rust" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              Rust
            </Link>
            <Link 
              href="/dayz" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              DayZ
            </Link>
            <div className="h-px bg-gray-200 my-3"></div>
            <Link 
              href="/about" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              關於我們
            </Link>
            <Link 
              href="/partners" 
              className="group flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:animate-pulse"></div>
              合作夥伴
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}