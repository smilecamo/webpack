// 引入JS文件
import Header from './Header.js'
import counter from './counter'
import imgs from './image.js'
// 获取图片得引入路径
import test from './test.jpg'
// 引入css样式表 模块化时开启
// import style from './index.scss'
// 基本的css
import './index.scss'
// 创建图片
imgs()
// 获取节点
const root = document.getElementById('root')
// 新建图片标签
const img = new Image()

// 给图片标签赋值
img.src = test
// 给图片增加class 模块化时开启使用
// img.classList.add(style.img)
// 不使用模块化时开启
img.classList.add('img')
// 给节点添加标签
root.append(img)
console.log('object');
new Header()
counter()