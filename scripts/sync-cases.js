#!/usr/bin/env node

/**
 * 同步 Markdown 案例文件到 cases.json
 * 此腳本會讀取 content/cases/ 目錄下的所有 .md 文件
 * 並將它們的 front matter 數據同步到 content/cases.json
 */

const fs = require('fs');
const path = require('path');

// 路徑配置
const CASES_DIR = path.join(__dirname, '../content/cases');
const OUTPUT_FILE = path.join(__dirname, '../content/cases.json');

/**
 * 解析 Markdown 文件的 front matter
 */
function parseFrontMatter(content) {
  // 處理不同的換行符
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const frontMatterMatch = normalizedContent.match(/^---\n([\s\S]*?)\n---/);

  if (!frontMatterMatch) {
    return null;
  }

  const frontMatter = frontMatterMatch[1];
  const data = {};

  // 簡化的 YAML 解析 - 只處理我們需要的基本字段
  const lines = frontMatter.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // 跳過空行和註釋
    if (!line || line.startsWith('#')) {
      i++;
      continue;
    }

    // 處理簡單的鍵值對 (更穩健的 Regex)
    // 匹配 key: value，其中 value 可以包含冒號，也可以被引號包圍
    const simpleMatch = line.match(/^(\w+):\s*(.*)$/);
    if (simpleMatch) {
      const key = simpleMatch[1];
      let value = simpleMatch[2].trim();

      // 如果是多行標記，跳過交給下面的邏輯處理
      if (value === '|' || value === '>' || value.startsWith('|-') || value.startsWith('>-')) {
        // Fall through to multiline handler
      } else {
        // 去除引號
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        
        // 處理布爾值
        if (value === 'true') value = true;
        if (value === 'false') value = false;

        data[key] = value;
        i++;
        continue;
      }
    }

    // 處理多行值 (|)
    const multilineMatch = line.match(/^(\w+):\s*\|/);
    if (multilineMatch) {
      const key = multilineMatch[1];
      let multilineValue = '';
      i++; // 移到下一行

      // 收集多行內容
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        if (lines[i].startsWith('  ')) {
          multilineValue += lines[i].substring(2) + '\n';
        } else {
          multilineValue += '\n';
        }
        i++;
      }

      data[key] = multilineValue.trim();
      continue;
    }

    // 處理列表 (跳過複雜的列表結構)
    const listMatch = line.match(/^(\w+):\s*$/);
    if (listMatch) {
      const key = listMatch[1];
      i++; // 移到下一行

      // 跳過列表內容直到下一個鍵
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        i++;
      }

      continue;
    }

    i++;
  }

  return data;
}

/**
 * 讀取所有案例文件
 */
function readCaseFiles() {
  try {
    const files = fs.readdirSync(CASES_DIR);
    const cases = [];

    files.forEach(file => {
      if (!file.endsWith('.md')) return;

      const filePath = path.join(CASES_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const data = parseFrontMatter(content);

      if (data && data.published !== false) {
        // 只包含已發布的案例
        cases.push({
          title: data.title || '',
          category: data.category || '',
          date: data.date || '',
          image: data.image || '',
          excerpt: data.excerpt || '',
          url: `case-detail.html?file=${file}`
        });
      }
    });

    // 按日期排序（最新的在前）
    cases.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    return cases;
  } catch (error) {
    console.error('讀取案例文件時發生錯誤:', error);
    return [];
  }
}

/**
 * 寫入 cases.json
 */
function writeCasesJson(cases) {
  try {
    const data = {
      items: cases
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`✅ 成功同步 ${cases.length} 個案例到 cases.json`);
    
    // 顯示案例列表
    cases.forEach((c, i) => {
      console.log(`   ${i + 1}. ${c.title} (${c.date})`);
    });
  } catch (error) {
    console.error('寫入 cases.json 時發生錯誤:', error);
    process.exit(1);
  }
}

/**
 * 主函數
 */
function main() {
  console.log('🔄 開始同步案例文件...\n');

  // 檢查目錄是否存在
  if (!fs.existsSync(CASES_DIR)) {
    console.error(`❌ 錯誤: 找不到目錄 ${CASES_DIR}`);
    process.exit(1);
  }

  // 讀取並同步案例
  const cases = readCaseFiles();
  
  if (cases.length === 0) {
    console.warn('⚠️  警告: 沒有找到任何已發布的案例文件');
  }

  writeCasesJson(cases);
  console.log('\n✨ 同步完成！');
}

// 執行主函數
main();
