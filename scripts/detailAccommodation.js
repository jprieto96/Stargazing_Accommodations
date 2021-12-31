var ratedStars = 0;

// Find the params that this web page receives
const params = new URLSearchParams(window.location.search)  
const id = params.get('id');

// Element in which I am going to add the bootstrap card of the accommodation with all his details
var element = document.querySelector(".card-container");
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
            '</button>' +
            '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
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
var map = L.map('map').setView([item.latLong.lat, item.latLong.lng], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianByaWV0bzk2IiwiYSI6ImNreGlybXM5YTBkZnkycG81a2NobjQxb2MifQ.h2DSVW6ZArdrjImbINVJJw'
}).addTo(map);

var marker = L.marker([item.latLong.lat, item.latLong.lng]).addTo(map);

var tooltip = L.tooltip({
    permanent: false
}).setContent(item.Address);

marker.bindTooltip(tooltip);

// Adding the current location of the user with geolocation
L.control.locate().addTo(map);

// Add fullscreen mode
map.addControl(new L.Control.Fullscreen());

// Element in which I am going to add the bootstrap card of the accommodation with all his details
var review_element = document.querySelector(".review-container");
var ls = JSON.parse(localStorage.getItem("ratingSystem_" + item.displayName));

var review_HTML = '<div class="row justify-content-center mx-0 mx-md-auto">';
review_HTML += '<div class="col-lg-10 col-md-11 px-1 px-sm-2">';
review_HTML += '<div class="card border-0 px-3">';
review_HTML += '<div class="d-flex row py-5 px-5 bg-light">';
review_HTML += '<div id="tabOverallRating" class="p-2 px-3 mx-2">';
review_HTML += '<p class="sm-text mb-0">OVERALL RATING</p>';
if(ls != null) {
        review_HTML += '<h4>' + ls.averageRating.toFixed(2) + '</h4>';
}
else {
        review_HTML += '<h4>' + item.averageRating + '</h4>';
}
review_HTML += '</div>';
review_HTML += '<div class="white-tab p-2 mx-2 text-muted">';
review_HTML += '<p class="sm-text mb-0">ALL REVIEWS</p>';

var reviews = [];
// Get from the local storage the reviews
if(ls != null) {
        reviews = ls.reviews;
}

review_HTML += '<h4>' + reviews.length + '</h4>';
review_HTML += '</div>';
review_HTML += '<div class="white-tab p-2 mx-2">';
review_HTML += '<p class="sm-text mb-0 text-muted">VERY POSITIVE REVIEWS</p>';

var positiveReviews = 0;
for(var i = 0; i < reviews.length; i++) {
        if(reviews[i].stars > 3) ++positiveReviews;
}

var per = 0;
if(reviews.length > 0) per = (positiveReviews / reviews.length) * 100;

review_HTML += '<h4 id="textPositiveReviews">' + per.toFixed() + '%</h4>';
review_HTML += '</div>';
review_HTML += '<div class="ml-md-auto p-2 mx-md-2 pt-4 pt-md-3"> <button id="writeReviewButton" class="btn btn-blue px-4 review-trigger">WRITE A REVIEW</button> </div>';
review_HTML += '</div>';

console.log(reviews);
// Show all the reviews stored on the local storage
if(ls != null && reviews.length > 0) {
        for(var i = 0; i < reviews.length; i++) {
                review_HTML += '<div class="review p-5">';
                review_HTML += '<div class="row d-flex">';
                review_HTML += '<div class="profile-pic"></div>';
                review_HTML += '<div class="d-flex flex-column pl-3">';
                review_HTML += '<h4>' + reviews[i].user + '</h4>';
                review_HTML += '</div>';
                review_HTML += '</div>';
                review_HTML += '<div class="row pb-3">';
                review_HTML += getRating(reviews[i].stars);
                review_HTML += '</div>';
                review_HTML += '<div class="row pb-3">';
                review_HTML += '<p>' + reviews[i].review + '</p>';
                review_HTML += '</div>';
                review_HTML += '</div>';
        } 
        review_HTML += '</div>';
        review_HTML += '</div>';
        review_HTML += '</div>';
        review_HTML += '</div>';
        review_HTML += '</div>';
}

review_element.innerHTML = review_HTML;

// if we have data received from the server we show it in the modal
var lsDataReceived = localStorage.getItem("dataReceived");
var m  = document.getElementById("myModal");
var textReceived = document.getElementById("textReceived");
if(lsDataReceived != null) {
        var jsonData = JSON.parse(lsDataReceived);
        var item = jsonData.item;
        var user = jsonData.user;
        var rating = jsonData.stars;
        var review = jsonData.review;
        textReceived.innerHTML = '<h4>Data received from the server</h4>'
                        + '<p><b><i>' + user + '</b></i> has rated <b><i>' + item + '</b></i> with <b><i>' + rating + '</b></i> stars and with the following review: <b><i>' + review + '</b></i></p>';
        m.style.display = "block";
        localStorage.removeItem("dataReceived");
}

// Get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
        m.style.display = "none";
}

var averageRating = 0;
if(ls != null) {
        averageRating = ls.averageRating;
}
else { 
        averageRating = item.averageRating;
}

if(averageRating >= 3.5) $("#tabOverallRating").addClass('green-tab');
else if(averageRating >= 2.5 ) $("#tabOverallRating").addClass('yellow-tab');
else $("#tabOverallRating").addClass('red-tab');

if(per >= 75) $("#textPositiveReviews").addClass('green-text');
else if(per >= 50) $("#textPositiveReviews").addClass('yellow-text');
else $("#textPositiveReviews").addClass('red-text');

for(var i = 0; i < reviews.length; i++) {
        $(".profile-pic")[i].style.backgroundColor = getRandomColor();
}

// Get the modal
var modal = document.getElementById("reviewModal");

// Get the button that opens the modal
var reviewBtn = document.getElementById("writeReviewButton");

var btnSendReview = document.getElementById("sendReview");

// Get the <span> element that closes the modal
var spanCloseModal = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
spanCloseModal.onclick = function() {
        modal.style.display = "none";
}

// When the user clicks on the button, open the modal
reviewBtn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
        else if (event.target == m) {
                m.style.display = "none";
        }
}

function oneStar() {
        ratedStars = 1;
}

function twoStars() {
        ratedStars = 2;
}

function threeStars() {
        ratedStars = 3;
}

function fourStars() {
        ratedStars = 4;
}

function fiveStars() {
        ratedStars = 5;
}

function makePost() {
        var user = document.querySelector(".username").value;
        var stars = ratedStars;
        var review = document.querySelector("textarea").value;
        var ratings = JSON.parse(localStorage.getItem("ratingSystem_" + item.displayName));

        if(user != "" && review != "") {
                if(ratings == null) {;
                        ratings = {"averageRating": stars, "reviews": [{ 'user': user, 'stars': stars, 'review': review }]};
                }
                else {
                        ratings.averageRating = (ratings.averageRating + stars) / 2;
                        ratings.reviews.push({ 'user': user, 'stars': stars, 'review': review });
                }
        
                localStorage.setItem("ratingSystem_" + item.displayName, JSON.stringify(ratings));

                var dataTosend = { 'item': item.displayName, 'user': user, 'stars': stars, 'review': review }

                localStorage.setItem("dataReceived", JSON.stringify(dataTosend));
        
                const sendPosrtToServer = async () => {
                        return await $.ajax({
                                type: "POST",
                                url: "https://pedro.cs.herts.ac.uk/mm18afv/public/aws/submitReview.php",
                                data: dataTosend,
                                dataType: "json"
                        });
                } 

                sendPosrtToServer.then(response => localStorage.setItem("dataReceived", response));
        
                modal.style.display = "none";
        }

        
}

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

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