// Get the navbar
var navbar = document.getElementById("topnav");

function expandNavBar() {
    if(navbar.classList.contains("responsive")) navbar.classList.remove("responsive");
    else navbar.classList.add("responsive"); 
}

// Get the offset position of the navbar
var gone = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position, and remove "sticky" when you leave the scroll position
window.onscroll = function() {
  if (window.pageYOffset >= gone) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

var slideNumber = 1;
showCurrSlide(slideNumber);

function changeSlideNumber(n) {
  showCurrSlide(slideNumber += n);
}

function currentSlide(n) {
  showCurrSlide(slideNumber = n);
}

function showCurrSlide(n) {
    var i;
    var slidesLeft = document.getElementsByClassName("slides-left");
    var slidesRight = document.getElementsByClassName("slides-right");
    var dots = document.getElementsByClassName("dot");
    if (n > slidesLeft.length) slideNumber = 1;
    else if (n < 1) slideNumber = slidesLeft.length;
    for (i = 0; i < slidesLeft.length; i++) slidesLeft[i].style.display = "none";
    for (i = 0; i < slidesRight.length; i++) slidesRight[i].style.display = "none";
    for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" dot-active", "");
    slidesLeft[slideNumber-1].style.display = "block";
    slidesRight[slideNumber-1].style.display = "block";
    dots[slideNumber-1].className += " dot-active";
}

var autoScroll;
autoSlide();
function autoSlide(){
    autoScroll =setInterval(function(){
      changeSlideNumber(1);
    }, 3000);
}

/*Image rollover*/
var pic2 = getElementById('pic2');
function hover2(pic2) {
  pic2.setAttribute('src', 'pics/hero2.jpg');
}
function unhover2(pic2) {
  pic2.setAttribute('src', 'pics/hero3.jpg');
}

var pic3 = getElementById('pic3');
function hover3(pic3) {
  pic3.setAttribute('src', 'pics/vikemon2.png');
}
function unhover3(pic3) {
  pic3.setAttribute('src', 'pics/vikemon.jpg');
}