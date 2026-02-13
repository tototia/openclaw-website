# 🚀 推送代码到GitHub - 操作指南

## 📋 推送前检查

✅ 当前状态：所有代码已提交，工作目录干净

## 🎯 操作步骤（按顺序执行）

---

## 第1步：在GitHub上创建仓库

### 1.1 访问GitHub
打开浏览器，访问：[https://github.com/new](https://github.com/new)

### 1.2 填写仓库信息
- **Repository name**: `openclaw-website`（或其他你喜欢的名字）
- **Description**: OpenClaw展示网站
- **Public/Private**: 选择 `Public`（公开）或 `Private`（私有）
- **不要勾选**以下选项：
  - ❌ Add a README file（我们已经有README了）
  - ❌ Add .gitignore（我们已经有.gitignore了）
  - ❌ Choose a license（我们暂时不需要）

### 1.3 点击创建
点击底部的 **"Create repository"** 绿色按钮

### 1.4 复制仓库地址
创建成功后，你会看到类似这样的地址：
```
https://github.com/你的用户名/openclaw-website.git
```
**复制这个地址！**

---

## 第2步：配置远程仓库并推送

回到这里（终端/对话框），告诉我你的GitHub仓库地址，我会帮你执行以下命令：

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/openclaw-website.git

# 验证远程仓库
git remote -v

# 推送代码到GitHub
git push -u origin main
```

---

## 第3步：验证推送成功

推送完成后，你可以：
1. 访问你的GitHub仓库页面
2. 查看所有文件是否都在
3. 准备部署到Vercel

---

## 💡 常见问题

### Q1: 我没有GitHub账号怎么办？
A: 访问 [github.com](https://github.com) 点击 "Sign up" 注册（免费）

### Q2: 推送时需要用户名和密码？
A: 现在GitHub需要使用 **Personal Access Token** 而不是密码：
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 点击 "Generate new token"
3. 选择权限：`repo`（完整仓库访问权限）
4. 复制生成的token
5. 推送时用户名填你的GitHub用户名，密码填这个token

### Q3: 推送失败提示 "Authentication failed"？
A: 说明用户名或token错误，请检查：
- 用户名：你的GitHub用户名
- 密码：Personal Access Token（不是GitHub登录密码）

### Q4: 我可以推送到现有仓库吗？
A: 可以！告诉我现有仓库的地址，我会配置推送。

---

## 📝 我需要你提供的信息

请告诉我以下信息之一：

**选项A：你刚创建的新仓库地址**
```
例如：https://github.com/zhangsan/openclaw-website.git
```

**选项B：你想推送到的现有仓库地址**
```
例如：https://github.com/zhangsan/my-website.git
```

**选项C：你没有GitHub账号**
```
告诉我，我会指导你如何注册
```

---

## 🎯 准备好了吗？

一旦你提供了仓库地址，我会立即执行推送命令！

**格式示例：**
```
我的GitHub仓库地址是：https://github.com/你的用户名/openclaw-website.git
```

或者直接粘贴地址即可，我会自动识别！🚀
