const burgerMenu = document.querySelector('.burger-menu');
const lines = document.querySelectorAll('.line');

burgerMenu.addEventListener('click', () => {
  lines.forEach(line => line.classList.toggle('active'));
});




function OpenMenuBurger(){
    let menuBurger = document.getElementById('Navigation-Burger-Open-Menu')
    if(menuBurger.style.display != 'block'){
        menuBurger.style.display = 'block'
    }else{
        menuBurger.style.display = 'none'
    }
}
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let logo = document.querySelector('.Image-Logo');

  if (window.scrollY > 100) {
    header.style.height = '80px';
    logo.style.width = '30px'; 
    logo.style.height = '40px'; 
  } else {
    header.style.height = '113px';
    logo.style.width = '40px'; 
    logo.style.height = '50px'; 
  }
});





