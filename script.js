$(function(){

  // $('.burger-btn').on('click',function(){
  //   $('.burger-btn').toggleClass('close');
  //   $('.b-nav-wrapper').fadeToggle(500);
  // });

  // $('.nav-a').on('click',function(){
  //   $('.burger-btn').toggleClass('close');
  //   $('.b-nav-wrapper').fadeToggle(500);
  // });

  $('.burger-btn').click(function(){
    if($('.burger-btn').hasClass('close')){
      $('.burger-btn').removeClass('close');
      $(this).removeClass('open');
      $('.b-nav-wrapper').fadeOut();
    }else{
      $('.burger-btn').addClass('close');
      $(this).addClass('close');
      $('.b-nav-wrapper').fadeIn();
    }
  });

  $('.nav-a').click(function(){
    if($('.burger-btn').hasClass('close')){
      $('.burger-btn').removeClass('close');
      $(this).removeClass('open');
      $('.b-nav-wrapper').fadeOut();
    }else{
      $('.burger-btn').addClass('close');
      $(this).addClass('close');
      $('.b-nav-wrapper').fadeIn();
    }
  });

});
