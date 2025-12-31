
import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="bg-bg-light min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="text-center mb-12 border-b border-slate-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">隱私聲明</h1>
                        <p className="text-slate-500 font-medium">最後更新：2025年1月1日</p>
                    </div>

                    <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-medium prose-li:text-slate-600 prose-a:text-primary">
                        <p className="lead text-lg">
                            日日瀅生醫有限公司（以下簡稱「本公司」）重視您的隱私權保護。本隱私聲明說明我們如何收集、使用、儲存及保護您的個人資料。
                        </p>

                        <h3 className="text-xl">1. 個人資料收集</h3>
                        <p>我們可能收集以下類型的個人資料：</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>基本資料：姓名、電話、電子郵件地址、公司名稱、職稱</li>
                            <li>聯絡資訊：通訊地址、帳單地址</li>
                            <li>業務資訊：產品需求、配方規格、合作歷史</li>
                            <li>網站使用資訊：IP 位址、瀏覽器類型、造訪頁面</li>
                        </ul>

                        <h3 className="text-xl mt-8">2. 資料收集方式</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>您主動提供：透過聯絡表單、電話、電子郵件或面談</li>
                            <li>網站互動：使用 Cookie 技術記錄網站使用行為</li>
                            <li>業務往來：合約簽署、服務提供過程中取得</li>
                            <li>第三方來源：合法的商業資料庫或合作夥伴</li>
                        </ul>

                        <h3 className="text-xl mt-8">3. 資料使用目的</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>提供代工服務與技術支援</li>
                            <li>處理訂單、合約管理與帳務作業</li>
                            <li>客戶關係維護與售後服務</li>
                            <li>產品開發與市場分析</li>
                            <li>法規遵循與內部管理</li>
                            <li>行銷推廣與電子報發送（需您同意）</li>
                        </ul>

                        <h3 className="text-xl mt-8">4. 資料分享與揭露</h3>
                        <p>我們不會販售您的個人資料。僅在以下情況下分享資料：</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>獲得您的明確同意</li>
                            <li>委託第三方服務商協助業務處理（如物流、檢驗機構）</li>
                            <li>遵守法律義務或配合司法調查</li>
                            <li>保護本公司或他人的合法權益</li>
                            <li>企業併購或重組時的資產移轉</li>
                        </ul>

                        <h3 className="text-xl mt-8">5. 資料保護措施</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>採用適當的技術與管理措施保護個人資料</li>
                            <li>限制員工存取權限，定期進行資安教育訓練</li>
                            <li>與第三方服務商簽署保密協議</li>
                            <li>定期檢視並更新資安防護機制</li>
                            <li>建立資料外洩應變程序</li>
                        </ul>

                        <h3 className="text-xl mt-8">6. Cookie 使用</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本網站使用 Cookie 改善使用者體驗</li>
                            <li>分析網站流量與使用模式</li>
                            <li>您可透過瀏覽器設定管理 Cookie</li>
                            <li>停用 Cookie 可能影響網站功能</li>
                        </ul>

                        <h3 className="text-xl mt-8">7. 您的權利</h3>
                        <p>依據個人資料保護法，您享有以下權利：</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>查詢或請求閱覽您的個人資料</li>
                            <li>請求製給複製本</li>
                            <li>請求補充或更正</li>
                            <li>請求停止收集、處理或利用</li>
                            <li>請求刪除</li>
                        </ul>

                        <h3 className="text-xl mt-8">8. 資料保存期限</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>業務資料：依法規要求或合約約定保存</li>
                            <li>行銷資料：直到您要求停止或取消訂閱</li>
                            <li>網站使用資料：通常保存 2 年</li>
                            <li>超過保存期限的資料將安全銷毀</li>
                        </ul>

                        <h3 className="text-xl mt-8">9. 未成年人保護</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>本網站服務對象為企業客戶</li>
                            <li>不主動收集未滿 18 歲者的個人資料</li>
                            <li>如發現誤收將立即刪除</li>
                        </ul>

                        <h3 className="text-xl mt-8">10. 聯絡我們</h3>
                        <p>如對本隱私聲明有任何疑問或需要行使您的權利，請聯絡我們：</p>
                        <ul className="list-none pl-0 space-y-2 bg-slate-50 p-6 rounded-2xl">
                            <li><strong>電話：</strong>04-22017588</li>
                            <li><strong>地址：</strong>台中市西區台灣大道二段2號5樓之1</li>
                            <li><strong>電子郵件：</strong>（請透過聯絡表單）</li>
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

export default Privacy;
