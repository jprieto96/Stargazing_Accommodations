// Find the params that this web page receives
const params = new URLSearchParams(window.location.search)  
const id = params.get('id');

// Element in which I am going to add the bootstrap card of the accommodation with all his details
var element = document.getElementById("container");
// With the name of the item(id variable) I can access to the item
var item = dataJSON[id][0];

// Add a bootstrap card with all the elements of the item
var elemHTML = '<div class="card text-center border-info mb-3">';
elemHTML += '<img src=' + item.image + ' class="card-img-top" alt=' + item.displayName + '>';
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
elemHTML += '<div class="card-footer text-muted"><i>' + item.ItemID + '</i></div>';
elemHTML += '</div>';

// Introduce the card inside the container element
element.innerHTML = elemHTML;