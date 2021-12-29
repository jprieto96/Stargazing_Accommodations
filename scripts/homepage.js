// Adding the map with the location of the accommodation
var map = L.map('map').setView([54.982483013361296, -2.923691560172237], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianByaWV0bzk2IiwiYSI6ImNreGlybXM5YTBkZnkycG81a2NobjQxb2MifQ.h2DSVW6ZArdrjImbINVJJw'
}).addTo(map);

// Adding markers for each accommodation
for(var item of dataJSON.itemNames) {
    var marker = L.marker([dataJSON[item].latLong.lat, dataJSON[item].latLong.lng]).addTo(map);
    var popupHTML = '<div class="container">';
    popupHTML += '<p><b>' + dataJSON[item].displayName + '</b></p>';

    var ls = JSON.parse(localStorage.getItem("ratingSystem_" + dataJSON[item].displayName));
    // If we have reviews, we show the number of reviews we have
    if(ls != null) {
        popupHTML += '<p>' + ls.reviews.length + ' reviews</p>';
        popupHTML += '<p>' + getRating(ls.averageRating) + '</p>';
    }
    else {
        popupHTML += '<p>0 reviews</p>';
        popupHTML += '<p>' + getRating(dataJSON[item].averageRating) + '</p>';
    }
    
    popupHTML += '<button type="button" onclick=showDetail("' + item + '"); class="btn btn-primary">More details</button>'
    var tooltip = L.tooltip({
        permanent: false
    }).setContent(dataJSON[item].Address);

    marker.bindPopup(popupHTML);
    marker.bindTooltip(tooltip);
}

// Adding the current location of the user with geolocation
L.control.locate().addTo(map);

// Add fullscreen mode
map.addControl(new L.Control.Fullscreen());

// Element in which I am going to add a carousel
var element = document.getElementById("container");

// Start to adding the carousel with bootstrap classes
var elemHTML =  '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">' +
                '<div class="carousel-inner">';

// This is going to be the first active item of the carousel
var firstActiveItem = dataJSON.itemNames[0];
elemHTML += '<div class="carousel-item active">';
elemHTML += '<img src=' + dataJSON[firstActiveItem].image[0] + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[firstActiveItem].displayName + '>';
elemHTML += '</div>';

// Iterate the other items to activate them in the carousel
for(var item of dataJSON.itemNames) {
    for(var i = 0; i < dataJSON[item].image.length; ++i) {
        if(i == 0 && item == firstActiveItem) ++i;
        elemHTML += '<div class="carousel-item">';
        elemHTML += '<img src=' + dataJSON[item].image[i] + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[item].displayName + '>';
        elemHTML += '</div>';
    }
}

// Add the rest of the code to have the carousel
elemHTML += '</div>' +
            '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '</button>' +
            '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '</button>' +
            '</div>';

// Introduce the carousel inside the container
element.innerHTML = elemHTML;

// function that puts the stars corresponding to the rating
function getRating(rating) {
    ratingHTML = '';
    console.log(rating);
    switch(rating) {
        case 0: ratingHTML = '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                break;
        case 1: ratingHTML = '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                break;
        case 2: ratingHTML = '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                break;
        case 3: ratingHTML = '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                break;
        case 4: ratingHTML = '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                break;
        case 5: ratingHTML = '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                ratingHTML += '<span class="fa fa-star checked"></span>';
                break;
        default:
                ratingHTML = '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
                ratingHTML += '<span class="fa fa-star"></span>';
    }

    return ratingHTML;
}

/* 
    function that is going to be called if the show details message is pressed
    It receives the item name of the accommodation, so that it can then be easily accessed through the JSON 
    The function open a new window, specifically detailpage.html and passes to this webpage a parameter
    that is the item name of the accommodation 
*/
function showDetail(itemName) {
	window.open("detailpage.html?id=" + itemName);
} 