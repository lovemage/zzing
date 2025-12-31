
import React from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    company: '',
    subject: '保健食品代工',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Create URLSearchParams from form data
    const params = new URLSearchParams();
    params.append('form-name', 'contact');
    Object.entries(formData).forEach(([key, value]) => {
      params.append(key, value);
    });

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    })
      .then(() => alert('感謝您的訊息，我們將盡快與您聯繫！'))
      .catch((error) => alert('發送失敗，請稍後再試或直接聯絡我們。'));
  };

  return (
    <div className="bg-bg-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl font-black text-slate-900 tracking-tighter">聯絡我們</h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                如果您對保健食品代工有任何需求，或對日本原料有採購意向，請填寫表單或直接聯繫我們，專業顧問將為您服務。
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">諮詢專線</p>
                  <a href="tel:04-22017588" className="text-2xl font-black text-slate-800 hover:text-primary transition-colors">04-22017588</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">電子郵件</p>
                  <a href="mailto:service@ririyingbio.com" className="text-2xl font-black text-slate-800 hover:text-primary transition-colors">service@ririyingbio.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">公司地址</p>
                  <p className="text-xl font-black text-slate-800">台中市西區台灣大道二段2號5樓之1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-black text-slate-900 mb-8">發送諮詢訊息</h3>
            <form className="space-y-6" onSubmit={handleSubmit} method="POST" data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-slate-100 bg-slate-50 rounded-xl focus:ring-primary focus:border-primary p-4"
                    placeholder="王小明"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">聯絡電話</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-slate-100 bg-slate-50 rounded-xl focus:ring-primary focus:border-primary p-4"
                    placeholder="0912-345-678"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">公司名稱 (選填)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-slate-100 bg-slate-50 rounded-xl focus:ring-primary focus:border-primary p-4"
                  placeholder="您的企業名稱"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">需求主題</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-slate-100 bg-slate-50 rounded-xl focus:ring-primary focus:border-primary p-4"
                >
                  <option value="保健食品代工">保健食品代工</option>
                  <option value="日本原料採購">日本原料採購</option>
                  <option value="產品研發諮詢">產品研發諮詢</option>
                  <option value="其他業務合作">其他業務合作</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">詳細說明</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-slate-100 bg-slate-50 rounded-xl focus:ring-primary focus:border-primary p-4"
                  placeholder="請描述您的產品想法或需求..."
                  required
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-xl font-black text-lg transition-all shadow-xl shadow-slate-200">
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
