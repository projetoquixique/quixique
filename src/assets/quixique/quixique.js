// alert("falou maninho");
var vh = window.innerHeight/100;
var vw = window.innerWidth/100;

function initMap() {
    var quixada = {
        lat: -4.9726929,
        lng: -39.0162997
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: quixada
    });
    var marker = new google.maps.Marker({
        position: quixada,
        map: map
    });
}

$(window).bind('scroll', function() {
    if ($(window).scrollTop() < 80*vh) {
        $(".header").addClass('hide');        
    } else if ($(window).scrollTop() > 80*vh) {
        $(".header").removeClass('hide');
    }

    if ($(window).scrollTop() > 260+(100*vh)) {        
        $(".header").addClass('show');
    } else if ($(window).scrollTop() < 260+(100*vh)) {
        $(".header").removeClass('show');  
    }
});