document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector(".email-signup input");
  const getStartedBtn = document.querySelector(".email-signup button");

  getStartedBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      // ✅ Redirect after successful validation
      window.location.href = "signup.html";
    }
  });
});


