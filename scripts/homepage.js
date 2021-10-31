// Element in which I am going to add a carousel
var element = document.getElementById("container");

// Start to adding the carousel with bootstrap classes
var elemHTML =  '<h1 id="home-title"><i>Discover our new Accommodations</i></h1>' +
                '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">' +
                '<div class="carousel-inner">';

// This is going to be the first active item of the carousel
var firstActiveItem = dataJSON.itemNames[0];
elemHTML += '<div class="carousel-item active">';
elemHTML += '<img src=' + dataJSON[firstActiveItem][0].image + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[firstActiveItem][0].displayName + '>';
elemHTML += '</div>';

// Iterate the other items to activate them in the carousel
for(var item of dataJSON.itemNames) {
    if(item != firstActiveItem) {
        elemHTML += '<div class="carousel-item">';
        elemHTML += '<img src=' + dataJSON[item][0].image + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[item][0].displayName + '>';
        elemHTML += '</div>';
    }
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

// Introduce the carousel inside the container
element.innerHTML = elemHTML;