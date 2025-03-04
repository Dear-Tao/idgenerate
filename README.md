# 身份证和银行卡信息生成器

一个基于Vue 3开发的身份证和银行卡信息生成工具，可以快速生成模拟的身份证信息和银行卡信息，适用于开发测试场景。

## 预览

### 在线DEMO

在线预览地址：[DEMO](https://dear-tao.github.io/idgenerate/)

### 界面预览

![项目界面预览](src/assets/sl.png)

上图展示了项目的主要界面，包括身份证信息生成区域和银行卡信息生成区域。左侧可以看到身份证的正面信息展示，右侧则是生成的储蓄卡和信用卡信息展示。

## 功能特点

### 身份证信息生成
- 自动生成真实性的中文姓名
- 生成符合规则的18位身份证号码
- 自动提取性别和出生日期信息
- 随机生成民族信息
- 生成真实性的地址信息
- 生成签发机关信息
- 生成有效期限信息
- 支持上传头像功能

### 银行卡信息生成
- 支持生成储蓄卡信息
- 支持生成信用卡信息
- 生成真实性的银行名称
- 生成符合规则的银行卡号

## 技术栈

- Vue 3
- Vite
- Element Plus
- Node.js v18.x

## 开发环境设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 使用说明

### 身份证信息生成
1. 点击「生成信息」按钮，自动生成完整的身份证信息
2. 点击「上传头像」按钮，可以上传自定义头像
3. 生成的信息包括：姓名、性别、民族、出生日期、住址、身份证号码、签发机关和有效期限

### 银行卡信息生成
1. 点击「生成银行卡」按钮，同时生成储蓄卡和信用卡信息
2. 生成的信息包括：银行名称、卡类型和卡号

## 注意事项

- 本工具生成的所有信息仅供开发测试使用
- 生成的身份证号码和银行卡号符合格式规则，但并非真实数据
- 请勿将生成的信息用于非法用途



