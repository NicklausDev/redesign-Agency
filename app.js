/*const container = document.getElementById('slider-container');
let currentIndex = 0;

function nextSlide() {
    const itemWidth = container.children[0].offsetWidth;
    currentIndex = (currentIndex + 1) % container.children.length;
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function prevSlide() {
    const itemWidth = container.children[0].offsetWidth;
    currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

setInterval(nextSlide, 3000);*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      center: true,
      nav:true,
      dots: true,
      NavText:[
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angel-right'></i>",
      ],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
             
          },
          1000:{
              items:3,
          }
      }
    })
  })
  
  