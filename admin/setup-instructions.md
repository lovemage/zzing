# Netlify CMS 管理員設定指南

## 1. 部署到 Netlify

1. 登入 [Netlify](https://netlify.com)
2. 點擊 "New site from Git"
3. 選擇 GitHub 並授權
4. 選擇 `lovemage/zzing` 倉庫
5. 設定：
   - Build command: (留空)
   - Publish directory: (留空，使用根目錄)
6. 點擊 "Deploy site"

## 2. 啟用 Identity 服務

1. 在 Netlify 網站設定中，點擊 "Identity"
2. 點擊 "Enable Identity"
3. 在 "Registration preferences" 中選擇 "Invite only"
4. 在 "External providers" 中可選擇啟用 Google/GitHub 登入（可選）

## 3. 啟用 Git Gateway

1. 在 Identity 設定頁面，點擊 "Services"
2. 點擊 "Git Gateway" 的 "Enable"
3. 選擇 "Automatic" 模式

## 4. 新增管理員使用者

### 方法一：透過 Netlify 後台
1. 在 Identity 頁面，點擊 "Invite users"
2. 輸入管理員 Email：`admin@zzing.com`
3. 點擊 "Send invite"
4. 管理員會收到邀請 Email，點擊連結設定密碼

### 方法二：透過網站註冊（需先開放註冊）
1. 暫時將 Registration 改為 "Open"
2. 前往 `https://your-site.netlify.app/admin/`
3. 點擊 "Sign up" 註冊帳號
4. 註冊完成後，回到 Netlify 將 Registration 改回 "Invite only"

## 5. 設定管理員角色

1. 在 Netlify Identity 使用者列表中
2. 點擊管理員使用者
3. 在 "User metadata" 中新增：
   ```json
   {
     "roles": ["admin"]
   }
   ```

## 6. 測試 CMS 存取

1. 前往 `https://your-site.netlify.app/admin/`
2. 使用管理員帳號登入
3. 應該可以看到：
   - 產品案例管理
   - Blog 文章管理
4. 測試新增/編輯功能

## 管理員帳號資訊

- **使用者名稱**: admin
- **Email**: admin@zzing.com  
- **密碼**: zzing123 (建議首次登入後修改)
- **角色**: admin (完整權限)

## 注意事項

1. **安全性**: 首次登入後請立即修改密碼
2. **備份**: 定期備份 content/ 資料夾
3. **權限**: admin 角色擁有所有內容的完整權限
4. **圖片**: 上傳的圖片會儲存在 assets/uploads/ 資料夾
5. **即時更新**: 透過 CMS 的修改會立即推送到 GitHub 並觸發網站重新部署

## 故障排除

### 無法登入 CMS
- 檢查 Identity 服務是否已啟用
- 檢查 Git Gateway 是否已啟用
- 確認使用者已收到邀請 Email

### 無法儲存內容
- 檢查 GitHub 權限設定
- 確認 Git Gateway 連接正常
- 檢查網站部署狀態

### 圖片無法上傳
- 檢查 media_folder 設定
- 確認有足夠的儲存空間
- 檢查圖片格式是否支援
