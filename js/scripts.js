$(function(){
    $(".carousel").carousel({interval: 2000, pause: "false"});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
            $("#homeCarousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
         }
         else {
             $("#homeCarousel").carousel("cycle");
             $("#carouselButton").children("i").removeClass("fa-play");
             $("#carouselButton").children("i").addClass("fa-pause");
         }
     });
 });