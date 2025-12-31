
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-white pt-20 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            關於我們
                        </h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                            選擇日日瀅生醫：您的日本品質一站式保健食品代工夥伴
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-bg-light py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-black text-slate-900">
                                打造健康新世代，我們是您最堅實的代工夥伴
                            </h2>
                            <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                                <p>
                                    台灣日日瀅生醫致力於提供頂尖的一站式保健食品代工服務，助您產品暢銷全球。
                                </p>
                                <p>
                                    我們代理的工廠（森本醫藥品製造）位於 <strong>日本奈良縣御所市783番地</strong>，擁有先進的自動化生產線。每年，我們設計與代工生產超過 <strong>1000 款暢銷保健品</strong>，成功遍布歐洲、美國、中國及東南亞等國際市場。
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/assets/images-edit/Capsule-Filling-Machine-1.webp"
                                    alt="Factory"
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        // Fallback image if local asset not found in new design context, using picsum for now or keeping broken clear
                                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/factory/800/600";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Advantages */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-primary text-sm font-black tracking-widest uppercase">我們的核心優勢</h2>
                        <h3 className="text-4xl font-black text-slate-900">為什麼選擇日日瀅生醫？</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: 'verified_user', title: '全球認可的品質標準', desc: '我們的廠房符合最嚴格的國際規範，通過 NSF、ISO 22000、HACCP 國際認證，並全面符合美國保健食品 cGMP (現行藥品優良製造規範) 要求。' },
                            { icon: 'precision_manufacturing', title: '日本製造的嚴謹保證', desc: '結合日本製造的嚴謹工藝與品質把控，確保您的製品擁有國際級的競爭力。' },
                            { icon: 'trending_up', title: '精準市場策略', desc: '我們能精準分析客戶的目標市場，提供從配方開發到量產的全方位解決方案，確保您的產品具備市場競爭力。' },
                            { icon: 'public', title: '國際市場經驗', desc: '選擇日日瀅生醫，透過日本森本工廠的製造實力，讓您的保健品事業成功跨足國際。' }
                        ].map((v, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all flex gap-6 items-start">
                                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-3">{v.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-primary text-sm font-black tracking-widest uppercase">企業核心價值</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: '創新', desc: '持續投入研發創新，開發符合市場需求的新產品配方與劑型，為客戶創造更多價值。', icon: 'lightbulb' },
                            { title: '關懷', desc: '以消費者健康為出發點，用心製作每一項產品，為社會大眾的健康福祉貢獻心力。', icon: 'handshake' },
                            { title: '誠信', desc: '秉持誠信經營理念，提供透明的代工流程與品質保證，建立長期互信的合作關係。', icon: 'verified' }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <span className="material-symbols-outlined text-5xl text-primary mb-6 block">{item.icon}</span>
                                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/10">
                <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">準備好開始合作了嗎？</h2>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <button className="bg-primary text-slate-900 px-10 py-4 rounded-full font-black text-lg hover:bg-primary-dark transition-all shadow-xl">
                                立即聯絡我們
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
