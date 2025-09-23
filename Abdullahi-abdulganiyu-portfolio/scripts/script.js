document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("All fields are required!");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Dynamic confirmation message
      const confirmation = document.createElement("p");
      confirmation.textContent = `Thank you, ${name}! Your message has been sent.`;
      confirmation.style.color = "green";
      form.appendChild(confirmation);

      form.reset();
    });
  }

  // Example dynamic content (services highlight)
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h3").textContent}`);
    });
  });
});
