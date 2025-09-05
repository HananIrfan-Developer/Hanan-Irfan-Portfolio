// 1. Welcome message
window.addEventListener("load", function () {
  alert("Welcome to Hanan's Portfolio!");
});

// 2. More About Me button action
document.getElementById("moreaboutme").addEventListener("click", function () {
  this.style.backgroundColor = "aqua";
  this.style.color = "black";
  this.textContent = "Thanks for Clicking!";
});

// 3. Service buttons highlight
document
  .getElementById("uiuxdesignbutton")
  .addEventListener("click", function () {
    highlightService(this);
  });
document
  .getElementById("frontendeveloperbutton")
  .addEventListener("click", function () {
    highlightService(this);
  });
document
  .getElementById("responsivedesignbutton")
  .addEventListener("click", function () {
    highlightService(this);
  });

function highlightService(button) {
  document.querySelectorAll(".myservices button").forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
  button.style.backgroundColor = "aqua";
  button.style.color = "black";
}

// 4. Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 5. Contact form confirmation
document
  .querySelector(".contactmeform form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Stop actual form submission
    alert("Thank you for contacting me! I will get back to you soon.");
    this.reset();
  });
