import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
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
              <span className="relative z-10">ARK</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/rust" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">RUST</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/dayz" 
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
            >
              <span className="relative z-10">DAYZ</span>
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

          {/* 客戶中心按鈕 */}
          <div className="flex items-center">
            <Link 
              href="/customer-center" 
              className="inline-flex items-center px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-lg"
            >
              客戶中心
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}