
// Left panel toggle scripts

$('.panel-heading').click(function(){
    $('.panel-heading').removeClass("open");
    $(this).toggleClass('open');
})

$(".panel-heading").mouseenter(function() {
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    $('.panel-collapse').removeClass('in');
    $(this).closest(".panel").children('.panel-collapse').toggleClass('in');
});
$( ".panel").mouseleave(function() {
    $(".panel-heading").find('i').removeClass('fa-angle-up');
    $(".panel-heading").find('i').addClass('fa-angle-down');
    $('.panel-collapse').removeClass('in');
});