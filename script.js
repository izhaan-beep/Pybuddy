console.log("PyBuddy loaded successfully!");

// In future: You can connect this to an AI backend to auto-fix Python errors.
document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.querySelector(".buy-button");
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      alert("Coming soon: AI Python course purchase via ₹69");
    });
  }
});
