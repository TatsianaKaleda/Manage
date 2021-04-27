$(document).ready(function(){
    $('.uk-search-input').focus(function () {
        $('.uk-search-icon').css('display', 'none');
    });

    $('.uk-search-input').blur(function () {
        $('.uk-search-icon').css('display', 'inline-flex');
    });
});