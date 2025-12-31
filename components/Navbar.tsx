
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const EN_LABELS: Record<string, string> = {
    '首頁': 'Home',
    '關於我們': 'About Us',
    '代工服務': 'Services',
    '產品案例': 'Cases',
    '原料中心': 'Products',
    '客戶支援': 'Support',
    '聯絡我們': 'Contact',
  };
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/images-edit/logo-1.png" alt="日日瀅生醫" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-slate-600'
                  }`}
              >
                <div className="flex flex-col items-center">
                  <span>{item.label}</span>
                  <span className="text-xs text-green-500">{EN_LABELS[item.label] ?? ''}</span>
                </div>
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary-dark text-slate-900 px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-md active:scale-95">
                免費諮詢
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-base font-bold text-slate-700 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="block w-full" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-primary text-slate-900 py-3 rounded-lg font-black">
                免費諮詢
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
