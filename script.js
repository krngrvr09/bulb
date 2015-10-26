$(function () {
    var lightsOff = false;
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
