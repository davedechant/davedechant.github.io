$(document).ready(function() {

    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            body = document.querySelector("body");
            if (distanceY > shrinkOn) {
                classie.add(body,"smaller");
            } else {
                if (classie.has(body,"smaller")) {
                    classie.remove(body,"smaller");
                }
            }
        });
    }
    window.onload = init();

});