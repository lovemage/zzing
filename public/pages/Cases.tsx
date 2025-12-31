
import React, { useState, useMemo } from 'react';
import { CASES } from '../constants';
import { Link } from 'react-router-dom';

const Cases: React.FC = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredCases = useMemo(() => {
        return CASES.filter(c => {
            const matchCategory = filter === 'all' || c.category === filter;
            const matchSearch = !search ||
                c.title.toLowerCase().includes(search.toLowerCase()) ||
                c.excerpt.toLowerCase().includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [filter, search]);

    const categories = ['All', '膠囊代工', '粉劑代工', '液態代工', '錠劑代工', '軟膠囊代工', '果凍代工', '糖衣錠代工'];

    return (
        <div className="bg-bg-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-primary text-sm font-black tracking-widest uppercase">專業代工</h2>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">產品案例展示</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                        以下是我們為客戶成功代工的產品案例，展現我們在配方研發、生產製造、品質控管等方面的專業實力。
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-centerGap-6 mb-12 space-y-4 md:space-y-0">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat === 'All' ? 'all' : cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${(filter === 'all' && cat === 'All') || filter === cat
                                    ? 'bg-primary text-slate-900 shadow-md transform scale-105'
                                    : 'bg-white text-slate-500 border border-slate-100 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat === 'All' ? '全部' : cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="搜尋案例..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-700 font-medium"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-2 text-slate-400">search</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCases.length > 0 ? (
                        filteredCases.map((item) => (
                            <Link to={`/cases/${item.id}`} key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 block">
                                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/600/400`; }}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col h-[calc(100%-aspect-[4/3])]">
                                    <div className="mb-4">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-2">
                                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                                            {item.date}
                                        </span>
                                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-50">
                                        <span className="text-primary font-black text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                                            查看詳情 <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-slate-400">
                            <span className="material-symbols-outlined text-6xl mb-4 text-slate-200">sentiment_dissatisfied</span>
                            <p className="font-bold text-lg">沒有找到符合條件的案例</p>
                            <button onClick={() => { setFilter('all'); setSearch('') }} className="mt-4 text-primary font-black hover:underline">清除篩選</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Cases;
