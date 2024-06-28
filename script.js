
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrollPosition = window.pageYOffset;
  
    parallaxElements.forEach(function(element) {
      const speed = element.getAttribute('data-speed');
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });
  