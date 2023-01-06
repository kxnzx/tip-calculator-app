// Calculate and display the values when a button is clicked:
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", calculateAndDisplayValues);
}); // Calculate and display the values when the custom tip percentage is typed in:
document
  .getElementById("tip-custom")
  .addEventListener("input", calculateAndDisplayValues);
// Calculate and display the values when the number of people changes:
let previousTip = 5;
document.getElementById("people").addEventListener("input", () => {
  calculateAndDisplayValues(null, true);
});
// Calling the function:
calculateAndDisplayValues();

// FUNCTION CalculateAndDisplayValues
// Calculate the tip and total amount and display the values:
function calculateAndDisplayValues(pointer, people) {
  // Get the bill amount and tip percentage:
  var billAmount = document.getElementById("bill").value;
  previousTip = !people ? this.value || previousTip : previousTip;
  var tipPercentage = previousTip || this.value;
  // If the custom tip percentage input is not empty, use it instead of the button value:
  if (document.getElementById("tip-custom").value) {
    tipPercentage = document.getElementById("tip-custom").value;
  } // Convert the bill amount and tip percentage to numbers (because the initial/default value is a string):
  billAmount = parseFloat(billAmount);
  tipPercentage = parseFloat(tipPercentage);
  // Check if the bill amount and tip percentage are valid numbers (isNAN = isNotaNumber):
  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    // Display an error message if the values are not valid:
    document.getElementById("tip-amount_pp").innerHTML = "Error";
    document.getElementById("total-amount_pp").innerHTML = "Error";
    return;
  } // Get the number of people:
  var people = document.getElementById("people").value;
  // Convert the number of people to a number:
  /* If you want to treat the value as a number, 
  you can use the parseInt() or parseFloat() functions to convert it to a number. */
  people = parseInt(people, 10);
  // Check if the number of people is a valid number:
  if (isNaN(people) || people <= 0) {
    // Display an error message if the value is not valid:
    document.getElementById("error").innerHTML = "Can't be zero";
    return;
  } else if (isNaN(people) || people >= 0) {
    document.getElementById("error").innerHTML = "";
  } // Calculate the tip amount per person:
  var tipAmountPerPerson = (billAmount * tipPercentage) / 100 / people;
  // Calculate the total amount per person:
  var totalAmountPerPerson = billAmount / people + tipAmountPerPerson;
  // Display the tip and total amount, toFixed() rounds the number:
  document.getElementById("tip-amount_pp").innerHTML =
    tipAmountPerPerson.toFixed(2);
  document.getElementById("total-amount_pp").innerHTML =
    totalAmountPerPerson.toFixed(2);
}

// Reset the form when the reset button is clicked:
document
  .querySelector('button[type="reset"]')
  .addEventListener("click", function () {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip-custom").value = "";
    document.getElementById("tip-amount_pp").innerHTML = "0.00";
    document.getElementById("total-amount_pp").innerHTML = "0.00";
  });
