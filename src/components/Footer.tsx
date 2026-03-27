import React from 'react';
// Import icon từ Font Awesome (fa) và Feather (fi)
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import myLogo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CỘT 1: THÔNG TIN THƯƠNG HIỆU */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={myLogo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white font-black text-xl tracking-tighter">Công Biển Âm Thanh</span>
          </div>
          <p className="text-sm leading-relaxed">
            Trải nghiệm âm thanh đỉnh cao với các dòng loa cực chất.
          </p>
          <p className="text-sm leading-relaxed">
            Công việc buôn bán để phục vụ gia đình.
          </p>
          {/* PHẦN ICON MẠNG XÃ HỘI MỚI */}
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white rounded-full text-black"><FaFacebookF size={18} /></a>
            <a href="#" className="p-2 bg-white rounded-full text-black"><FaInstagram size={18} /></a>
            <a href="#" className="p-2 bg-white rounded-full text-black"><FaYoutube size={18} /></a>
            <a href="#" className="p-2 bg-white rounded-full text-black"><FaTwitter size={18} /></a>
          </div>
        </div>

        {/* --- CÁC CỘT KHÁC GIỮ NGUYÊN --- */}
        <div>
          <h4 className="text-white font-bold my-6  uppercase text-xs tracking-[0.2em]">Liên hệ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-white mt-1" /> <span>Cửa khẩu Tân Thanh Lạng Sơn, Việt Nam.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="text-white mt-1" /> <span>Ân Thi, Hưng Yên, Việt Nam</span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-white" /> <span>0912619294 - 0888533518</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;