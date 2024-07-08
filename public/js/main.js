document.addEventListener('DOMContentLoaded', function() {
    // Initialize Glide.js
    new Glide('.glide').mount();

    // Initialize AOS
    AOS.init();

    // Initialize Leaflet map centered at Toronto
    var map = L.map('map').setView([43.651070, -79.347015], 13); // Toronto coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([43.651070, -79.347015]).addTo(map)
        .bindPopup('Our Furniture Store Location in Toronto')
        .openPopup();

    // Animate footer with Anime.js
    anime({
        targets: '#footer',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 500
    });

    // Animate navigation bar links
    anime({
        targets: '#nav ul li',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(100)
    });
});
