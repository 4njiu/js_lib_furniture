document.addEventListener('DOMContentLoaded', function() {
    //glide.js
    new Glide('.glide').mount();

    // AOS
    AOS.init();

    //leaflet
    var map = L.map('map').setView([43.651070, -79.347015], 13); // Toronto coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([43.651070, -79.347015]).addTo(map)
        .bindPopup('Our Furniture Store Location in Toronto')
        .openPopup();

    //anime.js
    anime({
        targets: '#footer',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 500
    });

    // nav bar
    anime({
        targets: '#nav ul li',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(100)
    });
});
