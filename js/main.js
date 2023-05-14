let headerBurgerOpen = document.querySelector('.header__burger')
let mobileMenuClose = document.querySelector(".mobile-menu__close")
let mobileMenu = document.querySelector(".mobile-menu")
let mobileMenuOverlay = document.querySelector(".mobile-menu__overlay")
headerBurgerOpen.addEventListener('click' , function(){
  mobileMenu.classList.add('show')
  document.body.classList.add('show')
})
mobileMenuClose.addEventListener('click' , function(){
  mobileMenu.classList.remove('show')
  document.body.classList.remove('show')
})
mobileMenuOverlay.addEventListener('click' , function(){
  mobileMenu.classList.remove('show')
  document.body.classList.remove('show')
})