$(function(){

  $('.tovar__slider__main').slick({
    arrows: false,
    fade: true,
    asNavFor: '.tovar__slider__nav'
  });
  
  $('.tovar__slider__nav').slick({
    slidesToShow: 4,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.tovar__slider__main'
  });

  $('.big__slider').slick();

  $('.nav__slider').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2
  });

  $('.special__slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  if($(window).width() < 993){
    $('.left__menu nav').append( $('.header__contact') );

    $('.burger').click(function(){
      $(this).toggleClass('active')
      $('body').toggleClass('hidden')
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
  
  $('.tabs__item').click(function(){
    $('.tabs__item').removeClass('active')
    $(this).addClass('active')
  })
  $('#tab1').click(function(){
    $('.tabs__content').fadeOut(200)
    function sayHi() {
      $('#for1').fadeIn()
    }
    setTimeout(sayHi, 200);
    
  })
  $('#tab2').click(function(){
    $('.tabs__content').fadeOut(200)
    function sayHi2() {
      $('#for2').fadeIn()
    }
    setTimeout(sayHi2, 200);
  })
  $('.login').click(function(){
    $('.modal1').fadeIn()
    $('.modal1').addClass('active')
  })
  $('.modal1 .modal-close').click(function(){
    $('.modal1').fadeOut(100)
    function sayHi3() {
      $('.modal1').removeClass('active')
    }
    setTimeout(sayHi3, 100);
  })
  $('.modal1').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal1 .wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.modal1').fadeOut(100)
          function sayHi3() {
            $('.modal1').removeClass('active')
          }
          setTimeout(sayHi3, 100);
		}
  });
  $('.special__action__left').click(function(){
    $('.modal__one').fadeIn()
    $('.modal__one').addClass('active')
  })
  $('.modal-close').click(function(){
    $('.modal__one').fadeOut(100)
    function sayHi3() {
      $('.modal__one').removeClass('active')
    }
    setTimeout(sayHi3, 100);
  })
  $('.modal__one').mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal__one .wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.modal__one').fadeOut(100)
          function sayHi3() {
            $('.modal__one').removeClass('active')
          }
          setTimeout(sayHi3, 100);
		}
  });
  $('.filter__top__left').on('touchstart', function () {
    $('.filter__top__right').slideToggle()
  })
})

