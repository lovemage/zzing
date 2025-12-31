
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/images-edit/logo-1.png" alt="日日瀅生醫" className="h-8 w-auto brightness-0 opacity-80" />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              日日瀅生醫致力於提供高品質的保健食品代工服務，結合專業研發與創新技術，為您的品牌創造最大價值。
              <span className="block text-xs text-green-500 mt-2">Ri Ri Ying Bio-Medical is dedicated to providing high-quality supplement OEM services, creating maximum value for your brand.</span>
            </p>
            <div className="flex gap-4">
              <a href="tel:04-22017588" className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full hover:bg-primary/10 transition-colors text-slate-700 font-bold group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110">call</span>
                04-22017588
              </a>
              <a href="mailto:service@ririyingbio.com" className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full hover:bg-primary/10 transition-colors text-slate-700 font-bold group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110">mail</span>
                service@ririyingbio.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">
              快速連結
              <span className="block text-xs text-green-500 mt-1">Quick Links</span>
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products_list" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                  產品型錄
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">
              專業代工
              <span className="block text-xs text-green-500 mt-1">Professional OEM</span>
            </h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-primary cursor-default transition-colors">膠囊與錠劑</li>
              <li className="hover:text-primary cursor-default transition-colors">機能性粉劑</li>
              <li className="hover:text-primary cursor-default transition-colors">濃縮液體飲</li>
              <li className="hover:text-primary cursor-default transition-colors">日本原料採購</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">
              聯繫地址
              <span className="block text-xs text-green-500 mt-1">Contact Address</span>
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">
              台中市西區台灣大道二段2號5樓之1
              <span className="block text-xs text-green-500 mt-1">5F-1, No. 2, Sec. 2, Taiwan Blvd., West Dist., Taichung City</span>
            </p>
            <div className="h-48 w-full bg-slate-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.6046726597545!2d120.6669!3d24.1511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA5JzA0LjAiTiAxMjDCsDQwJzAwLjgiRQ!5e0!3m2!1szh-TW!2stw!4v1634567890000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
          <p>Copyright &copy; 2025 日日瀅生醫 Ri Ri Ying Bio-Medical Co., Ltd. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">隱私權政策</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
