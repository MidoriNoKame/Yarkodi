$(function() {

  /* nav toggle */

$('#nav_toggle').on("click", function(event) {
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav');

    event.preventDefault();

    $(this).toggleClass("active");
    $('#nav').toggleClass("active");


    //без jquery, потому что так надо
    if (nav.classList.contains('active')) {
        header.style.position = 'fixed';
        header.classList.add('header-bg-active');
    } else {
        header.style.position = 'absolute';
        header.classList.remove('header-bg-active');
    }
});

/* collapse */
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data("collapse");

    $(blockId).slideToggle();
});

});