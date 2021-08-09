$('.drawer').on('click',function(){
  $('.drawer__icon').toggleClass('active');
  $('.drawer__content').fadeToggle();
});