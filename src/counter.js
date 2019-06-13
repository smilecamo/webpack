// js热更新demo
function counter(){
  let div = document.createElement('h1')
  div.innerHTML = 1
  div.onclick= function(){
    // 点击之后自动加一
    div.innerHTML = parseInt(div.innerHTML,10) +1
  }
  document.body.appendChild(div)
}

export default counter