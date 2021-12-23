$(document).ready(function() {
    $(".filter-fields").on('change', function() {
        let filter = $(this).val();
        let cards = $('.card-list');
        console.log(cards);
    });
});