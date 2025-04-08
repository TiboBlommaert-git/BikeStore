let isNavbarOpen = false;
let viewCheck = document.querySelector('.js-viewcheck');
let logo = document.querySelector('.js-logo');

if (viewCheck.classList.contains('absolute')) {
  logo.src = 'vue-assets/assets/bikestore-logo-nav.png';
} else {
  logo.src = 'vue-assets/assets/bikestore-logo-white.png';
}
function toggleNavbar() {
  isNavbarOpen = !isNavbarOpen;
  var navbar = document.getElementById('navbar-default');
  if (isNavbarOpen) {
    navbar.classList.remove('hidden');
    navbar.classList.add('block', 'w-full', 'lg:w-auto');
  } else {
    navbar.classList.remove('block', 'w-full', 'lg:w-auto');
    navbar.classList.add('hidden');
  }
}
