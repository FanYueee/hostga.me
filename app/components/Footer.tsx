import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左側區塊 */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* 簡短介紹 */}
            <p className="text-gray-400 max-w-md">
              提供專業的遊戲伺服器託管服務，支援 Minecraft、ARK、RUST、DAYZ 等熱門遊戲，
              確保您享有穩定、高效能的遊戲體驗。
            </p>
            
            {/* 按鈕 */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/customer-center"
                className="group inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                客戶中心
              </Link>
              <Link 
                href="/docs"
                className="group inline-flex items-center px-6 py-2.5 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                文檔中心
              </Link>
            </div>
          </div>
          
          {/* 右側區塊 - 連結列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* 遊戲主機 */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                遊戲主機
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/minecraft" className="group flex items-center hover:text-blue-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-blue-400 mr-2">›</span>
                    Minecraft 伺服器
                  </Link>
                </li>
                <li>
                  <Link href="/ark" className="group flex items-center hover:text-blue-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-blue-400 mr-2">›</span>
                    ARK 方舟生存伺服器
                  </Link>
                </li>
                <li>
                  <Link href="/rust" className="group flex items-center hover:text-blue-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-blue-400 mr-2">›</span>
                    Rust 伺服器
                  </Link>
                </li>
                <li>
                  <Link href="/dayz" className="group flex items-center hover:text-blue-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-blue-400 mr-2">›</span>
                    DayZ 伺服器
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* 關於我們 */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                關於我們
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="group flex items-center hover:text-purple-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-purple-400 mr-2">›</span>
                    關於我們
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="group flex items-center hover:text-purple-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-purple-400 mr-2">›</span>
                    合作夥伴
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* 客戶支援 */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                客戶支援
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/support" className="group flex items-center hover:text-green-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-green-400 mr-2">›</span>
                    Discord 社群
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="group flex items-center hover:text-green-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-green-400 mr-2">›</span>
                    客戶中心
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="group flex items-center hover:text-green-400 transition-colors duration-200">
                    <span className="text-gray-500 group-hover:text-green-400 mr-2">›</span>
                    文檔中心
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 底部分隔線與法律條款 */}
        <div className="mt-12 pt-8 border-t border-gray-800 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 sm:mb-0 flex items-center">
              © 2025 HostGame(HostGa.Me). All rights reserved.
              <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/tos" className="hover:text-blue-400 transition-colors duration-200 relative group">
                服務條款
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors duration-200 relative group">
                隱私條款
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link href="/aup" className="hover:text-green-400 transition-colors duration-200 relative group">
                使用政策
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}