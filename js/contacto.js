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


// Inicialización de EmailJS con tu clave pública
(function(){
    emailjs.init("rvD6JGN_zsKvr53cu");
})();

// Función para enviar el correo
function enviarcorreo() {
    var param = {
        nombre: document.getElementById("nombre").value,
        mensaje: document.getElementById("mensaje").value,
        asunto: document.getElementById("asunto").value,
    };

    var serviceId = "service_56iuexi"; // ID del servicio desde EmailJS
    var templateId = "template_pv7yi9s"; // ID de la plantilla configurada en EmailJS

    emailjs.send(serviceId, templateId, param)
        .then(function(response) {
            console.log("Correo enviado correctamente", response);
            alert("ENVIADO CORRECTAMENTE");
        }, function(error) {
            console.error("Error al enviar el correo", error);
            alert("Hubo un error al enviar el correo. Por favor, inténtelo de nuevo.");
        });
}

var sw = 0;
function modo(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
  const correo = document.getElementById('correo');
  const sugere = document.getElementById('Titulo1');
  const ubi = document.getElementById('ubi');
  const titulo1 = document.getElementById('titulo3');
  const titulo2 = document.getElementById('p1');
  const logo1 = document.getElementById('logo1');
  const logo2 = document.getElementById('logo2');
  const logo3 = document.getElementById('logo3');
  const ubiletra = document.getElementById('ubititu');
  const p = document.getElementById('p');
  const contacTitu = document.getElementById('contacTitu');
  const p2 = document.getElementById('p2');
  const serviTitu = document.getElementById('serviTitu');
  const p3 = document.getElementById('p3');
  const headerTitulo = document.getElementById('inicio'); 
  if(sw==0){
    /*negro*/
    element.style.backgroundColor = '#000000';
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    correo.style.backgroundColor = '#333333';
    ubi.style.backgroundColor = '#333333';
    headerTitulo.style.color = '#ffffff';
    botoncito.style.color = '#ffffff';
    pie.style.color = '#ffffff';
    botoncito.innerHTML='&#x2600;';
    sugere.style.color = '#ffffff';
    titulo1.style.color = '#ffffff';
    titulo2.style.color = '#ffffff';
    logo1.style.backgroundColor = '#000000';
    logo2.style.backgroundColor = '#000000';
    logo3.style.backgroundColor = '#000000';
    ubiletra.style.color = '#ffffff';
    p.style.color = '#ffffff';
    contacTitu.style.color = '#ffffff';
    p2.style.color = '#ffffff';
    serviTitu.style.color = '#ffffff';
    p3.style.color = '#ffffff';
    sw=1;
    localStorage.setItem('modoOscuro', 'true'); 
  }else{
    /*blanco*/
    element.style.backgroundColor = '#ffffff';
    header.style.backgroundColor = '#ffffff';
    footer.style.backgroundColor = '#ffffff';
    correo.style.backgroundColor = '#e9e9e9';
    ubi.style.backgroundColor = '#e9e9e9';
    headerTitulo.style.color = '#000000';
    botoncito.style.color = '#000000';
    pie.style.color = '#000000';
    botoncito.innerHTML='&#x26c5;&#xfe0e;';
    sugere.style.color = '#000000';
    titulo1.style.color = '#000000';
    titulo2.style.color = '#000000';
    logo1.style.backgroundColor = '#ffffff';
    logo2.style.backgroundColor = '#ffffff';
    logo3.style.backgroundColor = '#ffffff';
    ubiletra.style.color = '#000000';
    p.style.color = '#000000';
    contacTitu.style.color = '#000000';
    p2.style.color = '#000000';
    serviTitu.style.color = '#000000';
    p3.style.color = '#000000';
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



