var map = L.map('map').setView([59.962488, 10.730274], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);



L.marker([59.962488, 10.730274])
    .addTo(map)
    .bindPopup("Oslo")
    .openPopup();