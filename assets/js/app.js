const initSliders = () => {
  if ($(".advantages__slider ").length > 0) {
    new Swiper(".advantages__slider", {
      slidesPerView: 1.3,
      centeredSlides: true,
      roundLengths: true,
      speed: 600,
      slideToClickedSlide: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        840: {
          slidesPerView: 1.3,
        },
        1300: {
          slidesPerView: 'auto',
        },
      },
    });
  }
}


function initHeader() {
  function closeAll() {
    $('.consultation').removeClass('show')
    $('.burger').removeClass('active')
    $('.header__center').removeClass('show')
    $('.window').fadeOut()
    $('html').removeClass('fix')
  }

  $('.burger').click(function (event) {
      event.preventDefault()
      $('.header__center').toggleClass('show')
      $(this).toggleClass('active')
      $('.window').fadeToggle()
      $('html').toggleClass('fix')
      $('.consultation').removeClass('show')
    }
  )
  $('.window').click(function (e) {
      e.preventDefault()
      if (e.target.classList.contains('window')) {
        closeAll()
      }
    }
  )

  $('.header nav a').click(function (e) {
    e.preventDefault()
    closeAll()
  })

  var header = $('.header'), scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 350 && scrolled > scrollPrev) {
      header.addClass('out');
      header.removeClass('active');
    } else {
      header.removeClass('out');
      header.addClass('active');
    }

    if (scrolled < 350) {
      header.removeClass('out');
      header.removeClass('active');
    }

    scrollPrev = scrolled;
  });

  function goTo() {
    const mobOffset = window.screen.width < 1000 ? 50 : 0
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - mobOffset + "px"
    }, {
      duration: 800,
      easing: "swing"
    });
    return false;
  }

  $('.goTo').click(function (e) {
    e.preventDefault()
    goTo.apply(this)
  })
}

// INIT
$(document).ready(function () {
  // $('#datetimepicker').datetimepicker();
  $("#datetimepicker").flatpickr({
    enableTime: true,
    minTime: "09:00"
  });

  // $(".phone").mask("+7 (999) 99-99-999");
  // Sliders
  initSliders()
  initHeader()

  $('.consultation-open').click((e) => {
    e.preventDefault()
    $('.consultation').addClass('show')
    $('.window').fadeIn()
    $('html').addClass('fix')
  })
})



