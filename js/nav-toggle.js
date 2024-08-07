$(function() {

  /* nav toggle */
$('#nav_toggle').on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $('#nav').toggleClass("active");
});

/* collapse */
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data("collapse");

    $(blockId).slideToggle();
});

});