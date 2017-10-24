
// Left panel toggle scripts

$('.expand-nav').click(function(){
    $('.expand-nav').not(this).parent('.panel-heading').removeClass("open");
    $(this).parent('.panel-heading').toggleClass('open');
    $('.expand-nav').not(this).find('i').removeClass("fa-angle-up open").addClass("fa-angle-down");
    $(this).find('i').toggleClass("fa-angle-down fa-angle-up");
})


//Contact-card toggle scripts
$('.contact-card').click(function(){
    $('#contact-card-xl').modal('show');
    }).find('.contact-btns').click(function(){
        return false;
});
