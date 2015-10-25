$(function () {
    var lightsOff = false;
    lightsOff = !lightsOff;
        $('#overlay').fadeToggle(1000); /* Choose desired delay */
        // if (!lightsOff)
        //     setTimeout((function() {
        //         $(this).removeClass('highlight');
        //     }).bind(this), 1000); /* Same delay */
        // else
        //     $(this).addClass('highlight');
    $("input").on('click', function () {
        lightsOff = !lightsOff;
        $('#overlay').fadeToggle(500); /* Choose desired delay */
        // if (!lightsOff)
        //     setTimeout((function() {
        //         $(this).removeClass('highlight');
        //     }).bind(this), 1000); /* Same delay */
        // else
        //     $(this).addClass('highlight');
    })
})