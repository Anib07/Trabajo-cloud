var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}
menu.addEventListener('click', toggleMenu, false);


var menuPrincipal = document.querySelector('.menuppal');

// Método para alternar el menú
function toggleMenu(event) {
  menu.classList.toggle('is-active');
  menuPrincipal.classList.toggle('is_active');
  event.preventDefault();
}
function closeMenu(event) {
  if (!menu.contains(event.target) && !menuPrincipal.contains(event.target)) {
    menu.classList.remove('is-active');
    menuPrincipal.classList.remove('is_active');
  }
}
menu.addEventListener('click', toggleMenu, false);

document.addEventListener('click', closeMenu, false);


var sw = 0;
function modo(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
  const headerTitulo = document.getElementById('inicio'); 
  const negro = document.getElementById('negro');
  const text1 = document.getElementById('txt1');
  const text2 = document.getElementById('txt2');
  const text3 = document.getElementById('txt3');
  const text4 = document.getElementById('txt4');
  const carrusel = document.getElementById('carrusel');
  const carrusel2 = document.getElementById('carrusel2');
  const carrusel3 = document.getElementById('carrusel3');
  const carrusel4 = document.getElementById('carrusel4');
  const ttt = document.getElementById('titulo2');
  if(sw==0){
    /*negro*/
    carrusel.style.backgroundColor = '#000000';
    carrusel2.style.backgroundColor = '#000000';
    carrusel3.style.backgroundColor = '#000000';
    carrusel4.style.backgroundColor = '#000000';
    element.style.backgroundColor = '#000000';
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    negro.style.backgroundColor = '#000000';
    negro.style.color = '#ffffff';
    text1.style.color = '#ffffff';
    text2.style.color = '#ffffff';
    text3.style.color = '#ffffff';
    text4.style.color = '#ffffff';
    headerTitulo.style.color = '#ffffff';
    botoncito.style.color = '#ffffff';
    pie.style.color = '#ffffff';
    botoncito.innerHTML='&#x2600;';
    ttt.style.color = '#ffffff';
    sw=1;
    localStorage.setItem('modoOscuro', 'true'); 
  }else{
    /*blanco*/
    element.style.backgroundColor = '#ffffff';
    header.style.backgroundColor = '#ffffff';
    carrusel.style.backgroundColor = '#ffffff';
    carrusel2.style.backgroundColor = '#ffffff';
    carrusel3.style.backgroundColor = '#ffffff';
    carrusel4.style.backgroundColor = '#ffffff';
    footer.style.backgroundColor = '#ffffff';
    negro.style.backgroundColor = '#ffffff';
    negro.style.color = '#000000';
    ttt.style.color = '#000000';
    text1.style.color = '#000000';
    text2.style.color = '#000000';
    text3.style.color = '#000000';
    text4.style.color = '#000000';
    headerTitulo.style.color = '#000000';
    botoncito.style.color = '#000000';
    pie.style.color = '#000000';
    botoncito.innerHTML='&#x26c5;&#xfe0e;';
    sw=0;
    localStorage.setItem('modoOscuro', 'false'); 
  }
}

// para que el modo que se elija se guarde en las demas ventanas
function cargarModoOscuro() {
  const modoOscuro = localStorage.getItem('modoOscuro');
  if (modoOscuro === 'true') {
      sw = 0; 
      modo(); 
  }
}

window.onload = cargarModoOscuro;