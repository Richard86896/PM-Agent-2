# 项目目录

每个新项目在此目录下创建独立子文件夹，与工具包完全隔离。

## 新建项目步骤

1. 在 `projects/` 下新建文件夹，以项目名命名，例如 `projects/墨西哥B2BC供应链/`
2. 在该子文件夹内创建 `prd/`（文档输出）和 `pc/`（原型开发）
3. 工具包骨架（`pc-template/`、`.claude/skills/`）只作参考，不直接在其中开发

## 目录结构示例

```
projects/
└── 墨西哥B2BC供应链/
    ├── prd/          # PRD、需求分析等文档
    └── pc/           # 该项目的前端原型（从 pc-template 复制初始化）
```

## 初始化新项目 PC 原型

```bash
# 从模板复制骨架到新项目
cp -r pc-template projects/你的项目名/pc
cd projects/你的项目名/pc
npm install
npm run dev
```
