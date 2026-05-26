# PM Agent 工具包

这是一个面向产品经理的 Claude Code 工作空间，用于把需求从分析、PRD 到 PC 管理后台 Demo 串起来。

## 能力范围

- `requirements-analysis`：需求调研、流程分析、功能拆解、待确认事项整理
- `prd-writer`：按标准模板撰写 PRD、补充验收标准和测试用例
- `pc-demo`：基于 React + Ant Design + Vite 构建 PC 管理后台 Demo

## 目录说明

```text
pm_agent/
├── .claude/skills/       # Claude Code 技能
├── prd/                  # 新需求分析和 PRD 输出目录
└── pc/                   # PC 管理后台 Demo 模板
```

## 使用方式

1. 先描述业务目标，请 Claude 做需求分析。
2. 基于需求分析文档生成 PRD。
3. 需要可交互原型时，在 `pc/` 中生成后台页面、菜单、路由和 mock 数据。

## PC Demo 启动

```bash
cd pc
npm install
npm run dev
```

## 清洁约定

- `prd/` 默认不放历史业务资料，只放新产出的文档。
- `pc/` 默认只保留通用骨架，不带具体业务模块。
- 本工具包不保留历史业务资料，需要参考时使用本地备份压缩包。
- `node_modules/`、构建产物、本地配置和 `.DS_Store` 不纳入工具包。
