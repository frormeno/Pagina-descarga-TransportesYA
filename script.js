document.addEventListener('DOMContentLoaded', function () {
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

    setInterval(nextImage, 5000); // Cambia de imagen automáticamente cada 5 segundos

    // Detectar tipo de dispositivo
    const downloadContent = document.getElementById('download-content');
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // Mostrar botón de descarga en dispositivos móviles
        downloadContent.innerHTML = `
            <a href="https://drive.google.com/file/d/1BQ6r8Yg8QBJ1XKCZ2_JpYQ4y6CCkwjFR/view?usp=sharing" 
               class="download-button" target="_blank">Descargar App</a>`;
    } else {
        // Mostrar QR en computadoras
        downloadContent.innerHTML = `
            <div id="qr-code">
                <p>Escanea el código QR para descargar:</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://drive.google.com/file/d/1BQ6r8Yg8QBJ1XKCZ2_JpYQ4y6CCkwjFR/view?usp=sharing&size=150x150" 
                     alt="QR para descargar la app">
            </div>`;
    }
});
