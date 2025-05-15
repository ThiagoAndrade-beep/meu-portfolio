
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const images = document.querySelectorAll('.carousel-track img');

  let currentIndex = 0;

  function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Atualiza o tamanho se redimensionar a janela
  window.addEventListener('resize', updateCarousel);

