# 星盤與人類圖 · Vibe Coding 個人網站

一個以現代簡約設計呈現星座與人類圖解析的個人網站。透過直觀的介面探索行星宮位、星座特質與人類圖的智慧。

## 關於這個專案

這是一個 **Vibe Coding** 實驗項目——透過直覺式的開發流程，將靈性知識轉化為數位體驗。網站採用極簡黑白配色與現代排版，讓占星資訊在視覺上更清晰易讀。

### 功能特色

- **星座解析**：展示個人星盤資料，包含行星、宮位與星座特質
- **人類圖**：即將推出的個人化人類圖解讀功能
- **互動式表格**：使用 details tag 摺疊展開詳細描述，保持介面簡潔
- **響應式設計**：桌面與行動裝置皆可流暢瀏覽
- **深色模式**：支援 light/dark 模式切換

## 技術棧

- **框架**：[Next.js 16](https://nextjs.org) (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS v4
- **字型**：Geist Sans & Geist Mono

## 開發指令

```bash
# 安裝依賴
bun install

# 啟動開發伺服器
bun dev
```

開啟 [http://localhost:3000](http://localhost:3000) 即可預覽。

## 資料結構

星座資料儲存於 `assets/astrolabe.ts`，包含：

- `planet`：行星名稱
- `house`：宮位
- `house_description`：宮位意義描述
- `sign`：星座
- `sign_description`：星座特質描述

---

*Built with curiosity and code.*
