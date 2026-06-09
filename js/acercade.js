

var sw = 0;
function modo(){
  const element = document.getElementById('main');
  const botoncito = document.getElementById('botoncito');
  const header = document.getElementById('header');
  const somos1 = document.getElementById('somos1');
  const somos2 = document.getElementById('somos2');
  const footer = document.getElementById('footer');
  const pie = document.getElementById('pie');
  const headerTitulo = document.getElementById('inicio'); 
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const text4 = document.getElementById('text4');
  if(sw==0){
    /*negro*/
    element.style.backgroundColor = '#000000';
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    somos1.style.backgroundColor = '#000000'; 
    somos2.style.backgroundColor = '#000000';
    text1.style.color = '#ffffff';
    text2.style.color = '#ffffff';
    text3.style.color = '#ffffff';
    text4.style.color = '#ffffff';
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
    somos1.style.backgroundColor = '#ffffff';
    somos2.style.backgroundColor = '#ffffff'; 
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

