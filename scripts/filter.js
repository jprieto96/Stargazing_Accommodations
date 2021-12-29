$(document).ready(function() {
    $(".filter-fields").on('change', function() {
        // Checker to know if we have to show the no items message or not
        let checker = 0;

        // Get the values of the selects
        let selects = [];
        $('select').filter('.filter-fields').each(function() {
            selects.push($(this).val());
        });
        
        console.log(selects);
        
        // get all the HTML cards
        let cards = $('div').filter('.card-item');

        for(var i = 0; i < cards.length; i++) {
            let card = cards[i];
            let area = $('p').filter(".card-text")[i].innerText.toLowerCase();

            let address = $('li').filter(".address")[i].innerText.toLowerCase();
            let postCode = $('li').filter(".postCode")[i].innerText.toLowerCase();

            // These variables are arrays of facilities and tags for each card
            let facilities = $('li').filter(".facilities")[i].innerText.toLowerCase().split(',');
            let tags = $('li').filter(".tags")[i].innerText.toLowerCase().split(',');

            // Display the cards applyings the filters
            if(((selects[0] == null) || (selects[0] != null && area === selects[0].toLowerCase())) &&
            ((selects[1] == null) || (selects[1] != null && address === selects[1].toLowerCase())) &&
            ((selects[2] == null) || (selects[2] != null && postCode === selects[2].toLowerCase())) &&
            ((selects[3] == null) || (selects[3] != null && arrayContains(facilities, selects[3].toLowerCase()))) &&
            ((selects[4] == null) || (selects[4] != null && arrayContains(tags, selects[4].toLowerCase())))) {
                console.log(card);
                card.style.display = 'block';
                checker++;
            }
            else {
                card.style.display = 'none';
            }
        }

        // Show the error message if we do not have any cards displayed
        if(checker > 0) {
            document.getElementById("no-items").style.display = 'none';
        }
        else {
            document.getElementById("no-items").style.display = 'block';
        }
        
    });
});

function arrayContains(array, d) {
    for(v of array) {
        if(v === d) return true;
    }
}