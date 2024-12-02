document.addEventListener('DOMContentLoaded', function () {
    const downloadContent = document.getElementById('download-content');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());

    if (isMobile) {
        // Agregar botón de descarga debajo del QR en dispositivos móviles
        const button = document.createElement('a');
        button.href = "https://drive.google.com/file/d/1BQ6r8Yg8QBJ1XKCZ2_JpYQ4y6CCkwjFR/view?usp=sharing";
        button.className = "download-button";
        button.target = "_blank";
        button.innerText = "Descargar App";
        downloadContent.appendChild(button);
    }
});
