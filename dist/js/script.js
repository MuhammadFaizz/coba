// Harmburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector('#to-top');
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}


// KLIK DILUAR HAMBURGER MENU
window.addEventListener('click', function (e){
    if(e.target != navMenu && e.target != hamburger) {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    }
}); 

// darkmode 
darkToggle.addEventListener('click', function(){
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
