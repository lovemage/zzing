
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, SERVICE_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                專業 • 創新 • 品質
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                為您的品牌打造 <br />
                <span className="text-primary underline decoration-primary/30 underline-offset-8">頂級保健食品</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                結合尖端生技與匠心工藝，提供一站式 OEM/ODM 代工服務，助您搶佔市場先機。
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link to="/contact">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-slate-900 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                    立即諮詢
                  </button>
                </Link>
                <Link to="/services">
                  <button className="w-full sm:w-auto bg-transparent border-2 border-slate-200 hover:border-primary text-slate-800 px-10 py-4 rounded-full font-black text-lg transition-all">
                    探索服務
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="rounded-3xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/assets/videos/IMG_0144480 copy.mov"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-light to-transparent"></div>
      </section>

      {/* Stats/Values Section */}
      <section className="bg-bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-primary text-sm font-black tracking-widest uppercase">
              核心優勢
              <span className="block text-xs text-green-500">Core Advantages</span>
            </h2>
            <h3 className="text-4xl font-black text-slate-900">為什麼選擇日日瀅生醫？</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '/assets/icons_new/natureherbs.PNG',
                title: '創新配方研發',
                desc: '掌握市場趨勢，開發獨家機能配方，助您打造差異化產品，搶佔市場先機。',
                enDesc: 'Master market trends, develop exclusive functional formulas to help you build differentiated products.'
              },
              {
                icon: '/assets/icons_new/isocertified.PNG',
                title: '先進製程技術',
                desc: '引進自動化生產設備，嚴格控管生產流程，確保產品品質穩定、交期準時。',
                enDesc: 'Introduce automated production equipment, strictly control production processes ensure stable quality.'
              },
              {
                icon: '/assets/icons_new/qualitycontrol.PNG',
                title: '嚴格品質把關',
                desc: '通過多項國際認證，建立完善的品管體系，讓您的產品安全無虞，消費者更安心。',
                enDesc: 'Passed multiple international certifications, established a complete quality control system.'
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all group">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img src={v.icon} alt={v.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-4">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-2">{v.desc}</p>
                <p className="text-xs text-green-500 leading-relaxed font-medium">{v.enDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sneak Peek */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="text-primary text-sm font-black tracking-widest uppercase">
                高端日本原料
                <span className="block text-xs text-green-500 mt-1 capitalize">Premium Japanese Ingredients</span>
              </h2>
              <h3 className="text-4xl font-black text-slate-900">選自純淨源頭，打造極致體感</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-end">
              <Link to="/products" className="text-slate-500 font-bold flex items-center gap-2 hover:text-primary transition-all">
                日本原料中心 <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/products_list" className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all">
                查看完整產品型錄 <span className="material-symbols-outlined">menu_book</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(p => (
              <div key={p.id} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 mb-4 relative shadow-md">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                    {p.category}
                  </div>
                </div>
                <h4 className="text-lg font-black text-slate-800 group-hover:text-primary transition-colors">{p.name}</h4>
                <p className="text-slate-500 text-sm font-medium">{p.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-primary text-sm font-black tracking-widest uppercase">
              全方位代工流程
              <span className="block text-xs text-green-500">Full-process Manufacturing</span>
            </h2>
            <h3 className="text-4xl font-black">
              從概念到貨架，我們一路領航
              <span className="block text-xs text-green-500">From concept to shelf, we lead the way</span>
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images-edit/product_development_process.jpeg"
              alt="全方位代工流程"
              className="w-full max-w-5xl rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">打造健康新世代</h2>
          <p className="text-xl text-slate-900/70 font-bold max-w-2xl mx-auto leading-relaxed">
            我們是您最堅實的代工夥伴。與日日瀅生醫合作，獲得日本頂尖原料與專業研發支援。讓我們攜手將健康與活力帶向全世界。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-black transition-all shadow-2xl active:scale-95">
                立即預約諮詢
              </button>
            </Link>
            <Link to="/products_list">
              <button className="bg-white/20 backdrop-blur-md text-slate-900 border border-white/30 px-12 py-5 rounded-full font-black text-xl hover:bg-white/30 transition-all">
                下載產品目錄
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
