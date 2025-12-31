
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../constants';

const Support: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-bg-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-primary text-sm font-black tracking-widest uppercase">專業服務</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">全方位客戶支援</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                        我們提供完整的售前諮詢與售後服務，確保每位客戶都能獲得最佳的代工體驗。
                    </p>
                </div>

                {/* Support Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: 'call', title: '電話諮詢', desc: '專業客服團隊提供即時電話諮詢服務', sub: '04-22017588', note: '週一至週五 9:00-18:00' },
                        { icon: 'mail', title: '線上諮詢', desc: '透過聯絡表單提出您的問題', action: true, note: '24小時內回覆' },
                        { icon: 'person', title: '專案經理', desc: '指派專屬專案經理全程服務', sub: '一對一服務', note: '從諮詢到交付' },
                        { icon: 'settings', title: '技術支援', desc: '專業技術團隊提供配方與製程諮詢', sub: '技術諮詢', note: '配方優化建議' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 font-medium text-sm mb-4 leading-relaxed">{item.desc}</p>
                            {item.action ? (
                                <Link to="/contact" className="inline-block bg-primary text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:brightness-110 transition-all mb-2">
                                    立即諮詢
                                </Link>
                            ) : (
                                <p className="text-slate-900 font-black text-lg mb-2">{item.sub}</p>
                            )}
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.note}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* FAQ Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            常見問題 FAQ
                        </h3>
                        <div className="space-y-4">
                            {FAQ_ITEMS.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-bold text-slate-800 text-lg pr-4">Q: {item.q}</span>
                                        <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>expand_more</span>
                                    </button>
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-slate-500 font-medium leading-relaxed pl-4 border-l-2 border-primary/30">
                                            <span className="font-black text-primary mr-2">A:</span>
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <span className="material-symbols-outlined text-9xl">schedule</span>
                            </div>
                            <h4 className="text-xl font-black mb-6 relative z-10">服務時間</h4>
                            <ul className="space-y-4 relative z-10 text-slate-300 font-medium">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    週一至週五：9:00 - 18:00
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    週六：9:00 - 12:00
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-500">block</span>
                                    週日及國定假日：休息
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-slate-100">
                            <h4 className="text-xl font-black text-slate-900 mb-6">下載專區</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: '產品規格表', link: '/products_list' },
                                    { name: '委託代工合約範本', link: '#' },
                                    { name: '品質認證文件', link: '#' },
                                    { name: '法規標示指南', link: '#' }
                                ].map((file, i) => (
                                    <li key={i}>
                                        <Link to={file.link} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group transition-colors text-slate-600 font-medium">
                                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">download</span>
                                            {file.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Support;
