document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);

    setInterval(nextImage, 5000); // Cambia de imagen automáticamente cada 3 segundos
});
