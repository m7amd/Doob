window.onload = () => {
  this.scrollTo ({
    top: 0
  })
}

// Toggle Humberger Menu 
function myFunction() {

  let nav = document.querySelector(".show");

  if (nav.style.opacity === "0") {

    nav.style.opacity = "1";

  } else {

    nav.style.opacity = "0";

  }
}

// Scroll To Top button

let scrollToTop = document.querySelector('.to-top');

window.onscroll = () => {

  if (this.scrollY >= 1300) {

    scrollToTop.classList.add('show');

  } else {

    scrollToTop.classList.remove('show');

  }

}

scrollToTop.onclick = () => {
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