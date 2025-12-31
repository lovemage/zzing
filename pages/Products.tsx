
import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="bg-bg-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase">產品與原料中心</h2>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">高品質日本進口原料</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">我們嚴選來自日本各地的純淨素材，經過嚴格生物技術提取，確保每一毫克都充滿健康能量。</p>
          <div className="pt-4">
            <Link to="/products_list" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg hover:gap-3 group">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">menu_book</span>
              產品目錄
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => (
            <div key={p.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  {p.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-primary-dark text-sm font-bold uppercase tracking-widest">{p.origin}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-200 group-hover:text-primary transition-colors">spa</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-medium flex-1">
                  {p.description}
                </p>
                <div className="pt-4 border-t border-slate-50">
                  <button className="w-full bg-slate-50 hover:bg-primary hover:text-slate-900 text-slate-500 py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2">
                    詢問原料詳情 <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Section */}
        <div className="mt-24 bg-white rounded-3xl p-12 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-3xl font-black text-slate-900">需要獨家客製配方？</h3>
            <p className="text-slate-500 max-w-lg font-medium">我們的研發團隊擁有超過 20 年的生醫背景，能為您打造獨一無二的品牌專屬配方。</p>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-slate-900 px-12 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-primary/20">
            聯繫研發團隊
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
