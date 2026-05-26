# CLAUDE.md

本文件为 Claude Code 工作目录指南。

## 语言约束

本项目默认使用简体中文，新增/更新的 skill、规则、记忆等文件应该使用简体中文（可允许部分必须要英文字母的表述，如 API、URL、ID 等）。

## 项目概述

这是一个产品经理的 Claude Code 工作空间，用于：
- 需求分析（requirements-analysis）
- 撰写 PRD（prd-writer）
- 构建 PC 端管理后台 Demo（pc-demo）

**工作流程**：需求分析 → PRD 撰写 → PC 端 Demo 开发

## 目录结构

```
PM-Agent/
├── CLAUDE.md              # 本文件
├── README.md              # 工具包使用说明
├── pc-template/           # PC 端原型骨架模板（只读，勿直接开发）
│   └── src/               # React + Ant Design 5 骨架代码
├── projects/              # 所有项目在此，互相隔离
│   └── 项目名/
│       ├── prd/           # 该项目的文档输出
│       └── pc/            # 该项目的前端原型（从 pc-template 复制）
└── .claude/
    └── skills/            # Claude Code 技能目录
        ├── prd-writer/              # PRD 撰写技能
        ├── requirements-analysis/   # 需求分析技能（已有产品方向时，快速分析单个功能需求）
        ├── requirement-definition/  # 新项目立项技能（从零定义产品方向，输出用户画像+MRD+BRD+PRD 四件套）
        ├── opportunity-solution-tree/ # 机会解决方案树（从业务目标拆解机会点→方案→POC）
        ├── pc-demo/                 # PC 端管理后台 Demo 构建技能
        ├── web-design-engineer/     # 单页视觉原型（落地页/看板/汇报PPT）
        └── discovery-interview-prep/ # 用户访谈方案设计
```

## 项目隔离约定

- **工具包文件**（`pc-template/`、`.claude/skills/`）只作模板参考，不在其中直接开发
- **每个新项目**必须在 `projects/项目名/` 下独立创建，拥有自己的 `prd/` 和 `pc/` 目录
- 新建 PC 原型时，从 `pc-template/` 复制骨架到 `projects/项目名/pc/`，再执行 `npm install`
- 历史项目产出永远不会污染工具包本体

## 技能说明

### requirements-analysis（需求分析）
当用户提到"需求分析"、"分析需求"、"撰写需求分析"、"需求调研"时使用。在 PRD 撰写前进行需求调研、分析和确认。

### prd-writer（PRD 撰写）
当用户提到"写PRD"、"撰写需求"、"产品需求"、"需求背景"、"功能设计"、"撰写产品需求文档"时使用。根据标准模板输出，包含需求背景、目标、流程图、功能清单、系统改造等章节。

### pc-demo（PC 端后台 Demo）
当用户提到"PC后台"、"后台页面"、"新增页面"、"添加菜单"、"PC端开发"、"后台列表"、"后台详情"、"管理后台"、"新建页面"、"开发页面"、"页面模板"等关键词时使用。即使用户只是简单提到要做一个后台页面或管理界面，也应该触发此 skill。

### opportunity-solution-tree（机会解决方案树）
当用户提到"不知道该做什么"、"老板提了个需求不确定值不值得做"、"帮我梳理机会点"、"OST"、"从目标拆方案"时使用。从业务目标出发，依次拆解机会点、候选方案，并评估 POC 优先级。

### discovery-interview-prep（用户访谈设计）
当用户提到"用户访谈"、"访谈方案"、"需求调研"、"用户调研"、"客户访谈"、"流失访谈"时使用。引导设计访谈目标、目标用户、约束条件和方法论，输出完整访谈提纲。

### web-design-engineer（单页视觉原型）
当用户提到"落地页"、"展示页"、"汇报PPT"、"Slide"、"数据看板"、"可视化"、"单页原型"、"对比方案"、"演示页面"时使用。产出为单个 HTML 文件，适合不需要菜单导航的展示类场景，与 pc-demo 互补。

## 清洁约定

- `projects/` 默认只有 README.md，用于存放各项目产出
- `pc-template/` 只保留骨架代码，不包含任何业务页面和 mock 数据
- 不提交 `node_modules/`、`.DS_Store`、本地环境文件和构建产物
