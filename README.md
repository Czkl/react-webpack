# react-webpack
#前言 随着前端代码越来越多，越来越复杂，整个工程变得越来越难以管理。所以，前端工程化已是必然的趋势，已经是2016年了，还在用手动添加依赖吗？快来学习用构建工具来管理web项目吧。

就像是Android工程使用gradle来进行项目构建一样，在前端世界里，现在最流行的工具就是webpack。

而现在最流行的前端框架，分别是Google的Angular.js，Facebook的React.js，还有我们国人自己的尤雨溪大神的Vue.js。因为最近Angular和Vue发布了2.0版本，区别较大，所以推荐学习更为稳定的React.js。

自己是阅读了以下两篇文章：

入门Webpack，看这篇就够了 React+Webpack快速上手指南
两篇文章写的非常好，但中间还是有些地方不是很清楚，需要结合起来看，所以写下这篇文章，总结自己实际开发中遇到的坑。乐于分享，收获更多。

#开发环境 推荐使用JetBrain的Webstorm，有强大的代码提示，支持JSX和ES6语法；可以试用一个月，相对于开发效率的巨大提升，一年300块真的不算太贵。

我们将会使用npm来下载和构建依赖，需要提前安装node.js，如果没有安装可以参考这篇文章安装node.js和npm

使用npm时需要将终端定位到项目的根目录下

React作为Facebook全家桶的老大哥，今后肯定会使用Facebook新出的开源依赖工具Yarn，推荐好奇的同学们去试（cai）试（keng）。我们还是先使用稳定的npm，毕竟依赖工具只是辅助，以后可以迁移到yarn上，重要的是代码。

源码地址：https://github.com/BadWaka/ReactDemo_webpack 如果觉得有帮助，点个star呗

让我们开始吧

#项目结构 新建一个新项目，命名为ReactDemo，将项目目录组织如下：



其中app是开发目录
components用来放React的组件
Component1.jsx是React特有的jsx文件
main.js是入口文件，用来将React组件放在真正的Html中
build是输出目录
index.html是最终要呈现的页面文件，代码如下
<!DOCTYPE html>
<title>ReactDemo1</title>
<script src="bundle.js"></script> ``` - bundle.js是app文件夹下的文件经webpack打包后最终生成的供浏览器解析的js文件，这个不需要手动进行配置，甚至你不需要新建它，由webpack自动生成。
#创建package.json文件 package.json是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等；

在工程根目录打开命令行（win10中使用ctrl+shift+右键可以在菜单中看到"在此处打开命令窗口"的选项），输入npm init可以自动创建package.json文件；

输入命令后，终端会问用户一系列的问题，如果不需要在npm中发布你的模块，一路回车默认即可（注意：name需要小写）；



确认后输入yes即可看到package.json文件创建完成



#安装webpack

//全局安装webpack，优点是打包时可以直接输webpack命令
npm install -g webpack

//在本项目中安装webpack，--save-dev的意思是将依赖写入项目的package.json文件
npm install --save-dev webpack
在命令行中输入npm install --save-dev webpack，在本项目中安装webpack作为依赖包
