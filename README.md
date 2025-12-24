# Proxy 101 - 代理知识库

<div align="center">

![Proxy 101](https://img.shields.io/badge/Proxy-101-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

一份全面、专业、易懂的代理知识库，涵盖代理/VPS 的完整知识体系

[🌐 在线预览](#本地预览) | [📖 快速开始](#快速开始) | [📚 内容导览](#内容导览)

</div>

---

## 📋 项目简介

**Proxy 101** 是一个面向初学者和进阶用户的静态知识库网站，用通俗易懂的语言全面讲解：

- 🎯 代理技术的基础概念和工作原理
- 🔐 HTTP、SOCKS、VPN、Shadowsocks、V2Ray、Xray、Trojan 等协议详解
- 🖥️ VPS 选择、购买、配置的完整指南
- 🛠️ 一键脚本、可视化面板等部署工具
- 🛡️ 安全防护、隐私保护、反检测技术
- 🚀 性能优化、进阶技巧和故障排查

## ✨ 特性

- ✅ **系统全面** - 从基础到进阶，覆盖代理技术的方方面面
- ✅ **通俗易懂** - 用简单的语言解释复杂的技术概念
- ✅ **实用性强** - 提供详细的操作步骤和实战案例
- ✅ **现代化设计** - 清爽美观的界面，优秀的阅读体验
- ✅ **响应式布局** - 完美适配桌面、平板、手机
- ✅ **深色模式** - 支持浅色/深色主题切换
- ✅ **导航友好** - 清晰的章节结构和快速导航

## 📚 内容导览

### 基础理论
- **[代理基础概念](pages/basics.html)** - 什么是代理、工作原理、核心组成
- **[核心术语解析](pages/terminology.html)** - 落地机、线路机、CN2、IPLC 等术语详解

### VPS 相关
- **[VPS 基础知识](pages/vps.html)** - VPS 定义、配置选择、线路类型
- **[VPS 提供商](pages/providers.html)** - Vultr、DO、Linode、搬瓦工等商家对比

### 协议与工具
- **[代理协议详解](pages/protocols.html)** - Xray、V2Ray、Trojan、Hysteria2 等协议对比
- **[部署工具](pages/tools.html)** - 一键脚本、3X-UI、S-UI 等工具介绍
- **[客户端推荐](pages/clients.html)** - Windows、macOS、Android、iOS 客户端

### 安全与防护
- **[安全防护机制](pages/security.html)** - SSH 加固、防火墙、加密配置
- **[GFW 检测原理](pages/gfw.html)** - DPI、主动探测、流量特征识别
- **[IP 封禁机制](pages/ip-blocking.html)** - 判断方法、预防措施、解决方案

### 进阶与实战
- **[进阶优化](pages/advanced.html)** - BBR 加速、CDN 中转、分流规则
- **[常见问题](pages/faq.html)** - FAQ 和故障排查指南

## 🚀 快速开始

### 在线访问

直接打开 `index.html` 即可在浏览器中访问。

### 本地预览

#### 方法 1: 直接打开（推荐）

双击 `index.html` 文件，使用浏览器打开即可。

#### 方法 2: 使用本地服务器

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需要先安装 http-server)
npm install -g http-server
http-server -p 8000

# PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`

### 部署到服务器

将整个项目上传到 Web 服务器的根目录，配置 Nginx 或 Apache 即可。

#### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/proxy-101;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 📁 项目结构

```
proxy-101/
├── index.html              # 首页
├── README.md              # 项目说明
├── 自建梯子.md             # 参考文档
├── assets/                # 资源文件
│   ├── css/
│   │   └── style.css      # 样式文件
│   └── js/
│       └── main.js        # JavaScript 脚本
└── pages/                 # 内容页面
    ├── basics.html        # 代理基础概念
    ├── terminology.html   # 核心术语解析
    ├── vps.html           # VPS 基础知识
    ├── providers.html     # VPS 提供商
    ├── protocols.html     # 代理协议详解
    ├── tools.html         # 部署工具
    ├── clients.html       # 客户端推荐
    ├── security.html      # 安全防护机制
    ├── gfw.html           # GFW 检测原理
    ├── ip-blocking.html   # IP 封禁机制
    ├── advanced.html      # 进阶优化
    └── faq.html           # 常见问题
```

## 🎨 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代化样式、响应式设计、CSS 变量
- **JavaScript** - 主题切换、导航交互
- **无依赖** - 纯原生实现，无需任何框架

## 🌟 特色功能

### 响应式设计

网站完美适配各种设备：
- 🖥️ 桌面端（1920px+）
- 💻 笔记本（1366px+）
- 📱 平板（768px+）
- 📱 手机（320px+）

### 深色模式

点击右上角的主题切换按钮，即可在浅色和深色模式之间切换。主题偏好会自动保存到本地存储。

### 侧边导航

左侧固定导航栏，支持：
- 📑 章节分类
- 🔗 快速跳转
- 🎯 当前页面高亮
- 📱 移动端自适应

### 内容优化

- ✨ 清晰的排版和视觉层次
- 📊 丰富的表格和对比
- 💡 信息框、警告框、成功框
- 🎨 代码高亮显示
- 🔗 面包屑导航
- 🔖 自动生成锚点链接

## ⚠️ 免责声明

本知识库仅用于**技术学习和网络技术研究**，请遵守当地法律法规。

- 本项目不提供任何代理服务
- 本项目不存储或传输任何用户数据
- 使用相关技术时，请确保符合当地法律要求
- 用户对使用本知识库内容产生的任何后果自行负责

## 📄 开源协议

本项目采用 MIT 许可证开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📧 联系方式

如有问题或建议，欢迎通过 GitHub Issues 联系。

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个 Star！**

Made with ❤️ for learning

</div>
