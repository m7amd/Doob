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


// Scroll To Element 

const headerLinks = document.querySelectorAll(".header nav a");

headerLinks.forEach((item) => {

  item.addEventListener('click', (e) => {

    e.preventDefault();
    
    let ele = document.getElementById(item.getAttribute("data-scroll"));

    ele.scrollIntoView({
      behavior : "smooth",
    });

  });

});

const footerLinks = document.querySelectorAll(".footer .links a");

footerLinks.forEach((item) => {

  item.addEventListener('click', (e) => {

    e.preventDefault();
    
    let ele = document.getElementById(item.getAttribute("data-scroll"));

    ele.scrollIntoView({
      behavior : "smooth",
    });

  });

});

// INITIALIZE AOS
AOS.init();

// INITIALIZE niceScroll

$( () => {
  // $("body").niceScroll({
  //   touchbhavior: true,
  //   zindex: '999999',
  //   scrollspeed: '0', // 30
  //   cursorcolor:"#314584",
  //   background:"#ecf0f1",
  //   cursorborder:"1px solid #314584",
  //   cursorborderradius: '4px',
  //   cursorwidth:"8px",
  // });
    // Toggle Humbrger menu
    // $('nav.show').css('opacity','0')
});

