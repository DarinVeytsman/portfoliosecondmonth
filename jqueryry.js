
// $('.menu-btn').on('click', function(el) {
// el.preventDefault;
// $(this).toggleClass('menu-btn_active');
// $('.nav__list_link').toggleClass('nav__list_link_active');

// });





window.addEventListener('scroll', () => {
    if($('.js-btn-top').offset().top>1000){
        $('.js-btn-top').removeClass('hidden');
        $('.js-btn-top').addClass('show');
    }
    else{
        $('.js-btn-top').removeClass('show');
        $('.js-btn-top').addClass('hidden');
    }
});
    


$('.menu-btn').on('click', function(el) {
    el.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.nav__list_link').toggleClass('nav__list_link_active');
    
    });
    

   
   
   
