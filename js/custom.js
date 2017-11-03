
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



// Dialer toggle scripts

var startTimer;
var totaltime = 20;

$('#call').click(function(){
    if ( $(this).hasClass('call-now') ) {
        $(this).toggleClass('call-now cancel-call');
        $(this).find('i').toggleClass("fa-phone fa-times");
        $('.dialer').toggleClass('hidden');
        var timeleft = totaltime;
        startTimer = setInterval(function(){
        timeleft--;
        $('#dialer-timer').text(timeleft);
        if(timeleft <= 0){
            alert("Your call has timed out !");
            $('.dialer').toggleClass('hidden');
            $('#call').toggleClass('call-now cancel-call');
            $('#call').find('i').toggleClass("fa-phone fa-times");
            $('#dialer-timer').text(totaltime);
            clearInterval(startTimer);
        }
        },1000);
     }
     else{
        $('#call').toggleClass('call-now cancel-call');
        $('#call').find('i').toggleClass("fa-phone fa-times");
        $('.dialer').toggleClass('hidden');
        clearInterval(startTimer);
        $('#dialer-timer').text(totaltime);
     }
})

$('.skip-call').click(function(){
    $('#call').toggleClass('call-now cancel-call');
    $('#call').find('i').toggleClass("fa-phone fa-times");
    $('.dialer').toggleClass('hidden');
    clearInterval(startTimer);
    $('#dialer-timer').text(totaltime);
})

// Contact history toggle scripts
$('.contact-button').click(function(){
    $('.dialer').removeClass('hidden').addClass('hidden');
    $('#call').removeClass('cancel-call').addClass('call-now');
    $('#call').find('i').removeClass("fa-times").addClass('fa-phone');
    clearInterval(startTimer);
    $(this).parents('.modal-content').find('.userinfo-xl,.modal-footer,.add-comment').hide();
    $(this).parents('.modal-content').find('.contact-history').toggleClass('active');
    $('.toggle-contactRecord').show();
});

$('.toggle-contactRecord').click(function(){
    $(this).hide();
    $('.userinfo-xl,.modal-footer,.add-comment').show();
    $('.contact-history').toggleClass('active');
});

// Slick Slider scripts
$('.slick-slides').slick({
        dots: true,
        slidesPerRow: 4, 
        rows: 3,
});