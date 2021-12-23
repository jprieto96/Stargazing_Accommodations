// Find the params that this web page receives
const params = new URLSearchParams(window.location.search)  
const id = params.get('id');

// Element in which I am going to add the bootstrap card of the accommodation with all his details
var element = document.getElementById("container");
// With the name of the item(id variable) I can access to the item
var item = dataJSON[id];

// Add a bootstrap card with all the elements of the item
var elemHTML = '<div class="card text-center border-info mb-3">';

// Start to adding the carousel with bootstrap classes
elemHTML +=  '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">' +
            '<div class="carousel-inner">';

// This is going to be the first active item of the carousel
elemHTML += '<div class="carousel-item active">';
elemHTML += '<img src=' + item.image[0] + ' class="card-img-top" alt=' + item.displayName + '>';
elemHTML += '</div>';

// Iterate the other items to activate them in the carousel
for(var i = 1; i < item.image.length; ++i) {
    elemHTML += '<div class="carousel-item">';
    elemHTML += '<img src=' + item.image[i] + ' class="card-img-top" alt=' + item.displayName + '>';
    elemHTML += '</div>';
}

// Add the rest of the code to have the carousel
elemHTML += '</div>' +
            '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="visually-hidden">Previous</span>' +
            '</button>' +
            '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="visually-hidden">Next</span>' +
            '</button>' +
            '</div>';

elemHTML += '<div class="card-body">';
elemHTML += '<h5 class="card-title">' + item.displayName + '</h5>';
elemHTML += '<p class="card-text">' + item.description + '</p>';
elemHTML += '</div>';
elemHTML += '<ul class="list-group list-group-flush">';
elemHTML += '<li class="list-group-item">' + item.area + '</li>';
elemHTML += '<li class="list-group-item">' + item.facilities + '</li>';
elemHTML += '<li class="list-group-item">' + item.Address + '</li>';
elemHTML += '<li class="list-group-item">' + item.postCode + '</li>';
elemHTML += '<li class="list-group-item">' + item.tags + '</li>';
elemHTML += '<li class="list-group-item">' + item.telephone + '</li>';
elemHTML += '<li class="list-group-item">' + item.openingTimes + '</li>';
elemHTML += '</ul>';
elemHTML += '<div class="card-footer text-muted"><i>' + dataJSON.mainCategory + '</i></div>';
elemHTML += '</div>';

// Introduce the card inside the container element
element.innerHTML = elemHTML;

// Adding the map with the location of the accommodation
var map = L.map('map').setView([item.latLong.lat, item.latLong.lng], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianByaWV0bzk2IiwiYSI6ImNreGlybXM5YTBkZnkycG81a2NobjQxb2MifQ.h2DSVW6ZArdrjImbINVJJw'
}).addTo(map);

var marker = L.marker([item.latLong.lat, item.latLong.lng]).addTo(map);
var popupHTML = "<b>" + item.displayName + "</b><br> <p>" + item.Address + "</p>";
var tooltip = L.tooltip({
    permanent: false
}).setContent("Introduce rating");
marker.bindPopup(popupHTML);
marker.bindTooltip(tooltip);

// Adding the current location of the user with geolocation
L.control.locate().addTo(map);