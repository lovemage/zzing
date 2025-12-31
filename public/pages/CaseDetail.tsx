
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CASES } from '../constants';

const CaseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Handle both numeric IDs (from old system maybe) and string IDs if we decide to change
    const caseId = Number(id);
    const caseItem = CASES.find(c => c.id == caseId || c.title === id); // Flexible finding

    if (!caseItem) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-light">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">找不到該案例</h2>
                    <Link to="/cases" className="text-primary hover:underline font-bold">返回案例列表</Link>
                </div>
            </div>
        );
    }

    // Get related cases (exclude current one)
    const relatedCases = CASES.filter(c => c.id !== caseItem.id).slice(0, 3);

    return (
        <div className="bg-bg-light min-h-screen pb-20">
            {/* Banner */}
            <div className="bg-slate-900 border-b border-slate-800 pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-primary/20">
                        PRODUCT CASE STUDY
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {caseItem.title}
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-slate-400 font-medium text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">calendar_today</span>
                            {caseItem.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">category</span>
                            {caseItem.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar - Desktop (Left stickt) */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h3 className="font-black text-slate-900 mb-4 pb-4 border-b border-slate-100">目錄</h3>
                                <ul className="space-y-3 text-sm font-bold text-slate-500">
                                    <li>
                                        <a href="#challenge" className="flex items-center gap-2 hover:text-primary transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 專案背景
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#solution" className="flex items-center gap-2 hover:text-primary transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 解決方案
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#result" className="flex items-center gap-2 hover:text-primary transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 專案成果
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/contact" className="block w-full bg-primary text-slate-900 text-center py-4 rounded-full font-black hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all">
                                諮詢類似專案
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            {/* Featured Image */}
                            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 bg-slate-100">
                                <img
                                    src={caseItem.image}
                                    alt={caseItem.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Excerpt */}
                            <div className="prose prose-lg prose-slate max-w-none mb-12">
                                <p className="lead font-bold text-slate-600 border-l-4 border-primary pl-6">
                                    {caseItem.excerpt}
                                </p>
                            </div>

                            {/* Content Paragraphs */}
                            <div className="space-y-12">
                                {caseItem.content ? (
                                    caseItem.content.map((paragraph, idx) => {
                                        // Simple heuristic to split sections based on content, normally this would be more structured
                                        // For now we just render paragraphs nicely
                                        return (
                                            <div key={idx} className="prose prose-slate max-w-none">
                                                <p>{paragraph}</p>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <p className="text-slate-500 italic">無詳細內容。</p>
                                )}
                            </div>

                            {/* Testimonial / Results Box (Simulated) */}
                            <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 relative">
                                <span className="material-symbols-outlined text-6xl text-slate-200 absolute top-4 right-4 rotate-12">format_quote</span>
                                <h3 className="text-xl font-black text-slate-900 mb-4">專案成果</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    本專案成功協助客戶打造出差異化產品，不僅在口感與風味上獲得市場高度評價，穩定的製程與品質更為品牌建立了良好的信譽。上市首季銷售量即突破預期目標，成為該品牌的年度明星商品。
                                </p>
                            </div>

                        </div>

                        {/* Related Cases */}
                        <div className="mt-20">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                更多成功案例
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedCases.map((related) => (
                                    <Link to={`/cases/${related.id}`} key={related.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300">
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100">
                                            <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                            {related.title}
                                        </h4>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{related.category}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaseDetail;
