
// Left panel toggle scripts

$('.panel-heading').click(function(){
    $('.panel-heading').removeClass("open");
    $(this).toggleClass('open');
    $('.panel-heading').not(this).find('i').removeClass("fa-angle-up open").addClass("fa-angle-down");
    $(this).find('i').toggleClass("fa-angle-down fa-angle-up");
})
