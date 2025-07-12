document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#menu-section");
  const buttons = section.querySelectorAll(".filter-btn");
  const items = section.querySelectorAll(".menu-item");
  const toggle = document.getElementById("dark-mode-toggle");

  // Show all items by default
  setTimeout(() => {
    section.querySelector(".menu-items").classList.add("loaded");
    section.querySelector('[data-category="all"]').click();
  }, 500);

  // Filter functionality
  buttons.forEach(button => {
    const category = button.getAttribute("data-category");
    const count = category === "all" 
      ? items.length 
      : section.querySelectorAll(`.menu-item.${category}`).length;
    button.textContent += ` (${count})`;

    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.classList.add("visible");
        } else {
          item.classList.remove("visible");
        }
      });
    });
  });

  // Dark mode toggle
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

