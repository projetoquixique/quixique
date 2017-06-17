// alert("falou maninho");
var vh = window.innerHeight/100;
var vw = window.innerWidth/100;
var currentScrollTop = 0;
var scroll = [true, true, true];

function checkScroll(){
    for(i in scroll){
        if(scroll[i] == null){
            return true;
        }
        else if(scroll[i] == true){
            scroll[i] = false;
            return true;
        }
    }
    return false;
}
    if(window.location.href == window.location.origin+'/inicio'){

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
    }

$(window).bind('scroll', function() {
    if ($(window).scrollTop() < 180*vh) {
        $(".header").addClass('hide');        
    } else if ($(window).scrollTop() > 180*vh) {
        $(".header").removeClass('hide');
    }

    if ($(window).scrollTop() > 400+(200*vh)) {        
        $(".header").addClass('show');
    } else if ($(window).scrollTop() < 400+(200*vh)) {
        $(".header").removeClass('show');  
    }
});

$(window).bind('scroll', function() {
    var screen = 100*vh;
    
    if(window.location.href == window.location.origin+'/inicio'){

        if(currentScrollTop == 0 && checkScroll() == false){
            scroll = [null];
            $("body").animate({ scrollTop: screen }, 600, function(){
                currentScrollTop = $("body").scrollTop();
                console.log(currentScrollTop);                
                scroll = [true,true,true];
            });
            event.stopPropagation();
        }
        else if($("body").scrollTop() > screen*2){
            return false;            
        }
        else if(currentScrollTop < $("body").scrollTop() && checkScroll() == false){
            scroll = [null];
            $("body").animate({ scrollTop: currentScrollTop + screen }, 600, function(){
                currentScrollTop = $("body").scrollTop();
                console.log(currentScrollTop);
                scroll = [true,true,true];
            });
            event.stopPropagation();            
        }

        else if(currentScrollTop > $("body").scrollTop() && checkScroll() == false){
            scroll = [null];
            $("body").animate({ scrollTop: currentScrollTop - screen }, 600, function(){
                currentScrollTop = $("body").scrollTop();
                console.log(currentScrollTop);
                scroll = [true,true,true];
            });
            event.stopPropagation();            
        }        
    }

});

$(function(){
    // this
    $('.container-object-fit').find('.item-object-fit').each(function() {
        var itemClass;
        var imgAspectRatio = $(this).innerWidth()/$(this).innerHeight();
        // var imgAspectRatio = this.width/this.height; não funciona com videos

        $('.container-object-fit').each(function(){
            var containerAspectRatio = $(this).innerWidth()/$(this).innerHeight();
            if(imgAspectRatio > containerAspectRatio){
                itemClass = 'tall';
            }else{
                itemClass = 'wide';                                    
            }
        });
        $(this).addClass(itemClass);
    })
});
