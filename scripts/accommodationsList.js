var cardsElement = document.getElementById("container");

var elemHTML = '';

for(var item of dataJSON.itemNames) {
    elemHTML += '<div class="card text-center border-info mb-3">';
    elemHTML += '<div class="card-header">Stargazing Accommodation</div>';
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
    elemHTML += '<button type="button" onclick=showDetail("' + item + '"); class="btn btn-primary">More details</button>';
    elemHTML += '</div>';
    elemHTML += '<div class="card-footer text-muted"><i>' + dataJSON[item][0].ItemID + '</i></div>';
    elemHTML += '</div>';
    elemHTML += '</div>';
}

cardsElement.innerHTML = elemHTML;

function showDetail(id) {
	window.open("detailpage.html?id=" + id);
} 