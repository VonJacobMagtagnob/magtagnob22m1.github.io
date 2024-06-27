const readMoreBtns = document.querySelectorAll('.read-more-btn');
const popups = document.querySelectorAll('.popup');
const closePopupBtns = document.querySelectorAll('.close-popup');

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popups[index].style.display = 'block';
    popups[index].classList.add('loading');

    // Close popup after 5 seconds
    setTimeout(() => {
      popups[index].style.display = 'none';
      popups[index].classList.remove('loading');
    }, 2000);
  });
});

closePopupBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popups[index].style.display = 'none';
    popups[index].classList.remove('loading');
  });
});