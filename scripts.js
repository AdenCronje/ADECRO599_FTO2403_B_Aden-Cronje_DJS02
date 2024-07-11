const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // Added Math.trunc() to remove decimals
  result.innerText = Math.trunc(dividend / divider);
});

// Check for when nothing is put in input fields
if (result !== null) {
  result.innerText =
    "Division not performed. Both values are required in inputs. Try again";
}

// An invalid division should log an error in the console
// Providing anything that is not a number should crash the program
