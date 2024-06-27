const teamButtons = document.querySelectorAll('.team-button');
const teamModals = document.querySelectorAll('.team-modal');
const closeButton = document.querySelectorAll('.close-button');

teamButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    teamModals[index].style.display = 'block';
  });
});

closeButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    teamModals[index].style.display = 'none';
  });
});