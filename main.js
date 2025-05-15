document.addEventListener('DOMContentLoaded', function() {
    const carrossels = document.querySelectorAll('.project-carrossel');
    
    carrossels.forEach((carrossel, index) => {
        const carrosselId = carrossel.getAttribute('data-carrossel') || `carrossel-${index}`;
        const slides = carrossel.querySelectorAll('.slide');
        const prevBtn = carrossel.closest('.carrossel-wrapper').querySelector('.carrossel-btn.prev');
        const nextBtn = carrossel.closest('.carrossel-wrapper').querySelector('.carrossel-btn.next');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateCarrossel() {
            const slideWidth = slides[0].clientWidth;
            carrossel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
            prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
            nextBtn.style.display = currentIndex === totalSlides - 1 ? 'none' : 'flex';
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateCarrossel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarrossel();
            }
        });

        updateCarrossel();
        
        window.addEventListener('resize', updateCarrossel);
    });
});

document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.navBar-content').classList.toggle('mobile-active');
  });