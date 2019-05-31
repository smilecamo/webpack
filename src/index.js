
// 引入JS文件
import Header from './Header.js'
// 获取图片得引入路径
import test from './test.jpg'
// 获取节点
const root = document.getElementById('root')
// 新建图片标签
const img = new Image()
// 给图片标签赋值
img.src = test
// 给节点添加标签
root.append(img)

new Header()