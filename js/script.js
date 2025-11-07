$(document).ready(function(){
    $("nav ul li a").on("click", function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
});

$("galeriePamatky img").on("click", function(){
    $(this).toggleClass("active")
});