
import { NavItem, Product, ServiceStep, Case, Solution } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', path: '/' },
  { label: '關於我們', path: '/about' },
  { label: '代工服務', path: '/services' },
  { label: '產品案例', path: '/cases' },
  { label: '原料中心', path: '/products' },
  { label: '客戶支援', path: '/support' },
  { label: '聯絡我們', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '魚膠原蛋白胜肽',
    category: '日本原料',
    origin: '日本',
    description: '高純度低分子膠原蛋白，易於人體吸收，適合美妍飲品與粉包。',
    image: '/assets/products/fish_collagen.JPG',
    type: 'raw',
  },
  {
    id: '2',
    name: '京都抹茶萃取物',
    category: '日本原料',
    origin: '京都, 日本',
    description: '富含兒茶素與抗氧化成分，選用京都有機茶園，維持極致純度。',
    image: '/assets/products/mocha_.JPG',
    type: 'raw',
  },
  {
    id: '3',
    name: '專利納豆激酶',
    category: '日本原料',
    origin: '日本',
    description: '強效活性酵素，支持心血管健康，具備極高纖維蛋白溶解活性。',
    image: '/assets/products/nattokinase.JPG',
    type: 'raw',
  },
  {
    id: '4',
    name: '益生菌複合配方',
    category: '代工服務',
    origin: '客製化研發',
    description: '針對腸道健康設計，包含多株耐酸鹼優質菌種，穩定性極佳。',
    image: '/assets/products/probiotic.JPG',
    type: 'oem',
  },
];

export const SERVICE_STEPS: ServiceStep[] = [
  { title: '產品設計', description: '由營養師、藥師及行銷專家的專業團隊，為您量身打造專屬配方。', enDescription: 'Our team of nutritionists, pharmacists, and marketing experts creates exclusive formulas tailored to you.', icon: '/assets/icons_new/expertconsulting.PNG' },
  { title: '產品試製/打樣', description: '提供樣品試吃，依需求調整配方及口味，確保滿意。', enDescription: 'We provide samples for tasting and adjust formulas and flavors as needed to ensure satisfaction.', icon: '/assets/icons_new/lab-test.PNG' },
  { title: '報價簽約', description: '配方確認後提供正式報價，並簽訂共同保密協定保障您的權益。', enDescription: 'Formal quotation provided after formula confirmation, with NDA signed to protect your rights.', icon: '/assets/icons_new/discuss.PNG' },
  { title: '包裝設計', description: '專業團隊操刀，設計最符合產品訴求與市場吸睛度的視覺包裝。', enDescription: 'Professional visual packaging design that best fits product appeal and catches market attention.', icon: '/assets/icons_new/custom-packaging.PNG' },
  { title: '生產製造', description: '由 ISO 22000 與 HACCP 認證工廠生產，嚴格控管原料與製程。', enDescription: 'Manufactured in ISO 22000 & HACCP certified factories with strict control over raw materials.', icon: '/assets/icons_new/manufacturingline.PNG' },
  { title: '售後服務', description: '提供產品教育訓練、Q&A 諮詢、COA 檢驗報告等完整後勤支援。', enDescription: 'Complete logistical support including product training, Q&A consulting, and COA reports.', icon: '/assets/icons_new/globallogistics.PNG' },
];

export const CASES: Case[] = [
  {
    id: 1,
    title: '高效能膠原蛋白飲',
    category: '液態代工',
    image: '/assets/images-edit/service-image1.avif',
    date: '2024-12-01',
    excerpt: '採用日本專利魚膠原蛋白，搭配獨家去腥技術，打造口感極佳的美容飲品。',
    content: [
      '本專案採用高純度膠原蛋白與彈性蛋白、維生素C 等美容因子，透過風味優化與去腥技術，使口感更佳、接受度更高。',
      '配方經穩定性與沉澱風險評估，並完成多批次小試與中試驗證，以確保量產一致性。',
      '生產過程導入關鍵控制點（CCP）與殺菌條件最佳化，確保微生物與理化指標符合規範；同時選用耐酸性包裝與遮光設計降低氧化風險，延長產品貨架期。'
    ]
  },
  {
    id: 2,
    title: '專利葉黃素凍',
    category: '果凍代工',
    image: 'assets/images/g4.jpg',
    date: '2024-11-15',
    excerpt: '結合游離型葉黃素與山桑子萃取，Q彈口感深受兒童與上班族喜愛。'
  },
  {
    id: 3,
    title: '綜合益生菌粉包',
    category: '粉劑代工',
    image: '/assets/images-edit/Powder.avif',
    date: '2024-10-20',
    excerpt: '高活性包埋技術，確保菌株存活率，鋁箔獨立包裝方便攜帶。',
    content: [
      '針對不同齡層與食用情境，我們設計多款風味與甜度方案，並透過微膠囊包覆技術提升益生菌耐受性與存活率，確保經過常溫保存與沖泡後仍維持足夠活菌數。',
      '量產階段採標準化配粉流程、低溫充填與防潮包材，降低水活性與氧化風險；並透過穩定性測試與物流模擬，驗證產品在不同通路的陳列條件下仍能保持品質。',
      '最終產品上市後在多個電商平台迅速獲得好評，並持續拓展新口味與配方。'
    ]
  },
  {
    id: 4,
    title: '高濃度維生素C錠',
    category: '錠劑代工',
    image: '/assets/images-edit/Tablet.avif',
    date: '2024-09-05',
    excerpt: '緩釋型錠劑設計，提供長時間的抗氧化防護，提升吸收效率。',
    content: [
      '本案例自企劃階段即導入 cGMP 品質系統，針對維生素穩定性、賦形劑配比、膠囊殼相容性進行多輪測試，並以加速老化試驗確認產品保存表現。',
      '在製程端，採用高效率膠囊充填機台與即時重量監控，確保單粒劑量精準一致；同時結合金屬檢測、目檢與包裝完整性測試，以提升出貨品質。'
    ]
  },
  {
    id: 5,
    title: '深海魚油軟膠囊',
    category: '軟膠囊代工',
    image: '/assets/images-edit/soft-capsule.jpg',
    date: '2024-08-12',
    excerpt: '高純度 EPA/DHA，採用小型軟膠囊設計，易於吞嚥無異味。'
  },
  {
    id: 6,
    title: 'B群糖衣錠',
    category: '糖衣錠代工',
    image: '/assets/images-edit/suger-tablet.avif',
    date: '2024-07-30',
    excerpt: '色彩鮮豔的糖衣包覆，有效掩蓋B群特殊氣味，提升食用愉悅感。'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'anti-aging',
    title: '美容抗老配方',
    subtitle: 'Anti-aging Formula',
    description: '專業美容抗老保健食品配方，包括膠原蛋白、玻尿酸、維生素C等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: 'Q彈紅顏保健食品配方',
        items: ['膠原蛋白', '維生素C', '流行鏈球菌發酵物(含透明質酸鈉)', '玄米萃取物'],
        flavors: ['水蜜桃', '蔓越莓', '檸檬'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '美白亮顏保健食品配方',
        items: ['穀胱甘肽', '維生素C', '珍珠粉', '蝦紅素'],
        flavors: ['玫瑰', '白桃', '荔枝'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '水潤保濕保健食品配方',
        items: ['玻尿酸', '神經醯胺', '膠原蛋白胜肽', '維生素E'],
        flavors: ['葡萄', '藍莓', '草莓'],
        image: '/assets/images/g9.jpg'
      }
    ]
  },
  {
    id: 'child-growth',
    title: '幼兒成長配方',
    subtitle: 'Child Growth Formula',
    description: '專業幼兒成長保健食品配方，包括腦部發育、骨骼成長、免疫力提升等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: '幼兒聰明保健食品配方',
        items: ['DHA', '磷脂醯絲胺酸(PS)', '卵磷脂', '葉黃素'],
        flavors: ['草莓', '香蕉', '蘋果'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '轉骨抽高保健食品配方',
        items: ['鈣', '維生素D3', '維生素K2', '鎂'],
        flavors: ['牛奶', '巧克力', '優格'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '哈啾退散保健食品配方',
        items: ['接骨木莓萃取物', '維生素C', '鋅', '益生菌'],
        flavors: ['莓果', '柳橙', '葡萄'],
        image: '/assets/images/g9.jpg'
      }
    ]
  },
  {
    id: 'elder-care',
    title: '銀髮長青配方',
    subtitle: 'Elder Care Formula',
    description: '專業銀髮長青保健食品配方，包括骨骼保健、循環保健、睡眠保健等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: '登高望遠保健食品配方',
        items: ['葡萄糖胺', '軟骨素', '第二型膠原蛋白', '維生素D3'],
        flavors: ['柳橙', '檸檬', '葡萄'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '一夜好眠保健食品配方',
        items: ['GABA', '色胺酸', '芝麻素', '鎂'],
        flavors: ['薰衣草', '洋甘菊', '牛奶'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '思路不打結保健食品配方',
        items: ['銀杏葉萃取物', 'DHA', '磷脂醯絲胺酸(PS)', '維生素B群'],
        flavors: ['藍莓', '蔓越莓', '葡萄'],
        image: '/assets/images/g9.jpg'
      }
    ]
  },
  {
    id: 'weight-control',
    title: '體重管理配方',
    subtitle: 'Weight Control Formula',
    description: '專業體重管理保健食品配方，包括優格代餐、代餐奶昔、生酮代餐等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: '代餐奶昔配方',
        items: ['濃縮乳清蛋白', '膳食纖維', '綜合維生素', '礦物質'],
        flavors: ['巧克力', '香草', '拿鐵'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '燃燒代謝配方',
        items: ['綠茶萃取物', 'L-肉鹼', '藤黃果', '苦瓜胜肽'],
        flavors: ['綠茶', '檸檬', '原味'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '順暢輕盈配方',
        items: ['益生菌', '酵素', '奇亞籽', '洋車前子'],
        flavors: ['優格', '鳳梨', '奇異果'],
        image: '/assets/images/g9.jpg'
      }
    ]
  },
  {
    id: 'sport-nutrition',
    title: '運動保健配方',
    subtitle: 'Sport Nutrition Formula',
    description: '專業運動保健食品配方，包括運動補給、增肌減脂等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: '運動補給保健食品配方',
        items: ['L-精胺酸', 'L-肉鹼', '刺五加萃取物', '支鏈胺基酸(BCAA)'],
        flavors: ['檸檬', '葡萄', '柳橙'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '增肌保健食品配方',
        items: ['乳清蛋白', '肌酸', '麩醯胺酸', '支鏈胺基酸(BCAA)'],
        flavors: ['巧克力', '香草', '草莓'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '運動耐力保健食品配方',
        items: ['瓜拿那萃取物', '牛磺酸', '輔酵素Q10', '維生素B群'],
        flavors: ['能量飲料', '咖啡', '綠茶'],
        image: '/assets/images/g9.jpg'
      }
    ]
  },
  {
    id: 'men-power',
    title: '男性機能配方',
    subtitle: 'Men Power Formula',
    description: '專業男性機能保健食品配方，包括精力充沛、運動補給等多種配方選擇',
    bannerVideo: '/assets/images-edit/fillmechine.mp4',
    features: [
      {
        title: '精力充沛保健食品配方',
        items: ['瑪卡萃取物', '鋅酵母', '精胺酸', '刺五加萃取物'],
        flavors: ['人參', '咖啡', '可可'],
        image: '/assets/images-edit/filling-machine.webp'
      },
      {
        title: '應酬乾杯保健食品配方',
        items: ['薑黃萃取物', '朝鮮薊萃取物', '牛磺酸', '維生素B群'],
        flavors: ['檸檬', '柳橙', '葡萄柚'],
        image: '/assets/images-edit/filling-machine-2.png'
      },
      {
        title: '元氣飽滿保健食品配方',
        items: ['紅景天萃取物', '人參萃取物', '輔酵素Q10', '維生素B12'],
        flavors: ['蜂蜜', '薑汁', '黑糖'],
        image: '/assets/images/g9.jpg'
      }
    ]
  }
];

export const FAQ_ITEMS = [
  { q: '代工的最小訂購量是多少？', a: '依據不同劑型而定，一般粉劑最小量為 500kg，錠劑/膠囊為 10萬粒。詳細數量請與我們聯繫確認。' },
  { q: '從下單到交貨需要多長時間？', a: '標準產品約 2-4 週，客製化配方約 4-8 週。實際時間依產品複雜度與訂單量而定。' },
  { q: '是否提供配方開發服務？', a: '是的，我們有專業的研發團隊，可協助客戶進行配方設計、優化與功效評估。' },
  { q: '產品是否符合相關法規標準？', a: '我們嚴格遵循 cGMP 標準生產，所有產品均符合食品藥物管理署相關法規要求。' },
  { q: '是否提供包裝設計服務？', a: '我們可協助包裝規劃與標示設計，也可配合客戶指定的包裝材料與設計。' },
  { q: '如何確保產品品質？', a: '我們建立完整的品質管制系統，從原料檢驗、製程監控到成品檢測，每個環節都有嚴格把關。' },
  { q: '是否提供樣品測試？', a: '是的，我們可提供小量樣品供客戶測試確認，確保產品符合期望後再進行量產。' },
  { q: '付款方式有哪些？', a: '我們接受銀行轉帳、支票等付款方式。一般採用訂金 30%，交貨驗收後付清餘款的方式。' }
];
