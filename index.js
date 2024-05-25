
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

//Skills - Carousel
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class 'carousel'
    var carousels = document.querySelectorAll('.carousel');

    // Loop through each 'carousel' element and initialize the carousel
    carousels.forEach(function(carousel) {
        // Initialize the carousel
        var instance = M.Carousel.init(carousel);
    });
});

