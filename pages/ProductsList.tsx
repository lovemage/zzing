
import React, { useState } from 'react';
import { PRODUCT_CATALOG } from '../src/data/catalog';
import { CatalogProduct } from '../types';

const ProductsList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = PRODUCT_CATALOG.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-bg-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-primary text-sm font-black tracking-widest uppercase">全系列產品</h2>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">產品型錄</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">探索我們豐富的產品系列，滿足您多樣化的市場需求。</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="搜尋產品..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border-slate-200 focus:border-primary focus:ring-primary shadow-sm"
                        />
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="aspect-square relative overflow-hidden bg-slate-50 p-4">
                                <img
                                    src={product.mainImage}
                                    alt={product.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center text-sm font-bold text-primary">
                                    <span>查看詳情</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Product Detail Modal */}
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedProduct(null)}
                        ></div>
                        <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300">

                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-all"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="w-full md:w-1/2 bg-slate-50 p-8 flex items-center justify-center">
                                {/* Display EDM if available, else Main Image */}
                                <img
                                    src={selectedProduct.edmImage || selectedProduct.mainImage}
                                    alt={selectedProduct.title}
                                    className="w-full h-auto object-contain rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <h2 className="text-3xl font-black text-slate-900 mb-4">{selectedProduct.title}</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-2">產品特色</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">{selectedProduct.features || selectedProduct.description}</p>
                                    </div>

                                    {selectedProduct.ingredients && (
                                        <div>
                                            <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-2">成分</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{selectedProduct.ingredients}</p>
                                        </div>
                                    )}

                                    {selectedProduct.usage && (
                                        <div>
                                            <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-2">建議食用方式</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{selectedProduct.usage}</p>
                                        </div>
                                    )}

                                    <div className="pt-8 mt-8 border-t border-slate-100">
                                        <button className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-black transition-all">
                                            諮詢此產品
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductsList;
