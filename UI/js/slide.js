function openNav() {
  const wrapperSide = document.querySelector('.wrapper-side');
  const mobileMenu = document.querySelector('.mobile-menu');

  // mobileMenu.style.display = 'none';
  wrapperSide.classList.remove('wrapper-side-hide');
  wrapperSide.classList.add('wrapper-side-show');
}

function closeNav() {
  const wrapperSide = document.querySelector('.wrapper-side');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.style.display = 'block';
  wrapperSide.classList.add('wrapper-side-hide');
  wrapperSide.classList.remove('wrapper-side-show');
}

function checkBody() {
  if (window.screen.width <= 991.98) {
    closeNav();
  }

  if (window.screen.width >= 992) {
    openNav();
  }
}

checkBody();

document.body.onresize = checkBody;
