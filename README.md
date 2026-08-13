# Proxy 101 - 代理知识库

<div align="center">

![Proxy 101](https://img.shields.io/badge/Proxy-101-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

一份按架构、协议、主机安全和运维组织的代理知识库，帮助读者理解代理/VPS 系统中的因果关系

[🌐 在线访问](https://zhichao12.github.io/proxy-101) | [📖 快速开始](#快速开始) | [📚 内容导览](#内容导览)

</div>

---

## 🌐 在线访问

**网站地址：[https://zhichao12.github.io/proxy-101](https://zhichao12.github.io/proxy-101)**

可以直接在线浏览完整的知识库内容，无需本地部署。

---

## 📋 项目简介

**Proxy 101** 是一个面向初学者和进阶用户的静态知识库网站，用通俗易懂的语言全面讲解：

- 🎯 代理技术的基础概念和工作原理
- 🔐 HTTP、SOCKS、Shadowsocks、VLESS、Trojan、Hysteria2、WireGuard 等方案对比
- 🖥️ VPS 选择、购买、配置的完整指南
- 🛠️ Xray-core、sing-box、Mihomo、3x-ui、Marzban 等工具边界
- 🛡️ SSH、防火墙、最小暴露面、日志、备份和 DNS 防泄露
- 🚀 家宽中转、分流、性能测量、监控和故障排查
- 🌐 ICMP 协议、NAT 穿透等网络基础知识

## ✨ 特性

- ✅ **系统全面** - 从基础到进阶，覆盖代理技术的方方面面
- ✅ **通俗易懂** - 用简单的语言解释复杂的技术概念
- ✅ **实用性强** - 提供详细的操作步骤和实战案例
- ✅ **现代化设计** - 高端杂志风格，优雅的阅读体验
- ✅ **响应式布局** - 适配桌面、平板和手机
- ✅ **深色模式** - 支持浅色/深色主题切换
- ✅ **导航友好** - 左侧章节导航 + 右侧目录大纲
- ✅ **目录导航** - 页面右侧 TOC，支持点击跳转和滚动高亮

## 📚 内容导览

### 基础理论
- **[代理基础概念](https://zhichao12.github.io/proxy-101/pages/basics.html)** - 什么是代理、工作原理、核心组成
- **[核心术语解析](https://zhichao12.github.io/proxy-101/pages/terminology.html)** - 落地机、线路机、CN2、IPLC 等术语详解

### VPS 相关
- **[VPS 基础知识](https://zhichao12.github.io/proxy-101/pages/vps.html)** - VPS 定义、配置选择、线路类型
- **[VPS 提供商](https://zhichao12.github.io/proxy-101/pages/providers.html)** - Vultr、DO、Linode、搬瓦工等商家对比

### 协议与工具
- **[协议、核心与客户端](https://zhichao12.github.io/proxy-101/pages/protocols.html)** - Xray-core、sing-box、Mihomo 与 TCP/UDP 方案对比
- **[部署与管理工具](https://zhichao12.github.io/proxy-101/pages/tools.html)** - 系统检查、3x-ui、Marzban、证书与备份
- **[客户端推荐](https://zhichao12.github.io/proxy-101/pages/clients.html)** - Windows、macOS、Android、iOS 客户端

### 网络基础
- **[ICMP 协议详解](https://zhichao12.github.io/proxy-101/pages/icmp.html)** - ICMP 检测原理、ping 识别、ICMP 隧道
- **[NAT 穿透机制](https://zhichao12.github.io/proxy-101/pages/nat.html)** - NAT 类型、端口映射、NAT 穿透方案

### 安全与防护
- **[安全防护机制](https://zhichao12.github.io/proxy-101/pages/security.html)** - SSH 加固、防火墙、加密配置
- **[GFW 检测原理](https://zhichao12.github.io/proxy-101/pages/gfw.html)** - DPI、主动探测、流量特征识别
- **[IP 封禁机制](https://zhichao12.github.io/proxy-101/pages/ip-blocking.html)** - 判断方法、预防措施、解决方案

### 进阶与实战
- **[家宽中转与链式代理](https://zhichao12.github.io/proxy-101/pages/proxy-chain.html)** - WireGuard、链式出站、来源限制与出口验证
- **[进阶优化与维护](https://zhichao12.github.io/proxy-101/pages/advanced.html)** - BBR、CDN 边界、DNS、分流、监控与备份
- **[常见问题](https://zhichao12.github.io/proxy-101/pages/faq.html)** - FAQ 和故障排查指南

## 🚀 快速开始

### 在线访问（推荐）

直接访问：**[https://zhichao12.github.io/proxy-101](https://zhichao12.github.io/proxy-101)**

### 本地预览

#### 方法 1: 直接打开

双击 `index.html` 文件，使用浏览器打开即可。

#### 方法 2: 使用本地服务器

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需要先安装 http-server)
npm install -g http-server
http-server -p 8000

# PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`

### 部署到 GitHub Pages

1. Fork 本仓库
2. 进入仓库设置 Settings > Pages
3. 选择 Branch: `main` 和 `/root` 目录
4. 点击 Save，等待部署完成
5. 访问 `https://your-username.github.io/proxy-101`

### 部署到自己的服务器

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
├── assets/                # 资源文件
│   ├── css/
│   │   └── style.css      # 样式文件（杂志风格）
│   └── js/
│       └── main.js        # JavaScript 脚本（主题切换、TOC导航）
└── pages/                 # 内容页面
    ├── basics.html        # 代理基础概念
    ├── terminology.html   # 核心术语解析
    ├── vps.html           # VPS 基础知识
    ├── providers.html     # VPS 提供商
    ├── protocols.html     # 协议、核心与客户端
    ├── tools.html         # 部署与管理工具
    ├── clients.html       # 客户端推荐
    ├── icmp.html          # ICMP 协议详解 ⭐ 新增
    ├── nat.html           # NAT 穿透机制 ⭐ 新增
    ├── security.html      # 安全防护机制
    ├── gfw.html           # GFW 检测原理
    ├── ip-blocking.html   # IP 封禁机制
    ├── proxy-chain.html   # 家宽中转与链式代理
    ├── advanced.html      # 进阶优化与维护
    └── faq.html           # 常见问题
```

## 🎨 技术栈与设计

### 技术栈
- **HTML5** - 语义化标签
- **CSS3** - 现代化样式、响应式设计、CSS 变量
- **JavaScript** - 主题切换、导航交互、TOC 生成
- **无依赖** - 纯原生实现，无需任何框架

### 设计风格
- **高端杂志风格** - 优雅的衬线字体（Georgia, Garamond）
- **细线分隔** - 精致的细线替代粗重边框
- **充分留白** - 简约扁平设计，提升阅读体验
- **精致配色** - 深浅双主题，和谐统一

## 🌟 特色功能

### 响应式设计

网站适配常见设备：
- 🖥️ 桌面端（1920px+）- 左侧导航 + 中间内容 + 右侧目录
- 💻 笔记本（1366px+）- 左侧导航 + 中间内容
- 📱 平板（768px+）- 折叠导航 + 内容
- 📱 手机（320px+）- 移动端优化布局

### 深色模式

点击右上角的主题切换按钮，即可在浅色和深色模式之间切换。主题偏好会自动保存到本地存储。

### 双侧导航

- **左侧导航栏** - 章节分类，快速跳转到不同页面
- **右侧目录导航（TOC）** - 当前页面的目录大纲，支持：
  - 📑 自动生成二级、三级标题目录
  - 🔗 点击跳转到对应章节
  - 🎯 滚动时自动高亮当前章节
  - 📱 移动端自适应隐藏

### 内容优化

- ✨ 清晰的排版和视觉层次
- 📊 丰富的表格和对比
- 💡 信息框、警告框、成功框
- 🎨 代码高亮显示
- 🔗 面包屑导航
- 🔖 自动生成锚点链接

## 📖 使用指南

1. **浏览首页** - 了解知识库整体结构和快速入口
2. **左侧导航** - 点击章节名称跳转到对应页面
3. **右侧目录** - 在内容页面中快速定位到具体章节
4. **主题切换** - 根据环境选择浅色或深色模式
5. **搜索功能** - 使用浏览器的查找功能（Ctrl+F / Cmd+F）

## 📚 内容亮点

### 深度专业
- ICMP 协议的详细工作原理和应用场景
- NAT 穿透的完整技术方案
- GFW 检测机制的基础解析
- 协议、代理核心、客户端和管理面板的职责边界
- 家宽中转、DNS 泄露、TUN、分流与出口验证
- SSH、防火墙、日志、备份、监控和排障顺序

### 实战导向
- VPS 提供商的详细对比和选择建议
- 部署工具和面板的安全边界
- 安全防护的具体配置步骤
- 常见问题的解决方案

### 持续更新
- 跟进最新的代理技术和协议
- 补充实际使用中的经验总结
- 优化内容结构和阅读体验

## ⚠️ 免责声明

本知识库仅用于**技术学习和网络技术研究**，请遵守当地法律法规。

- 本项目不提供任何代理服务
- 本项目不存储或传输任何用户数据
- 使用相关技术时，请确保符合当地法律要求
- 用户对使用本知识库内容产生的任何后果自行负责

## 📄 开源协议

本项目采用 MIT 许可证开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目：

- 报告错误或提出改进建议
- 补充或完善内容
- 优化排版和设计
- 修正错别字和格式问题

## 📧 联系方式

如有问题或建议，欢迎通过 [GitHub Issues](https://github.com/zhichao12/proxy-101/issues) 联系。

## 🙏 致谢

感谢所有为代理技术发展做出贡献的开发者和社区。

## 🔗 相关资源

- [Xray 项目](https://github.com/XTLS/Xray-core)
- [Xray 文档](https://xtls.github.io/)
- [sing-box 项目](https://github.com/SagerNet/sing-box)
- [Mihomo 项目](https://github.com/MetaCubeX/mihomo)
- [Hysteria2 项目](https://github.com/apernet/hysteria)
- [WireGuard](https://www.wireguard.com/)
- [3x-ui](https://github.com/MHSanaei/3x-ui)
- [Marzban](https://github.com/Gozargah/Marzban)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个 Star！**

Made with ❤️ for learning | [在线访问](https://zhichao12.github.io/proxy-101)

</div>
