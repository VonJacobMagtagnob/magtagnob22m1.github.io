const form = document.getElementById("contact-form");
const notifications = document.querySelector(".notifications");

// Object containing details for different types of toasts
const toastDetails = {
    timer: 5000,
    success1: {
        icon: 'fa-circle-check',
        text: 'Success: Your message has been sent successfully.',
    },
    error1: {
        icon: 'fa-circle-xmark',
        text: 'Error: Unable to send your message. Please try again.',
    }
};

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing the default form submission behavior

    // Simulating a server response (replace with your actual server-side logic)
    const response = {
        success1: true, // Set to false for an error response
        message: "Your message has been sent successfully."
    };

    if(response.success1) {
        createToast('success1');
    } else {
        createToast('error1');
    }
});

