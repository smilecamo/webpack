// 引入JS文件
import Header from './Header.js'
import imgs from './image.js'
// 获取图片得引入路径
import test from './test.jpg'
// 引入css样式表
import style from './index.scss'
imgs()
// 获取节点
const root = document.getElementById('root')
// 新建图片标签
const img = new Image()

// 给图片标签赋值
img.src = test
img.classList.add(style.img)
// 给节点添加标签
root.append(img)

new Header()