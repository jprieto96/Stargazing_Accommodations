var element = document.getElementById("container");
var elemHTML =  '<h1 id="home-title"><i>Discover our new Accommodations</i></h1>' +
                '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">' +
                '<div class="carousel-inner">';

var firstActiveItem = dataJSON.itemNames[0];
elemHTML += '<div class="carousel-item active">';
elemHTML += '<img src=' + dataJSON[firstActiveItem][0].image + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[firstActiveItem][0].displayName + '>';
elemHTML += '</div>';

for(var item of dataJSON.itemNames) {
    if(item != firstActiveItem) {
        elemHTML += '<div class="carousel-item">';
        elemHTML += '<img src=' + dataJSON[item][0].image + ' class="d-block w-100" width="150px" height="572px" alt=' + dataJSON[item][0].displayName + '>';
        elemHTML += '</div>';
    }
}

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

element.innerHTML = elemHTML;