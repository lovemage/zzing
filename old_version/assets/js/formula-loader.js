/**
 * 配方頁面動態內容載入器
 * 用於所有配方頁面 (weight-control.html, anti-aging.html 等)
 * 從 content/formulas.json 載入對應的配方資料
 */

(function() {
  'use strict';
  
  // 從當前頁面URL獲取配方ID
  function getFormulaIdFromUrl() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    // 將檔名轉換為配方ID
    const idMap = {
      'weight-control.html': 'weight-control',
      'anti-aging.html': 'anti-aging',
      'men-power.html': 'men-power',
      'sport-nutrition.html': 'sport-nutrition',
      'elder-care.html': 'elder-care',
      'child-growth.html': 'child-growth'
    };
    
    return idMap[filename] || null;
  }
  
  // 更新頁面SEO標籤
  function updateSEO(formula) {
    // 更新頁面標題
    document.title = formula.seo_title;
    
    // 更新meta標籤
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', formula.seo_description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', formula.seo_keywords);
    }
  }
  
  // 更新Banner區塊
  function updateBanner(formula) {
    const bannerTitle = document.querySelector('.formula-banner h1');
    const bannerSubtitle = document.querySelector('.formula-banner .subtitle');
    
    if (bannerTitle) {
      bannerTitle.textContent = formula.banner_title;
    }
    
    if (bannerSubtitle) {
      bannerSubtitle.textContent = formula.banner_subtitle;
    }
  }
  
  // 更新麵包屑導航
  function updateBreadcrumb(formula) {
    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) {
      breadcrumbActive.textContent = formula.title;
    }
  }
  
  // 生成配方內容HTML
  function generateFormulaHTML(formulas) {
    return formulas.map((formula, index) => {
      const isReverse = index % 2 === 1;
      const ingredientsList = formula.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
      ).join('');
      
      return `
        <div class="row align-items-center mb-5 ${isReverse ? 'flex-lg-row-reverse' : ''}">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="formula-box">
              <h2>${formula.name}</h2>
              <ul>
                ${ingredientsList}
              </ul>
              <div class="flavor-note">
                <strong>口味參考：</strong>${formula.flavors}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="formula-image">
              <img src="${formula.image}" alt="${formula.name}" loading="lazy">
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // 更新配方內容區塊
  function updateFormulaContent(formulas) {
    const formulaSection = document.querySelector('.formula-section .container');
    if (!formulaSection) {
      console.error('找不到配方內容區塊');
      return;
    }
    
    const formulaHTML = generateFormulaHTML(formulas);
    formulaSection.innerHTML = formulaHTML;
  }
  
  // 載入並顯示配方資料
  function loadFormulaData() {
    const formulaId = getFormulaIdFromUrl();
    
    if (!formulaId) {
      console.error('無法識別當前配方頁面');
      return;
    }
    
    // 顯示載入狀態
    const formulaSection = document.querySelector('.formula-section .container');
    if (formulaSection) {
      formulaSection.innerHTML = `
        <div class="text-center py-5">
          <p>載入配方資料中...</p>
        </div>
      `;
    }
    
    // 載入配方資料
    fetch('content/formulas.json?_=' + Date.now())
      .then(res => {
        if (!res.ok) {
          throw new Error('載入失敗: ' + res.status);
        }
        return res.json();
      })
      .then(data => {
        const formula = data.items.find(item => item.id === formulaId);
        
        if (!formula) {
          throw new Error('找不到對應的配方資料: ' + formulaId);
        }
        
        if (!formula.published) {
          throw new Error('此配方尚未發布');
        }
        
        // 更新頁面內容
        updateSEO(formula);
        updateBanner(formula);
        updateBreadcrumb(formula);
        updateFormulaContent(formula.formulas);
        
        console.log('配方資料載入成功:', formula.title);
      })
      .catch(err => {
        console.error('載入配方資料失敗:', err);
        
        const formulaSection = document.querySelector('.formula-section .container');
        if (formulaSection) {
          formulaSection.innerHTML = `
            <div class="text-center py-5">
              <div class="alert alert-warning">
                <h4>載入失敗</h4>
                <p>無法載入配方資料，請重新整理頁面或聯絡管理員。</p>
                <button class="btn btn-primary" onclick="location.reload()">重新載入</button>
              </div>
            </div>
          `;
        }
      });
  }
  
  // 頁面載入完成後執行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFormulaData);
  } else {
    loadFormulaData();
  }
  
})();
