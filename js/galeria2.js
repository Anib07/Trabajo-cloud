
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//modo oscuro y claro
var sw = 0;
function modo(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
  const texto1 = document.getElementById('texto1');
  const texto2 = document.getElementById('texto2');
  const texto3 = document.getElementById('texto3');
  const texto4 = document.getElementById('texto4');
  const h1 = document.getElementById('h21');
  const h2 = document.getElementById('h22');
  const h3 = document.getElementById('h23');
  const h4 = document.getElementById('h24');
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const p4 = document.getElementById('p4');
  const headerTitulo = document.getElementById('inicio'); 
  if(sw==0){
    /*negro*/
    h1.style.color = '#ffffff';
    h2.style.color = '#ffffff';
    h3.style.color = '#ffffff';
    h4.style.color = '#ffffff';
    p1.style.color = '#ffffff';
    p2.style.color = '#ffffff';
    p3.style.color = '#ffffff';
    p4.style.color = '#ffffff';
    texto1.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    texto2.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    texto3.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    texto4.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    element.style.backgroundColor = '#000000';
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    headerTitulo.style.color = '#ffffff';
    botoncito.style.color = '#ffffff';
    pie.style.color = '#ffffff';
    botoncito.innerHTML='&#x2600;';
    sw=1;
    localStorage.setItem('modoOscuro', 'true');
  }else{
    /*blanco*/
    h1.style.color = '#000000';
    h2.style.color = '#000000';
    h3.style.color = '#000000';
    h4.style.color = '#000000';
    p1.style.color = '#000000';
    p2.style.color = '#000000';
    p3.style.color = '#000000';
    p4.style.color = '#000000';
    texto1.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    texto2.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    texto3.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    texto4.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    element.style.backgroundColor = '#ffffff';
    header.style.backgroundColor = '#ffffff';
    footer.style.backgroundColor = '#ffffff';
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
