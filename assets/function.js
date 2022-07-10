// Ocultar loader
window.onload = function(){
  $('#cooking').fadeOut();
  $('body').removeClass('hidden');
}

// Llamamos al boton
let mybutton = document.getElementById("btn-back-to-top");

// Cuando se deslicen 20px se mostrara el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Cuando se precione el boton te llevara al principio de la pagina
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





























