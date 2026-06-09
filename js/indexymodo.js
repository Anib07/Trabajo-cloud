var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}
menu.addEventListener('click', toggleMenu, false);


//para cerrar el hamburger al hacer click fuera de él
var menuPrincipal = document.querySelector('.menuppal');

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
//hasta aca para cerrar

//modo oscuro y claro
var sw = 0;
function negro(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
  const prod = document.getElementById('titulo2');
  const titu = document.getElementById('titulo');
  const parra = document.getElementById('p1');
  const conte = document.getElementById('carrusel');
  const conte2 = document.getElementById('carrusel2');
  const conte3 = document.getElementById('carrusel3');
  const conte4 = document.getElementById('carrusel4');
  const headerTitulo = document.getElementById('inicio');
  if(sw==0){
    /*negro*/
    element.style.backgroundColor = '#000000';
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    headerTitulo.style.color = '#ffffff';
    botoncito.style.color = '#ffffff';
    pie.style.color = '#ffffff';
    botoncito.innerHTML='&#x2600;';
    prod.style.color = '#ffffff';
    titu.style.color = '#ffffff';
    parra.style.color = '#ffffff';
    conte.style.backgroundColor = '#B3B3B3';
    conte2.style.backgroundColor = '#B3B3B3';
    conte3.style.backgroundColor = '#B3B3B3';
    conte4.style.backgroundColor = '#B3B3B3';
    sw=1;
    localStorage.setItem('modoOscuro', 'true');
  }else{
    /*blanco*/
    element.style.backgroundColor = '#ffffff';
    header.style.backgroundColor = '#ffffff';
    footer.style.backgroundColor = '#ffffff';
    conte.style.backgroundColor = '#ffffff';
    conte2.style.backgroundColor = '#ffffff';
    conte3.style.backgroundColor = '#ffffff';
    conte4.style.backgroundColor = '#ffffff';
    headerTitulo.style.color = '#000000';
    botoncito.style.color = '#000000';
    pie.style.color = '#000000';
    botoncito.innerHTML='&#x26c5;&#xfe0e;';
    prod.style.color = '#000000';
    titu.style.color = '#000000';
    parra.style.color = '#000000';
    sw=0;
    localStorage.setItem('modoOscuro', 'false');
  }
}

// para que el modo que se elija se guarde en las demas ventanas
function cargarModoOscuro() {
  const modoOscuro = localStorage.getItem('modoOscuro');
  if (modoOscuro === 'true') {
      sw = 0; 
      negro(); 
  }
}

window.onload = cargarModoOscuro;
