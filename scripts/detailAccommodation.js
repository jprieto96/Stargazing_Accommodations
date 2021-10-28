const params = new URLSearchParams(window.location.search)  
const id = params.get('id');

var element = document.getElementById("container");
var item = dataJSON[id][0];

var elemHTML = '<h1 class="container"><i>' + item.displayName + '</i> Accommodation</h1>';
elemHTML += '<div class="card text-center border-info mb-3">';
elemHTML += '<div class="row g-0">';
elemHTML += '<div class="col-md-4">';
elemHTML += '<img src=' + item.image + ' class="img-fluid rounded-start" alt=' + item.displayName + '>';
elemHTML += '</div>';
elemHTML += '<div class="col-md-8">';
elemHTML += '<div class="card-body">';
elemHTML += '<h5 class="card-title">' + item.displayName + '</h5>';
elemHTML += '<p class="card-text">' + item.description + '</p>';
elemHTML += '<p class="card-text">' + item.area + '</p>';
elemHTML += '<p class="card-text">' + item.facilities + '</p>';
elemHTML += '<p class="card-text">' + item.Address + '</p>';
elemHTML += '<p class="card-text">' + item.postCode + '</p>';
elemHTML += '<p class="card-text">' + item.tags + '</p>';
elemHTML += '<p class="card-text">' + item.telephone + '</p>';
elemHTML += '<p class="card-text">' + item.openingTimes + '</p>';
elemHTML += '<p class="card-text"><small class="text-muted">' + item.ItemID + '</small></p>';
elemHTML += '</div>';
elemHTML += '</div>';
elemHTML += '</div>';
elemHTML += '</div>';

element.innerHTML = elemHTML;