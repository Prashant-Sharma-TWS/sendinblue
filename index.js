var hamburger = document.getElementsByClassName('hamburger')[0];
var menu = document.getElementsByClassName('menu')[0];

var menuOpen = false;
hamburger.addEventListener('click', () => {
  if( !menuOpen ) {
    menu.style.display = 'flex';
    menu.classList.toggle('down');
    hamburger.classList.add('open');
    menuOpen = true;
  }
  else {
    menu.style.display = 'none';
    menu.classList.toggle('down');
    hamburger.classList.remove('open');
    menuOpen = false;
  }
});

window.addEventListener('resize', () => {
  if( window.innerWidth > 950 ) {
    menu.style.display = 'flex';
  }
});