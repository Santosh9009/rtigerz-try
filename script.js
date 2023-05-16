const goToBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 300){
    goToBtn.style.display = 'flex'
  }else{
    goToBtn.style.display = 'none'
  }
}
goToBtn.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})


