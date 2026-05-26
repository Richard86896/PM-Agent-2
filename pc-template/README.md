# PC 管理后台 Demo 模板

基于 React + Ant Design + Vite 的 PC 管理后台 Demo 模板，用于快速生成可交互的业务后台页面。

## 启动

```bash
npm install
npm run dev
```

## 默认结构

```text
src/
├── App.jsx
├── main.jsx
├── router/
├── layouts/
├── components/
├── pages/Home/
├── stores/
├── styles/
└── mock/
```

## 新增页面

1. 在 `src/pages/` 下创建页面目录。
2. 在 `src/router/index.jsx` 中添加菜单项和 `routeConfig`。
3. 在 `src/App.jsx` 中添加 Route。
4. 如需数据，在 `src/mock/` 中创建 mock 文件。

默认模板只保留首页和通用布局，不携带任何历史业务资料。
