# 日日瀅生醫官方網站核心功能簡述

本網站採用 **靜態網頁架構 (Static HTML)** 搭配 **Decap CMS (原 Netlify CMS)** 進行內容管理，並透過自定義腳本與前端 JavaScript 實現動態內容展示。

## 1. 系統架構概要
- **前端技術**: HTML5, CSS3 (Bootstrap), jQuery, Vanilla JavaScript
- **後台管理**: Decap CMS (基於 Git 的無頭 CMS)
- **構建工具**: Node.js (用於同步內容數據)
- **部署平台**: Netlify (推測，基於 `netlify.toml` 與 CMS 設定)

## 2. 核心功能模組

### 2.1 產品案例管理系統 (Case Study System)
這是網站最核心的動態內容模組，用於展示代工成功案例。
- **資料來源**: Markdown 檔案 (`content/cases/*.md`)
- **管理方式**: 透過 CMS 介面新增/編輯案例（標題、分類、日期、圖片、內文等）。
- **同步機制**:
    - 構建時透過 `scripts/sync-cases.js` 腳本讀取所有 Markdown 檔案。
    - 解析 Front Matter 並過濾已發布 (published) 的案例。
    - 彙整生成 `content/cases.json` 靜態數據檔。
- **前端展示**:
    - **首頁**: JS 讀取 `cases.json`，動態渲染最新的 6 筆案例卡片。
    - **列表頁 (`blog.html`)**: 讀取完整 JSON 呈現所有案例。
    - **詳情頁 (`case-detail.html`)**: 透過 URL 參數 (如 `?file=...`) 載入並解析特定案例內容。

### 2.2 機能配方展示系統 (Formula Showcase)
用於展示各類保健食品配方（如體重管理、美容抗老等）。
- **資料來源**: JSON 檔案 (`content/formulas.json`)
- **管理方式**: CMS 支援直接編輯配方列表、圖標、背景圖及 SEO 設定。
- **前端展示**:
    - **首頁**: JS 動態載入配方卡片，支援懸停特效與詳細描述展開。
    - **單頁應用**: 每個配方類別對應獨立的 HTML 頁面 (如 `weight-control.html`)，這些頁面可能共用數據或靜態寫死（需視具體頁面實作而定，但在 CMS 中有相關設定）。

### 2.3 客戶見證輪播 (Testimonials Slider)
- **資料來源**: JSON 檔案 (`content/testimonials.json`)
- **管理方式**: CMS 管理客戶姓名、公司、職稱、評分與證言內容。
- **前端展示**: 首頁使用 Owl Carousel 插件結合 JS Fetch 動態載入並輪播客戶見證。

### 2.4 全站設定管理 (Global Configuration)
- **資料來源**: JSON 檔案 (`content/site-config.json`)
- **管理範圍**: 網站標題、聯絡資訊 (電話/信箱/地址)、社群連結、以及首頁的統計數據 (成功案例數、滿意度等)。
- **用途**: 允許非技術人員透過後台直接修改全站共用的關鍵資訊，無需修改程式碼。

## 3. 關鍵檔案說明
- `admin/config.yml`: CMS 的核心設定檔，定義了所有內容模型 (Collections) 與欄位。
- `scripts/sync-cases.js`: 關鍵的中介腳本，負責將 CMS 產生的 Markdown 轉換為前端可用的 JSON 格式。
- `content/`: 存放所有動態內容的資料夾 (JSON 與 Markdown)。
- `assets/`: 靜態資源（CSS, JS, 圖片）。

## 4. 開發與維護流程
1. **內容更新**: 行銷人員登入 `/admin/` 進行內容編輯與發布。
2. **自動同步**: 觸發 Netlify Build 或本地執行 `npm run sync-cases`。
3. **頁面更新**: 腳本更新 JSON 數據 -> 前端 JS 讀取新數據 -> 網頁內容即時更新。
