/// StickNav
var stickyNavTop = $('.nav').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop &gt; stickyNavTop) {
$('.nav').addClass('isStuck');
} else {
$('.nav').removeClass('isStuck');
}
};
stickyNav();
$(window).scroll(function() {
stickyNav();
});