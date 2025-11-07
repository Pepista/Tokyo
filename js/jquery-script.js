$(document).ready(function(){
    // Funkce pro zobrazení a skrytí obrázků po kliknutí na tlačítko
    $("#ukazObrazky").on("click", function() {
        // Selektujeme div, který obsahuje obrázky (podle aktuální stránky)
        var target = $(this).closest('nav').next('main').find('div.hidden');

        // Přepínáme zobrazení obrázků (fadeToggle)
        target.fadeToggle(800);
        
        // Změníme text tlačítka podle toho, zda jsou obrázky zobrazeny nebo ne
        if (target.is(":visible")) {
            $(this).text("Skrýt obrázky");
        } else {
            $(this).text("Zobrazit obrázky");
        }
    });
});
