// 字体打包需要暂时关闭css模块化打包
import './font.scss'
import './header.css'
function Header (){
  const root = document.getElementById('root')
  // 新增header标记
  const section = document.createElement('h1')
  section.textContent="Header"
  root.append(section)
  // 字体
  const I = document.createElement('div')
  I.classList.add('iconfont', 'icon-tongzhi')
  root.append(I)
  // 新增一个按钮,点击之后新增item,热更新css样式
  const button = document.createElement('button')
  button.innerHTML = '新增'
  root.append(button)
  button.onclick=function(){
    const div = document.createElement('div')
    div.innerHTML = 'item'
    div.classList.add('item')
    root.append(div)
  }
}
export default Header