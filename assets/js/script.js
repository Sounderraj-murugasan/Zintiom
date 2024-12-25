$(document).ready(function () {
  $(".js-slick-container").slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    spaceBetween: 30,
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const carouselContainer = document.querySelector(".js-slick-container");
//   const carouselItem = document.querySelector(".client-card");

//   const numberOfItems = 10;

//   for (let i = 0; i < numberOfItems; i++) {
//     const clonedItem = carouselItem.cloneNode(true);
//     carouselContainer.appendChild(clonedItem);
//   }
// });
