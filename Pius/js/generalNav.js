document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const sidebarClose = document.getElementById("sidebar-close");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const mainSidebar = document.getElementById("main-sidebar");
    const dropdownSidebar = document.getElementById("dropdown-sidebar");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const dropdownBack = document.getElementById("dropdown-back");
  
    // Scroll animation for navbar
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY === 0) {
        navbar.classList.remove("bg-[#FFE31A]");
        navbar.classList.add("bg-[#FFE31A]");
      } else if (currentScrollY > lastScrollY) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
        navbar.classList.add("bg-[#FFE31A]");
        navbar.classList.remove("bg-[#FFE31A]");
      }
  
      lastScrollY = currentScrollY;
    });
  
    // Open Mobile Sidebar
    mobileMenuToggle.addEventListener("click", () => {
      mobileSidebar.classList.remove("-translate-x-full", "hidden");
      mainSidebar.classList.remove("hidden");
      dropdownSidebar.classList.add("hidden");
    });
  
    // Close Mobile Sidebar
    sidebarClose.addEventListener("click", () => {
      mobileSidebar.classList.add("-translate-x-full");
    });
  
    // Open Dropdown Sidebar with correct section
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
  
        const sectionId = toggle.getAttribute("data-section");
        const targetSection = document.getElementById(sectionId);
  
        if (targetSection) {
          mainSidebar.classList.add("hidden");
          dropdownSidebar.classList.remove("hidden");
  
          // Hide all sections and show the target section
          dropdownSidebar.querySelectorAll("ul").forEach((section) => {
            section.classList.add("hidden");
          });
          targetSection.classList.remove("hidden");
        }
      });
    });
  
    // Back to Main Sidebar
    dropdownBack.addEventListener("click", () => {
      dropdownSidebar.classList.add("hidden");
      mainSidebar.classList.remove("hidden");
    });
  });
  