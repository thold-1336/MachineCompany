$(document).ready(function () {
  // setting owl-carousel library
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

  $('#news-product').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
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
