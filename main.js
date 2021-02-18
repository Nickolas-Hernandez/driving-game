var $hotWheel = document.querySelector('#car');

function carController(event){
  console.log('event', event )
  console.log('event.target', event.target )
}

window.addEventListener('keydown', carController);
