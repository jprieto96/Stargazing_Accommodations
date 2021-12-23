// Element in which I am going to add the list of accommodations
let cardsElement = document.getElementById("container");

let elemHTML = '';

// Adding the FILTER MENU
elemHTML += '<div class="card-body px-3 px-md-5">';
elemHTML += '<div class="card mb-3">';
elemHTML += '<div class="card-header">';
elemHTML += '<h6><span>Filters</span></h6>';
elemHTML += '</div>';
elemHTML += '<div class="card-body">';

// Get the values for each field to filter
let valuesToFilter = getAllValuesToFilter();

// Create dynamically the select with all the possible options to filter
// The array filter fields contains in the first position the key (field) ant the second
// position contains how we are going to display the name of this field
for(let field of dataJSON.filterFields) {
    elemHTML += '<select class="filter-fields form-select form-select-sm" aria-label=".form-select-sm example" name=' + field[0] +' id=' + field[0] + '>';
    elemHTML += '<option selected disabled>Select the ' + field[1] + '</option>'
    for(let v of valuesToFilter[field[0]]) {
        elemHTML += '<option value="' + v + '">' + v + '</option>'
    }
    elemHTML += '</select>';
}

elemHTML += '<br>';
elemHTML += '<button id="reset-btn" type="button" onclick="resetSelects()" class="btn btn-primary">Reset</button>';
elemHTML += '</div>';
elemHTML += '</div>';
elemHTML += '</div>';
elemHTML += '</div>';

// Iterate through each element of the JSON to create a bootstrap card for each one
elemHTML += '<div class="card-list">';
for(let item of dataJSON.itemNames) {
    elemHTML += '<div class="card text-center border-info mb-3">';
    // For the list page I just show the first image of each element of the list
    elemHTML += '<img src=' + dataJSON[item].image[0] + ' class="card-img-top" alt=' + dataJSON[item].displayName + '>';
    elemHTML += '<div class="card-body">';
    elemHTML += '<h5 id="displayName" class="card-title">' + dataJSON[item].displayName + '</h5>';
    elemHTML += '<p id="area" class="card-text">' + dataJSON[item].area + '</p>';
    elemHTML += '</div>';   
    elemHTML += '<ul class="list-group list-group-flush">';
    elemHTML += '<li class="list-group-item">' + dataJSON[item].Address + '</li>';
    elemHTML += '<li class="list-group-item">' + dataJSON[item].postCode + '</li>';
    elemHTML += '<li class="list-group-item">' + dataJSON[item].tags + '</li>';
    elemHTML += '</ul>';
    elemHTML += '<div class="card-body">';
    // I pass the item name to showDetail function
    elemHTML += '<button type="button" onclick=showDetail("' + item + '"); class="btn btn-primary">More details</button>';
    elemHTML += '</div>';
    elemHTML += '<div class="card-footer text-muted"><i>' + dataJSON.mainCategory + '</i></div>';
    elemHTML += '</div>';
}
elemHTML += '</div>';

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

/*
    Function that allows us to obtain an array of pairs (key, value) in which the key is
    each field that we want to filter and the value is an array of all possible elements
    by which it will be possible to filter
*/
function getAllValuesToFilter() {
    
    // It is a dictionary that allows us to know for which field each array of values is
    let allValuesToFilter = new Object();

    // Get areas to filter
    let areaSet = new Set();
    for(let item of dataJSON.itemNames) {
        areaSet.add(dataJSON[item].area.toLowerCase());
    }

    allValuesToFilter["area"] = Array.from(areaSet);

    // Get addresses to filter
    let addressesSet = new Set();
    for(let item of dataJSON.itemNames) {
        addressesSet.add(dataJSON[item].Address.toLowerCase());
    }

    allValuesToFilter["Address"] = Array.from(addressesSet);

    // Get post codes to filter
    let postCodesSet = new Set();
    for(let item of dataJSON.itemNames) {
        postCodesSet.add(dataJSON[item].postCode.toLowerCase());
    }

    allValuesToFilter["postCode"] = Array.from(postCodesSet);

    // Get facilities to filter
    let facilitiesSet = new Set();
    for(let item of dataJSON.itemNames) {
        for(let facility of dataJSON[item].facilities) {
            facilitiesSet.add(facility.toLowerCase());
        }
    }

    allValuesToFilter["facilities"] = Array.from(facilitiesSet);

    // Get tags to filter
    let tagsSet = new Set();
    for(let item of dataJSON.itemNames) {
        for(let tag of dataJSON[item].tags) {
            tagsSet.add(tag.toLowerCase());
        }
    }

    allValuesToFilter["tags"] = Array.from(tagsSet);

    return allValuesToFilter;
}

// Function to reset the filters
function resetSelects() {
    for(let field of dataJSON.filterFields) {
        let id = field[0];
        $('#' + id).val($('#' + id + ' option:first').val());
    }
}