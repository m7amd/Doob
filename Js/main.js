// Scroll To Top button

let scrollToTop = document.querySelector('.to-top');

window.onscroll = () => {

  if (this.scrollY >= 1300) {

    scrollToTop.classList.add('show');

  } else {

    scrollToTop.classList.remove('show');

  }

}

scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


// jQuery

$(document).ready(function () {

  // smooth scroll 

  $('.header nav a').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1100);

  });

  $('.footer .links a').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1100);

  });
  
});