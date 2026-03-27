
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import myLogo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-700"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a className="flex md:hidden" href=""><img src={myLogo} alt="" className='w-24' /></a>
        {/* --- 1. LOGO --- AND--- 2. MENU DÀNH CHO MÁY TÍNH --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
          <a href=""><img src={myLogo} alt="" className='w-24' /></a>
          <a href="#" className="hover:text-amber-500 transition-colors">Trang chủ</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Loa</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Amply</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Micro</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Đồ gia dụng</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Hỗ Trợ</a>
        </nav>

        {/* --- 3. CÔNG CỤ (Search, Cart, User) --- */}
        <div className="flex items-center gap-5">
          {/* Thanh tìm kiếm ẩn hiện tinh tế */}
          <div className="hidden lg:flex items-center bg-slate-200 border border-slate-300 rounded-full px-4 py-1.5 focus-within:border-amber-500 transition-all">
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="bg-transparent text-sm text-black outline-none w-40 focus:w-80 transition-all"
            />
            <Search className="w-4 h-4 text-gray-400" />
          </div>

          {/* User Icon */}
          <button className="text-gray-300 hover:text-amber-500 transition">
            <User className="w-5 h-5" />
          </button>

          {/* Cart Icon với số lượng */}
          <button className="relative text-gray-300 hover:text-amber-500 transition">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* --- 4. MOBILE MENU (Hiện ra khi bấm trên điện thoại) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute top-full left-0 w-full border-t border-gray-900 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 font-bold uppercase tracking-widest">
            <a href="#" className="text-amber-500">Trang chủ</a>
            <a href="#" className="text-white hover:text-amber-500">Loa</a>
            <a href="#" className="text-white hover:text-amber-500">Amply</a>
            <a href="#" className="text-white hover:text-amber-500s">Micro</a>
            <a href="#" className="text-white hover:text-amber-500s">Đồ gia dụng</a>
            <a href="#" className="text-white hover:text-amber-500s">Hỗ Trợ</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;