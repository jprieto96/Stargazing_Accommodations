// Element in which I am going to add the list of accommodations
var cardsElement = document.getElementById("container");

var elemHTML = '';

// Iterate through each element of the JSON to create a bootstrap card for each one
for(var item of dataJSON.itemNames) {
    elemHTML += '<div class="card text-center border-info mb-3">';
    elemHTML += '<img src=' + dataJSON[item][0].image + ' class="card-img-top" alt=' + dataJSON[item][0].displayName + '>';
    elemHTML += '<div class="card-body">';
    elemHTML += '<h5 class="card-title">' + dataJSON[item][0].displayName + '</h5>';
    elemHTML += '<p class="card-text">' + dataJSON[item][0].area + '</p>';
    elemHTML += '</div>';   
    elemHTML += '<ul class="list-group list-group-flush">';
    elemHTML += '<li class="list-group-item">' + dataJSON[item][0].Address + '</li>';
    elemHTML += '<li class="list-group-item">' + dataJSON[item][0].postCode + '</li>';
    elemHTML += '<li class="list-group-item">' + dataJSON[item][0].tags + '</li>';
    elemHTML += '</ul>';
    elemHTML += '<div class="card-body">';
    // I pass the item name to showDetail function
    elemHTML += '<button type="button" onclick=showDetail("' + item + '"); class="btn btn-primary">More details</button>';
    elemHTML += '</div>';
    elemHTML += '<div class="card-footer text-muted"><i>' + dataJSON[item][0].ItemID + '</i></div>';
    elemHTML += '</div>';
    elemHTML += '</div>';
}

// Introduce the list of cards inside the container element
cardsElement.innerHTML = elemHTML;

/* 
    function that is going to be called if the show details message is pressed
    It receives the item name of the accommodation, so that it can then be easily accessed through the JSON 
    The function open a new window, specifically detailpage.html and passes to this webpage a parameter
    that is the item name of the accommodation 
*/
function showDetail(itemName) {
	window.open("detailpage.html?id=" + itemName);
} 