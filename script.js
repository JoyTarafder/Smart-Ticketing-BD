







  function enableNextButton() {
    const passengerName = document.getElementById('passengerName').value;
    const passengerNumber = document.getElementById('passengerNumber').value;
    const nextButton = document.getElementById('nextButton');

    if (passengerName && passengerNumber) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

// Attach the function to the input fields' 'input' event
document.getElementById('passengerName').addEventListener('input', enableNextButton);
document.getElementById('passengerNumber').addEventListener('input', enableNextButton);