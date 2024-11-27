function confirmBooking() {
    alert("Your booking has been confirmed!");
}

// Example of dynamic data
const bookingData = {
    bookingId: '12345',
    customerName: 'Thai Bao',
    bookingDate: '2024-11-27',
    carModel: 'Toyota Corolla',
    rentalDuration: '3 days',
    totalPrice: '$120'
};

// Dynamically set data into HTML
document.getElementById('booking-id').textContent = bookingData.bookingId;
document.getElementById('customer-name').textContent = bookingData.customerName;
document.getElementById('booking-date').textContent = bookingData.bookingDate;
document.getElementById('car-model').textContent = bookingData.carModel;
document.getElementById('rental-duration').textContent = bookingData.rentalDuration;
document.getElementById('total-price').textContent = bookingData.totalPrice;
