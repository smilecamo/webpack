// 引入图片路径
import img from './test.jpg'
function imgs (){
  const root = document.getElementById('root')
  // 创建图片标签
  const Images = new Image()
  // 给图片标签赋值
  Images.src = img
  root.append(Images)
}

export default imgs