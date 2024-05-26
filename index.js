//Click Underline on NavBar
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#nav-mobile .nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(nav => nav.classList.remove('active-link'));
          this.classList.add('active-link');
      });
  });
});

// Nav Scroll
document.addEventListener("DOMContentLoaded", function() {
  
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
      link.addEventListener("click", function(event) {
          // Prevent default anchor click behavior
          event.preventDefault();

          
          const targetID = this.getAttribute("href");
          const targetElement = document.querySelector(targetID);

          // Scroll to the target element
          targetElement.scrollIntoView({
              behavior: "smooth"
          });
      });
  }

    $('.sidenav').sidenav({
      edge: 'right'
    });
    //Will Close after an item is clicked
    $('#mobile-demo li a').on('click', function(){
      $('.sidenav').sidenav('close');
  });
});


// For Slider
var sliderCounter = 0;
var sliderContent = [
  "I Am Bryce Madelo",
  "I Aspire To Be A Developer"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);

//Experience - Tab
document.addEventListener('DOMContentLoaded', function() {
    
    var tabs = document.querySelectorAll('.tabs');

    tabs.forEach(function(tab) {
        M.Tabs.init(tab);
    });
});



