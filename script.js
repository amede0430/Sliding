$(document).ready(function() {
    $('.start-btn').click(function() {
        $('.start-btn').toggleClass('show-modal');
        $('.modal-box').toggleClass('show-modal');

    });
    $('.fa-times').click(function() {
        $('.modal-box').toggleClass('show-modal');
        $('.start-btn').toggleClass('show-modal');
    });
});