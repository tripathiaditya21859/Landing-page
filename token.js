// Modal Functionality
const bookingModal = document.getElementById('booking-modal');
const bookingForm = document.getElementById('booking-form');

function openBookingModal() {
    bookingModal.style.display = 'flex';
}

function closeBookingModal() {
    bookingModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = 'none';
    }
}

// Handle Form Submission and Tokenization
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate token generation
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value
    };

    const token = btoa(JSON.stringify(formData)); // Basic tokenization using base64 encoding
    console.log("Generated Token: ", token);

    // Send the tokenized data to the server (simulated)
    alert('Appointment booked successfully!\nToken: ' + token);

    // Clear form and close modal
    bookingForm.reset();
    closeBookingModal();
});
