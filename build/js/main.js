$(function(){
  $('.big__slider').slick();
  $('.nav__slider').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2
  });
  $('.special__slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.article__slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
  });
  if($(window).width() < 993){
    $('.left__menu nav').append( $('.header__contact') );

    $('.burger').click(function(){
      $(this).toggleClass('active')
      $('.left__menu__item').removeClass('open');
      $('.left__menu').fadeToggle(0)
      $('.left__menu').toggleClass('active')
    })  

    $('.left__menu__item').click(function(){
      $(this).toggleClass('open')
    })
    
  }
  if($(window).width() < 768){
    $('.left__menu nav').append( $('.header__nav__list') );
  }
  
  
})

