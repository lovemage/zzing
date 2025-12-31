
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_STEPS } from '../constants';

const Services: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-white pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-xs font-black uppercase tracking-widest">
                            OEM / ODM Services
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                            專業代工服務流程
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            從配方設計、原料把關到成品製造，我們提供全方位的專業服務，讓您的品牌夢想完美落地。
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="bg-white pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-slate-900">
                                多元劑型開發 <br />
                                <span className="text-primary">滿足市場多元需求</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                擁有完整的生產線與專業研發團隊，可承接膠囊、錠劑、粉包、飲品等多種劑型代工。嚴格遵循 ISO22000 與 HACCP 規範，確保產品安全與品質。
                            </p>
                            <ul className="space-y-4">
                                {['膠囊充填 (Capsules)', '錠劑打錠 (Tablets)', '機能粉包 (Powder)', '濃縮飲品 (Drinks)'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
                                            <span className="material-symbols-outlined text-sm font-black">check</span>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-6 pt-12">
                                <img src="/assets/images-edit/1.JPG" className="rounded-3xl shadow-lg w-full object-cover" alt="Service 1" />
                                <img src="/assets/images-edit/2.JPG" className="rounded-3xl shadow-lg w-full object-cover" alt="Service 2" />
                            </div>
                            <div className="space-y-6">
                                <img src="/assets/images-edit/3.JPG" className="rounded-3xl shadow-lg w-full object-cover" alt="Service 3" />
                                <img src="/assets/images-edit/4.JPG" className="rounded-3xl shadow-lg w-full object-cover" alt="Service 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Japanese OEM Capability Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest animate-pulse">
                                Premium Japanese OEM
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                                健康食品保健品 OEM <br />
                                <span className="text-primary">135年製藥技術傳承</span>
                            </h2>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed">
                                運用創業 135 年的深厚製藥底蘊，為您打造高品質的健康補給品。我們專精於小量生產，即使遭其他工廠婉拒的案件，也能提供讓您滿意的解決方案。
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-primary font-black text-lg mb-2">解決您的痛點</h4>
                                    <ul className="space-y-2 text-sm text-slate-400 font-medium">
                                        <li className="flex gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                                            不知從何尋找代工廠
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                                            原料庫存過剩無處去
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                                            找不到小量生產夥伴
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h4 className="text-primary font-black text-lg mb-2">極小量生產優勢</h4>
                                    <p className="text-sm text-slate-400 font-medium mb-3">特化生產體制，大幅降低庫存風險。</p>
                                    <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-300">
                                        <span className="bg-primary/20 px-2 py-1 rounded">1萬 膠囊</span>
                                        <span className="bg-primary/20 px-2 py-1 rounded">3萬 錠劑</span>
                                        <span className="bg-primary/20 px-2 py-1 rounded">5千 粉包</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-12">
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black shrink-0">01</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2">成本效益最大化 (Cost Efficiency)</h4>
                                        <p className="text-slate-400 font-medium">
                                            從原料調達、企劃到成品化，全製程皆在自社工廠完成。徹底的工程管理實現壓倒性的低成本生產。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black shrink-0">02</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2">製藥級處方技術 (Pharmaceutical Technology)</h4>
                                        <p className="text-slate-400 font-medium">
                                            運用製藥經驗，提供最適合成分特性的膠囊填充、打錠、粉包等製劑提案，確保產品安定性與有效性。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black shrink-0">03</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2">多樣化原料調達 (Diverse Sourcing)</h4>
                                        <p className="text-slate-400 font-medium">
                                            擁有 135 年累積的原料通路，無論是高麗參、傳統漢方，或是熱門的 NMN、ドクダミ等特殊素材皆可調度。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black shrink-0">04</div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2">百年信譽保證 (Heritage & Trust)</h4>
                                        <p className="text-slate-400 font-medium">
                                            源自明治23年（1890年）創業的「森本製藥」，140年的製藥工藝與嚴格品管，是您最值得信賴的合作夥伴。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-2xl border-l-4 border-primary">
                                <h4 className="font-black text-xl mb-2">一站式全程支援</h4>
                                <p className="text-slate-300 font-medium">
                                    企劃提案 <span className="text-primary mx-2">➔</span> 原料調達 <span className="text-primary mx-2">➔</span> 生產製造 <span className="text-primary mx-2">➔</span> 品質管理 <span className="text-primary mx-2">➔</span> 出貨納品
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section - Links to detail pages */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary text-sm font-black tracking-widest uppercase">精選配方方案</h2>
                        <h3 className="text-4xl font-black text-slate-900">針對不同族群的專業解決方案</h3>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                            我們針對市場熱門需求，開發多款成熟配方，縮短您的產品開發週期。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: 'anti-aging', title: '美容抗老', subtitle: 'Anti-aging', icon: '/assets/icons_new/natureherbs.PNG' },
                            { id: 'child-growth', title: '幼兒成長', subtitle: 'Child Growth', icon: '/assets/icons_new/capsules.png' },
                            { id: 'elder-care', title: '銀髮長青', subtitle: 'Elder Care', icon: '/assets/icons_new/eccralherbs.PNG' },
                            { id: 'weight-control', title: '體重管理', subtitle: 'Weight Control', icon: '/assets/icons_new/tablets.PNG' },
                            { id: 'sport-nutrition', title: '運動保健', subtitle: 'Sport Nutrition', icon: '/assets/icons_new/power.PNG' },
                            { id: 'men-power', title: '男性機能', subtitle: 'Men Power', icon: '/assets/icons_new/lab-test.PNG' },
                        ].map((item) => (
                            <Link to={`/solutions/${item.id}`} key={item.id} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-6">
                                <div className={`w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.subtitle}</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Types Section */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary text-sm font-black tracking-widest uppercase">專業劑型代工</h2>
                        <h3 className="text-4xl font-black text-slate-900">滿足多樣化的產品需求</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: '膠囊', desc: '硬膠囊、軟膠囊，可依需求調整顏色與大小。', image: '/assets/images-edit/service-image1.avif' },
                            { title: '錠劑', desc: '圓形、橢圓形等多種形狀，可打字或刻痕。', image: '/assets/images-edit/Tablet.avif' },
                            { title: '粉包', desc: '鋁箔袋包裝，防潮性佳，攜帶方便。', image: '/assets/images-edit/Powder.avif' },
                            { title: '飲品', desc: '玻璃瓶、塑膠瓶或機能飲包，口感調味客製化。', image: '/assets/images/g4.jpg' },
                            { title: '果凍', desc: '果凍條劑型代工，口感佳易於吞嚥。', image: '/assets/images/g4.jpg' },
                            { title: '糖衣錠', desc: '糖衣錠劑型代工，外觀精美口感佳。', image: '/assets/images-edit/suger-tablet.avif' }
                        ].map((type, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100 mb-6 relative">
                                    <img
                                        src={type.image.startsWith('/') ? type.image : `/${type.image}`}
                                        alt={type.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${i}/600/400`; }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <h4 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-primary transition-colors">{type.title}</h4>
                                <p className="text-slate-500 font-medium">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Detail */}
            <section className="bg-bg-light py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-slate-900">我們的標準作業程序</h2>
                        <p className="text-slate-500 font-medium">嚴謹的五大步驟，確保每一個品牌旗艦產品都能完美落地。</p>
                    </div>
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {SERVICE_STEPS.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-8 group hover:border-primary transition-all">
                                <div className="text-5xl font-black text-primary/10 group-hover:text-primary/30 transition-colors">0{i + 1}</div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-black text-slate-800">{s.title}</h4>
                                    <p className="text-slate-500 font-medium">{s.description}</p>
                                </div>
                                <div className="w-16 h-16 flex-shrink-0">
                                    <img src={s.icon} alt={s.title} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
