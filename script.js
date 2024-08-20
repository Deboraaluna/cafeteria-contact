// Coordenadas 
const centerLat = -22.9068;
const centerLng = -43.1729;

// Inicializador
const map = L.map('map').setView([centerLat, centerLng], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//marcador
let marker = L.marker([centerLat, centerLng]).addTo(map);

function updateMarker(lat, lng) {
    marker.setLatLng([lat, lng]); 
    map.setView([lat, lng], 13); 
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    //latitude e longitude
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);

    if (!isNaN(lat) && !isNaN(lng)) {
        updateMarker(lat, lng); // Atualiza
    } else {
        alert('Por favor, insira coordenadas válidas, hehe.');
    }
});
