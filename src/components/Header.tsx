
import { Menu, X } from 'lucide-react';
import myLogo from '../assets/logo.png';
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-700"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a className="flex md:hidden" href=""><img src={myLogo} alt="" className='w-24' /></a>
        {/* --- 1. LOGO --- AND--- 2. MENU DÀNH CHO MÁY TÍNH --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white">
          <Link to="/"><img src={myLogo} alt="" className='w-24' /></Link>
          <Link to="/" className="hover:text-amber-500 transition-colors">Trang chủ</Link>
          <Link to="/collection/loa" className="hover:text-amber-500 transition-colors">Loa</Link>
          <Link to="/collection/amply" className="hover:text-amber-500 transition-colors">Amply</Link>
          <Link to="/collection/micro" className="hover:text-amber-500 transition-colors">Micro</Link>
          <Link to="/collection/do-gia-dung" className="hover:text-amber-500 transition-colors">Đồ gia dụng</Link>
          <div className="relative">
            <button
              onClick={() => setShowSupport(!showSupport)}
              className="hover:text-amber-500 transition-colors uppercase flex items-center gap-1 focus:outline-none"
            >
              Hỗ Trợ
              <span className={`transition-transform ${showSupport ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {showSupport && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-blue-700 shadow-xl rounded-md py-2 normal-case tracking-normal">
                <a href="tel:00912619294" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 border-b border-gray-100">
                  <FiPhone /> 00912619294
                </a>
                <a href="tel:0888533518" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <FiPhone /> 0888533518
                </a>
              </div>
            )}
          </div>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- 4. MOBILE MENU (Hiện ra khi bấm trên điện thoại) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute top-full left-0 w-full border-t border-gray-900 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 font-bold uppercase tracking-widest">
            <Link to="/" className="text-amber-500">Trang chủ</Link>
            <Link to="/collection/loa" className="text-white hover:text-amber-500">Loa</Link>
            <Link to="/collection/amply" className="text-white hover:text-amber-500">Amply</Link>
            <Link to="/collection/micro" className="text-white hover:text-amber-500">Micro</Link>
            <Link to="/collection/do-gia-dung" className="text-white hover:text-amber-500">Đồ gia dụng</Link>
            <div className="relative">
              <button
                onClick={() => setShowSupport(!showSupport)}
                className="hover:text-amber-500 transition-colors uppercase flex items-center gap-1 focus:outline-none text-white"
              >
                Hỗ Trợ
                <span className={`transition-transform ${showSupport ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showSupport && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-blue-700 shadow-xl rounded-md py-2 normal-case tracking-normal">
                  <a href="tel:00912619294" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 border-b border-gray-100">
                    <FiPhone /> 00912619294
                  </a>
                  <a href="tel:0888533518" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                    <FiPhone /> 0888533518
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;