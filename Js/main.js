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

// Form Validate

let form = document.querySelector('form'),
statusTxt = form.querySelector(".send-btn span");

form.onsubmit = (e) => {

  e.preventDefault();
  statusTxt.style.color = "#FF3946";
  statusTxt.style.display = "inline-block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/form.php", true);
  xhr.onload = () => {

    if (xhr.readyState === 4 && xhr.status == 200) {

      let response = xhr.response;
      if (response.indexOf("Email Field, is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!")) {

        statusTxt.style.color = "red";

      } else {

        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000) 
      }
      statusTxt.innerText = response;
    }

  }
  let formData = new FormData(form);
  xhr.send(formData);
};

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
    $('#toggle').on('click', function(){
        $(this).toggleClass('show');
      return false;
    });
});

