
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SOLUTIONS } from '../constants';

const SolutionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const solution = SOLUTIONS.find(s => s.id === id);

    useEffect(() => {
        if (!solution) {
            // navigate('/404'); // Or redirect to home/services
        }
    }, [solution, navigate]);

    if (!solution) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-light">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">找不到該配方</h2>
                    <Link to="/services" className="text-primary hover:underline font-bold">返回服務列表</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-bg-light min-h-screen pb-20">
            {/* Banner */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={solution.bannerVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="relative z-20 text-center px-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                        {solution.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                        {solution.subtitle}
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-slate-100 sticky top-[72px] z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex text-sm font-medium text-slate-500">
                        <Link to="/" className="hover:text-primary transition-colors">首頁</Link>
                        <span className="mx-2">/</span>
                        <Link to="/services" className="hover:text-primary transition-colors">代工服務</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-800">{solution.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up delay-100">
                    <span className="text-primary font-black tracking-widest uppercase text-sm mb-3 block">SOLUTION EXPERT</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        {solution.description}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Features List */}
                <div className="space-y-24">
                    {solution.features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-8 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>

                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-100">
                                        {feature.title}
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                                                <span className="material-symbols-outlined text-lg">science</span>
                                                關鍵成分
                                            </h4>
                                            <ul className="space-y-3">
                                                {feature.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-lg font-medium text-slate-700">
                                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                                            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                                                <span className="material-symbols-outlined text-lg">palette</span>
                                                推薦風味
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {feature.flavors.map((flavor, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-bold shadow-sm">
                                                        {flavor}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full animate-fade-in-up" style={{ animationDelay: `${index * 100 + 100}ms` }}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32">
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                打造您的<span className="text-primary">熱銷冠軍</span>產品
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                                擁有專業研發團隊與 ISO 認證工廠，為您提供從配方設計到量產包裝的一站式服務。
                            </p>
                            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-slate-900 rounded-full text-lg font-black hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
                                    立即諮詢代工
                                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-700 text-white rounded-full text-lg font-bold hover:bg-slate-800 hover:border-slate-800 transition-all duration-300">
                                    了解生產優勢
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SolutionDetail;
