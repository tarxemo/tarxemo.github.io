
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const sidebarClose = document.getElementById("sidebar-close");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const mainSidebar = document.getElementById("main-sidebar");
    const dropdownSidebar = document.getElementById("dropdown-sidebar");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const dropdownBack = document.getElementById("dropdown-back");

    let lastScrollY = window.scrollY;

    // Scroll animation for navbar
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Back to top
        navbar.classList.remove("bg-[#FFE31A]");
        navbar.classList.add("bg-transparent");
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.style.top = "-100px";
      } else {
        // Scrolling up
        navbar.style.top = "0";
        navbar.classList.add("bg-[#FFE31A]");
        navbar.classList.remove("bg-transparent");
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

    // Open Dropdown Sidebar
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        mainSidebar.classList.add("hidden");
        dropdownSidebar.classList.remove("hidden");
      });
    });

    // Back to Main Sidebar
    dropdownBack.addEventListener("click", () => {
      dropdownSidebar.classList.add("hidden");
      mainSidebar.classList.remove("hidden");
    });
  });