$(document).ready(function () {
  // menu active
  
  $(".navbar-nav .nav-link").on("click", function(event){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  $.each($('.navbar-nav').find('.nav-item'), function() {
    $(this).toggleClass('active', 
      window.location.pathname.indexOf($(this).find('.nav-link').attr('href')) > -1);
  }); 

  $('.sub-menu, .second-menu').slideUp();

  $(".menu__main i").on("click", function(e) {
    $(this).next().slideToggle(600);
    // console.log($(this).next(3))
    // $('.menu__main > .sub-menu').slideToggle(600);
  });

  $('.navbar-toggler').click(function() {
    $('.push-menu').toggleClass('active-menu');
    $('.overlay-mobile').toggleClass('show-overlay');
  })

  $('.overlay-mobile').click(function() {
    $('.push-menu').toggleClass('active-menu');
    $('.overlay-mobile').toggleClass('show-overlay');
  })
  // setting owl-carousel library

  var menu = $('.menu');
  $(window).scroll(function() {
    if($(this).scrollTop() > 150)
      menu.addClass('sticky');
    else
      menu.removeClass('sticky');
  })

  $('#register-form, #login-form').validate(
    {
      rules: {
        txtName: 'required',
        txtEmail: {
          required: true,
          email: true
        },
        txtPhone: {
          required: true,
          minlength: 10,
          number: true
        },
        txtAddress: 'required'
      },
      messages: {
        txtName: 'Vui lòng nhập Họ tên',
        txtEmail: {
          required: 'Vui lòng nhập Email',
          email: 'Vui lòng nhập Email hợp lệ'
        },
        txtPhone: {
          required: 'Vui lòng nhập Số điện thoại',
          minlength: 'Số điện thoại ít nhất 10 ký tự',
          number: 'Số điện thoại phải là số'
        },
        txtAddress: 'Vui lòng nhập Địa chỉ'
      }
    }
  );

  $('.feature').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $('.nav-tabs .nav-link').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $('#selling-product').owlCarousel({
    loop: true,
    margin: 30,
    autoWidth:true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1,
        autoWidth: false
      },
      576: {
        items: 2,
        autoWidth: false
      },
      992: {
        items: 3
      }
    }
  });

  $('#news-product').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $('#news-product-list').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });

  $('.product-related').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $('#brand').owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  // wow library init
  new WOW().init();
});
