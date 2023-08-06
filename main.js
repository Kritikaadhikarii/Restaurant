  // Function to change the active slide
  function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slideshow1 > div');

    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  // Function to switch slides at a specific interval
  function startSlideshow() {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slideshow1 > div').length;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)
  }

  // Start the slideshow
  startSlideshow();

