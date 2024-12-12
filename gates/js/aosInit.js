    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1800,
      });
  
      // Locomotive Scroll Initialization
      const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true
      });
  
      // Floating shapes animation with GSAP
      gsap.to('.floating-icon', {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 2,
      });