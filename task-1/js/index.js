$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
});

$("#video_projects .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 1
       },
       600: {
           items: 2
       },
       1000 : {
           items: 3
       }
   }
});
$("#LIZ .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 3
       },
       600: {
           items: 5
       },
       1000 : {
           items: 7
       }
   }
});

const changePic = (e)=>{
    document.getElementById("main_image").src = e;
}