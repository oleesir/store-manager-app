/**
 * @function openNav
 *
 * @returns {bool} boolean
 */
function openNav() {
  const wrapperSide = document.querySelector('.wrapper-side');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.style.visibility = 'hidden';
  wrapperSide.classList.remove('wrapper-side-hide');
  wrapperSide.classList.add('wrapper-side-show');
}
/**
 * @function closeNav
 *
 * @returns {bool} boolean
 */
function closeNav() {
  const wrapperSide = document.querySelector('.wrapper-side');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.style.visibility = 'visible';
  wrapperSide.classList.add('wrapper-side-hide');
  wrapperSide.classList.remove('wrapper-side-show');
}

/**
 * @function checkBody
 *
 * @returns {bool} boolean
 */
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
