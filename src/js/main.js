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
    slidesToScroll: 1
  });
  $('.article__slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1
  });
  
})