  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      dropdown.parentElement.addEventListener("mouseenter", () => {
        // Reset any previously set left styles
        dropdown.style.left = ""; 

        // Get the bounding rectangle of the dropdown
        const rect = dropdown.getBoundingClientRect();
        const overflowRight = rect.right > window.innerWidth;

        // Adjust position if it overflows
        if (overflowRight) {
          const parentRect = dropdown.parentElement.getBoundingClientRect();
          dropdown.style.left = `${parentRect.width - rect.width}px`;
        }
      });
    });
  });
