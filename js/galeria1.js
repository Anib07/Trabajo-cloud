
var sw = 0;
function modo(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
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
    sw=1;
    localStorage.setItem('modoOscuro', 'true'); 
  }else{
    /*blanco*/
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



