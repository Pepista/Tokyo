$(document).ready(function(){
    $("img").on("click",function()
    {
        $(this).toggleClass("active");
        
        $("mav ul li a").removeClass("active");
        $(this).addClass("active")
    });

    $("#ukazObrazky").on("click",function()
    {
        ("img").fadeToggle(800);
    });

});