let slideIndex = 1;
SlideShow(slideIndex);

function addSlides(n) {
    SlideShow(slideIndex += n);
}

function SlideShow(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

let sliderImages = document.querySelectorAll(".mySlides"),
  arrowLeft = document.querySelector(".prev"),
  arrowRight = document.querySelector(".next"),
  allImages= document.querySelectorAll(".mySlides"),
  current = 0;
//Show arrows when hover on images 
allImages.forEach(item => {
  item.addEventListener("mouseover", function(){
    arrowLeft.style.display="block";
    arrowRight.style.display="block";
  });
});
//Remove arrows when mouse remove on  images 
allImages.forEach(item => {
  item.addEventListener("mouseout", function(){
    arrowLeft.style.display="none";
    arrowRight.style.display="none";
  });
});
//Show arrows when hover on arrow left 
arrowLeft.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
});
//Show arrows when hover on arrow right 
arrowRight.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
});

