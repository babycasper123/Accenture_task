
// Left panel toggle scripts

$('.expand-nav').click(function(){
    $('.expand-nav').removeClass("open");
    $(this).toggleClass('open');
    $('.expand-nav').not(this).find('i').removeClass("fa-angle-up open").addClass("fa-angle-down");
    $(this).find('i').toggleClass("fa-angle-down fa-angle-up");
})

$('.contact-card').click(function(){
				$('#myModal').modal('show');
				}).find('.contact-btns').click(function(e){
					return false;
});
