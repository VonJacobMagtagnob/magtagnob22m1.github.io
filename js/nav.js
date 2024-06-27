const nav = document.querySelector('.Nav');
const navHeight = nav.offsetHeight; // get the nav's height
const navTop = nav.offsetTop; // get the nav's top position

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > navTop - navHeight) {
    nav.classList.add('sticky'); // add the sticky class when the nav is about to be covered
    nav.classList.add('active'); // add the active class to trigger the animation
  } else {
    nav.classList.remove('sticky'); // remove the sticky class when the nav is not covered
    nav.classList.remove('active'); // remove the active class to reset the animation
  }
});