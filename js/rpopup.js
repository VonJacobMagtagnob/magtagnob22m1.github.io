// Get the reservation button and popup form container
const reservationBtn = document.getElementById('reservation-btn');
const popupFormContainer = document.getElementById('popup-form-container');

// Add an event listener to the reservation button
reservationBtn.addEventListener('click', () => {
  // Show the popup form container
  popupFormContainer.style.display = 'block';
});

// Add an event listener to the popup form container to close it when clicked outside
popupFormContainer.addEventListener('click', (e) => {
  if (e.target === popupFormContainer) {
    popupFormContainer.style.display = 'none';
  }
});