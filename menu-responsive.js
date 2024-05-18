let lastScrollTop = 0;
console.log("asd");
const navbar = document.getElementById('nav');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
    // Scroll hacia abajo
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    // Scroll hacia arriba
    navbar.style.top = '0';
    console.log("as");
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



document.getElementById('menu-responsive').addEventListener('click', function() {
    console.log('ABRIR');  // Imprimir "hola" en la consola

    var navLinks = document.getElementById('navLinks');
    var asd = document.getElementById('nav');


    navLinks.classList.add('expand');
});


document.getElementById('menu-responsive-closed').addEventListener('click', function() {
    console.log('CERRAR');  // Imprimir "hola" en la consola


    var navLinks = document.getElementById('navLinks');
    var asd = document.getElementById('nav');

    navLinks.classList.remove('expand');
    navLinks.classList.remove('expand');
    
});