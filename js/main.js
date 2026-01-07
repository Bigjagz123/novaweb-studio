document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for contacting NovaWeb Studio. We will get back to you shortly.");
    form.reset();
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
