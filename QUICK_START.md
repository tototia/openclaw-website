# 🚀 快速部署指南 - 让学生立即访问你的网站

## ⚡ 最快方案：5分钟部署到 Vercel（免费！）

### 第一步：准备代码

你的代码已经准备好了！只需要推送到 GitHub。

```bash
# 查看当前git状态
cd /workspace/projects
git status

# 如果有未提交的更改，先提交
git add .
git commit -m "feat: 更新OpenClaw网站"
```

### 第二步：推送到 GitHub

**如果你还没有 GitHub 仓库：**

1. 访问 [github.com/new](https://github.com/new)
2. 创建新仓库，命名为 `openclaw-website`
3. 点击"Create repository"

**推送代码到 GitHub：**

```bash
# 添加远程仓库（替换为你的地址）
git remote add origin https://github.com/你的用户名/openclaw-website.git

# 推送代码
git push -u origin main
```

### 第三步：部署到 Vercel

**方式A：网页操作（推荐新手）**

1. 🌐 访问 [vercel.com](https://vercel.com)
2. 🔑 使用 GitHub 账号登录
3. ➕ 点击右上角的 "Add New" → "Project"
4. 📁 在 "Import Git Repository" 中选择你的 `openclaw-website` 仓库
5. ⚙️ 点击 "Deploy"（Vercel会自动识别Next.js）
6. ⏳ 等待2-3分钟...
7. ✅ 部署完成！

**方式B：命令行操作（推荐有经验的用户）**

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录 Vercel
vercel login

# 部署到生产环境
vercel --prod
```

### 第四步：获取访问链接

部署成功后，Vercel 会提供这样的链接：
```
https://openclaw-website.vercel.app
```

**立即分享给学生！** 🎉

---

## 📱 在微信公众号中使用

### 方案1：添加到公众号菜单（最简单）

1. 登录 [微信公众平台](https://mp.weixin.qq.com)
2. 进入"内容与互动" → "自定义菜单"
3. 创建新菜单项：
   - 名称：OpenClaw
   - 类型：跳转网页
   - 网址：粘贴你的 Vercel 链接
4. 保存并发布

**注意事项：**
- 如果域名未备案，在某些情况下可能无法在微信内直接打开
- 建议学生先复制链接到浏览器打开

### 方案2：转换为微信小程序（最佳体验）

详见 `DEPLOYMENT.md` 中的详细说明。

---

## 💡 常见问题

### Q: Vercel 部署免费吗？
A: 完全免费！包括：
- 无限次部署
- 全球CDN加速
- 自动HTTPS证书
- 100GB带宽/月
- 适合个人和小型项目

### Q: 学生可以直接访问吗？
A: 可以！Vercel 提供的链接是公网可访问的，直接分享给学生即可。

### Q: 如何修改网站内容？
A:
1. 修改代码
2. 提交到 GitHub
3. Vercel 会自动检测并重新部署
4. 几分钟后更新生效

### Q: 可以自定义域名吗？
A: 可以！在 Vercel 项目设置中添加自定义域名，需要：
- 购买域名（约50元/年）
- 配置DNS解析
- 可选：完成ICP备案（微信内访问需要）

### Q: 微信内打不开怎么办？
A: 可能是域名未备案。解决方案：
1. 让学生复制链接到浏览器打开
2. 或使用已备案的域名
3. 或转换为微信小程序

---

## 🎓 教学建议

### 临时分享（1-2周课程）：
- ✅ 直接使用 Vercel 免费域名
- ✅ 分享链接给学生
- ✅ 无需额外配置

### 长期使用（一学期或更久）：
- ✅ 购买域名并配置
- ✅ 在微信公众号菜单中添加
- ✅ 考虑开发微信小程序

### 需要更好的国内访问速度：
- ✅ 部署到腾讯云或阿里云
- ✅ 配置CDN加速

---

## 🔗 有用的链接

- [Vercel 官网](https://vercel.com)
- [Vercel 部署文档](https://vercel.com/docs/deployments/overview)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
- [微信公众平台](https://mp.weixin.qq.com)
- [GitHub 注册](https://github.com/signup)

---

## 📞 需要帮助？

如果在部署过程中遇到问题：

1. 查看 `DEPLOYMENT.md` 获取详细说明
2. 访问 [Vercel 文档](https://vercel.com/docs)
3. 或随时向我提问！

---

**现在就开始吧！5分钟后你的学生就能看到这个网站了！** 🚀
