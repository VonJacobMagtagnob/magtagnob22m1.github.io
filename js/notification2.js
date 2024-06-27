document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('popup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const guestCountInput = document.getElementById('guest-count');
  const notificationContainer = document.getElementById('notification-container1');
  const notificationText = document.getElementById('notification-text');
  const closeButton = document.querySelector('.fas.fa-times');

  function areAllFieldsFilled() {
    return nameInput.value !== '' && emailInput.value !== '' && dateInput.value !== '' && timeInput.value !== '' && guestCountInput.value !== '';
  }

  function displayNotification(type, message) {
    if (type === 'error') {
      notificationContainer.classList.remove('success');
      notificationContainer.classList.add('error');
    } else if (type === 'success') {
      notificationContainer.classList.remove('error');
      notificationContainer.classList.add('success');
    }

    notificationText.textContent = message;
    notificationContainer.style.display = 'block';

    setTimeout(function () {
      notificationContainer.style.display = 'none';
    }, 3000); // Hide after 3 seconds
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!areAllFieldsFilled()) {
      displayNotification('error', 'Please fill in all the required information to serve you better.');
    } else {
      displayNotification('success', `Reservation successful! We've reserved a table for ${nameInput.value} on ${dateInput.value} at ${timeInput.value} for ${guestCountInput.value} guests. Reloading the page...`);
      setTimeout(function () {
        window.location.reload();
      }, 3000); // Reload after 3 seconds
    }
  });

  closeButton.addEventListener('click', function () {
    notificationContainer.style.display = 'none';
  });
});