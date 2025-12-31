
import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="bg-bg-light min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="text-center mb-12 border-b border-slate-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">服務條款</h1>
                        <p className="text-slate-500 font-medium">最後更新：2025年1月1日</p>
                    </div>

                    <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-medium prose-li:text-slate-600 prose-a:text-primary">
                        <p className="lead text-lg">
                            歡迎使用日日瀅生醫有限公司（以下簡稱「本公司」）提供的保健食品代工服務。請您仔細閱讀以下服務條款，使用本公司服務即表示您同意遵守這些條款。
                        </p>

                        <h3 className="text-xl">1. 服務範圍</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>保健食品配方開發與優化</li>
                            <li>各類劑型代工生產（粉劑、錠劑、膠囊、軟膠囊、果凍、糖衣錠）</li>
                            <li>包裝設計與生產</li>
                            <li>品質檢驗與認證協助</li>
                            <li>法規諮詢與標示審核</li>
                        </ul>

                        <h3 className="text-xl mt-8">2. 委託方義務</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>提供完整且正確的產品需求規格</li>
                            <li>確保所提供原料符合相關法規標準</li>
                            <li>配合生產排程與品質檢驗流程</li>
                            <li>按約定時間支付相關費用</li>
                            <li>遵守相關法規與標示規範</li>
                        </ul>

                        <h3 className="text-xl mt-8">3. 品質保證</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本公司採用 cGMP 標準生產流程</li>
                            <li>所有產品均經第三方檢驗機構檢測</li>
                            <li>提供完整的生產履歷與檢驗報告</li>
                            <li>產品品質問題將依約定標準處理</li>
                        </ul>

                        <h3 className="text-xl mt-8">4. 智慧財產權</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>委託方提供的配方與商標歸委託方所有</li>
                            <li>本公司開發的製程技術歸本公司所有</li>
                            <li>雙方應保護對方的商業機密</li>
                            <li>未經同意不得洩露或使用對方專有資訊</li>
                        </ul>

                        <h3 className="text-xl mt-8">5. 責任限制</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本公司責任以合約金額為上限</li>
                            <li>不可抗力因素造成的延遲或損失不承擔責任</li>
                            <li>委託方使用產品產生的後果由委託方自行負責</li>
                            <li>法規變更導致的調整費用由委託方承擔</li>
                        </ul>

                        <h3 className="text-xl mt-8">6. 付款條件</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>簽約時支付訂金 30%</li>
                            <li>生產完成驗收合格後支付餘款</li>
                            <li>逾期付款將收取滯納金</li>
                            <li>所有費用均為含稅價格</li>
                        </ul>

                        <h3 className="text-xl mt-8">7. 終止條款</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>任一方可提前 30 天書面通知終止合約</li>
                            <li>違約方應承擔相應的違約責任</li>
                            <li>終止後雙方應妥善處理未完成事項</li>
                            <li>保密義務在合約終止後仍然有效</li>
                        </ul>

                        <h3 className="text-xl mt-8">8. 爭議處理</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>因本條款產生的爭議應優先協商解決</li>
                            <li>協商不成時，提交台中地方法院管轄</li>
                            <li>適用中華民國法律</li>
                        </ul>

                    </div>

                    <div className="mt-12 text-center text-slate-400 text-sm font-bold border-t border-slate-100 pt-8">
                        <p>日日瀅生醫有限公司</p>
                        <p>Ri Ri Ying Bio-Medical Co., Ltd.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Terms;
