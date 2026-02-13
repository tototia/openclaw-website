# 📍 项目文件位置说明

## 🗂️ 项目根目录

**所有项目文件都位于：**
```
/workspace/projects
```

这个路径也是环境变量 `COZE_WORKSPACE_PATH` 指向的位置。

---

## 📂 目录结构详解

### 1️⃣ 项目根目录
```
/workspace/projects/
```

**配置文件位置：**
| 文件 | 完整路径 |
|------|----------|
| `package.json` | `/workspace/projects/package.json` |
| `.coze` | `/workspace/projects/.coze` |
| `vercel.json` | `/workspace/projects/vercel.json` |
| `tsconfig.json` | `/workspace/projects/tsconfig.json` |
| `README.md` | `/workspace/projects/README.md` |
| `QUICK_START.md` | `/workspace/projects/QUICK_START.md` |
| `DEPLOYMENT.md` | `/workspace/projects/DEPLOYMENT.md` |
| `FILES_GUIDE.md` | `/workspace/projects/FILES_GUIDE.md` |

---

### 2️⃣ 源代码目录
```
/workspace/projects/src/
```

**页面文件位置：**
| 文件 | 完整路径 |
|------|----------|
| 首页 | `/workspace/projects/src/app/page.tsx` |
| 功能页面 | `/workspace/projects/src/app/features/page.tsx` |
| 安装指南 | `/workspace/projects/src/app/install/page.tsx` |
| 文档页面 | `/workspace/projects/src/app/docs/page.tsx` |
| 根布局 | `/workspace/projects/src/app/layout.tsx` |
| 全局样式 | `/workspace/projects/src/app/globals.css` |

**组件文件位置：**
| 文件 | 完整路径 |
|------|----------|
| 主题切换组件 | `/workspace/projects/src/components/theme-toggle.tsx` |
| UI组件库目录 | `/workspace/projects/src/components/ui/` |
| 工具函数库 | `/workspace/projects/src/lib/utils.ts` |
| 移动端钩子 | `/workspace/projects/src/hooks/use-mobile.ts` |

---

### 3️⃣ 静态资源目录
```
/workspace/projects/public/
```

**静态文件位置：**
| 文件 | 完整路径 |
|------|----------|
| 网站图标 | `/workspace/projects/src/app/favicon.ico` |
| Next.js Logo | `/workspace/projects/public/next.svg` |
| Vercel Logo | `/workspace/projects/public/vercel.svg` |
| 其他图标 | `/workspace/projects/public/*.svg` |

---

### 4️⃣ 脚本目录
```
/workspace/projects/scripts/
```

**脚本文件位置：**
| 文件 | 完整路径 |
|------|----------|
| 构建脚本 | `/workspace/projects/scripts/build.sh` |
| 开发脚本 | `/workspace/projects/scripts/dev.sh` |
| 准备脚本 | `/workspace/projects/scripts/prepare.sh` |
| 启动脚本 | `/workspace/projects/scripts/start.sh` |

---

### 5️⃣ 依赖目录
```
/workspace/projects/node_modules/
```

**说明：** 所有npm/pnpm安装的依赖包都在这里

---

### 6️⃣ Git仓库
```
/workspace/projects/.git/
```

**说明：** Git版本控制的元数据文件

---

### 7️⃣ 构建输出
```
/workspace/projects/.next/
```

**说明：** Next.js构建后生成的生产文件

---

## 📊 完整路径清单

### 核心业务文件（8个）
```
/workspace/projects/src/app/page.tsx           # 首页
/workspace/projects/src/app/features/page.tsx  # 功能页
/workspace/projects/src/app/install/page.tsx   # 安装页
/workspace/projects/src/app/docs/page.tsx      # 文档页
/workspace/projects/src/app/layout.tsx         # 布局
/workspace/projects/src/app/globals.css        # 样式
/workspace/projects/src/components/theme-toggle.tsx  # 主题组件
/workspace/projects/src/lib/utils.ts           # 工具
```

### 配置文件（10个）
```
/workspace/projects/.gitignore
/workspace/projects/.npmrc
/workspace/projects/.coze
/workspace/projects/.babelrc
/workspace/projects/package.json
/workspace/projects/tsconfig.json
/workspace/projects/next.config.ts
/workspace/projects/postcss.config.mjs
/workspace/projects/eslint.config.mjs
/workspace/projects/components.json
```

### 文档文件（4个）
```
/workspace/projects/README.md
/workspace/projects/QUICK_START.md
/workspace/projects/DEPLOYMENT.md
/workspace/projects/FILES_GUIDE.md
```

---

## 🔍 如何查看文件

### 方法1：使用我提供的工具
```bash
# 查看文件内容
read_file /workspace/projects/src/app/page.tsx

# 查看目录列表
exec_shell("ls -la /workspace/projects")

# 搜索文件
glob_file("/workspace/projects", "*.tsx")
```

### 方法2：使用shell命令
```bash
# 查看当前目录
pwd
# 输出：/workspace/projects

# 列出所有文件
ls -la

# 查看特定文件
cat /workspace/projects/package.json

# 搜索文件
find /workspace/projects -name "*.tsx"
```

---

## 🎯 快速导航

### 想查看首页代码？
```bash
read_file /workspace/projects/src/app/page.tsx
```

### 想查看项目配置？
```bash
read_file /workspace/projects/package.json
```

### 想查看部署指南？
```bash
read_file /workspace/projects/DEPLOYMENT.md
```

### 想查看所有文件？
```bash
exec_shell("ls -laR /workspace/projects")
```

---

## 📝 重要提示

1. **当前工作目录**：`/workspace/projects`
2. **所有操作都在这个目录下进行**
3. **推送代码到GitHub时，会推送这个目录下的所有文件**

---

## 🚀 下一步

如果你想在本地（你自己的电脑）查看这些文件：

1. 将代码推送到GitHub
2. 在你本地克隆仓库：
   ```bash
   git clone https://github.com/你的用户名/openclaw-website.git
   cd openclaw-website
   ```

3. 使用代码编辑器（VSCode等）打开项目

需要我帮你推送代码到GitHub吗？
