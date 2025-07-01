console.log("PyBuddy script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.querySelector(".buy-button");
  if (buyButton && buyButton.innerText.includes("Unlock")) {
    buyButton.addEventListener("click", () => {
      alert("Redirecting to UPI payment...");
    });
  }

  const fixerButton = document.querySelector("#fixBtn");
  if (fixerButton) {
    fixerButton.addEventListener("click", () => {
      alert("Trying to fix your code...");
    });
  }
});
