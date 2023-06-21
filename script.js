// script.js
window.addEventListener('DOMContentLoaded', function() {
  var datetimeElement = document.getElementById('datetime');

  function updateDateTime() {
    var currentDate = new Date();
    var formattedDateTime = currentDate.toLocaleString();
    datetimeElement.textContent = formattedDateTime;
  }

  // Initial call to display date and time
  updateDateTime();

  // Update date and time every second
  setInterval(updateDateTime, 1000);
});
