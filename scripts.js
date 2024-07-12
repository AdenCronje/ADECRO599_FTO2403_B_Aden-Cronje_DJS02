const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const calculateButton = document.querySelector("button[type=submit]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // Checking if input is empty
  if (dividend.length === 0 || divider.length === 0) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }
  // Checking if there's only numbers entered in input fields
  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Invalid input");
    return;
  } else if (divider !== 0) {
    // Preventing 0 as an input in divider
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Invalid value");
    return;
  }
  // Added Math.trunc() to remove decimals
  result.innerText = Math.trunc(dividend / divider);
});
