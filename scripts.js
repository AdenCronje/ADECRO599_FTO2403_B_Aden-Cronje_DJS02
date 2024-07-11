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
  }
  if (divider === 0) {
    
  }

  // Added Math.trunc() to remove decimals
  result.innerText = Math.trunc(dividend / divider);
});

// Check for when nothing is put in input fields
// if (result !== null) {
//   result.innerText =
//     "Division not performed. Both values are required in inputs. Try again";
// }
