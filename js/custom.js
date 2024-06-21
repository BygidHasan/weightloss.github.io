$('.testi-carousal').slick({
  // dots: true,
  infinite: true,
  //autoplay: true,
  navigator: true,
  nextArrow: '<i class="fa fa-angle-right"></i>',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$('.product-carousal').slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-nav'
});
$('.product-nav').slick({
  slidesToShow: 6,
  infinite: true,
  slidesToScroll: 1,
  vertical:true,
  asNavFor: '.product-carousal',
  dots: false,
  focusOnSelect: true,
  verticalSwiping:true,
  responsive: [
  {
      breakpoint: 991,
      settings: {
        vertical: false,
        slidesToShow: 6,
      }
  },
  {
    breakpoint: 768,
    settings: {
      vertical: false,
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 767,
    settings: {
      vertical: false,
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 380,
    settings: {
      vertical: false,
      slidesToShow: 6,
    }
  }
  ]
});


$(document).ready(function () {
  $('.faq-acc-list > li > .faq-ans').hide();

  $('.faq-acc-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".faq-ans").slideUp();
    } else {
      $(".faq-acc-list > li.active .faq-ans").slideUp();
      $(".faq-acc-list > li.active").removeClass("active");
      $(this).addClass("active").find(".faq-ans").slideDown();
    }
    return false;
  });

});

$(document).ready(function() {
  $.each($('.navbar-nav').find('li'), function() {
    $(this).toggleClass('active', 
        window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
}); 
});

$(document).ready(function(){
  $( ".navbar.navbar-expand-lg li.nav-item.active a" ).append( "<span></span>" );
});
