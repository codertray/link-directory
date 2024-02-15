//active
$(".card").on("mouseover", function() {
    $(this).addClass("active-card");
});
$(".card").on("mouseout", function() {
    $(this).toggleClass("active-card")
});
$(".icon> i, .btn").on("mouseover", function() {
    $(this).addClass("active-btn");
});
$(".icon> i, .btn").on("mouseout", function() {
    $(this).toggleClass("active-btn")
});
$(".icon > i, .btn").on("click", function() {
    $(this).addClass("clicked");
    setTimeout(() => {
        $(this).removeClass("clicked");
    }, 100);
});

//mobile
function mobileHandleScroll() {
    if ($(window).width() <= 800) {
        $('.card').each(function() {
            var $card = $(this);
            var cardTop = $card.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var documentHeight = $(document).height();

            if (cardTop < scrollTop + windowHeight * 0.25) {
                $card.addClass('active-card');
            } else {
                $card.removeClass('active-card');
            };
            if (scrollTop + windowHeight >= documentHeight) {
                $('.easter-egg').fadeIn();
            } else {
                $('.easter-egg').fadeOut();
            }            
        });
    }
};

function removeStyling() {
    $(div, a, i).removeClass()
    $("body").addClass('no-styling');
    $("#reload").fadeIn()
}

window.addEventListener('devicemotion', function(event) {
    var threshold = 15;

    var accX = Math.abs(event.acceleration.x);
    var accY = Math.abs(event.acceleration.y);
    var accZ = Math.abs(event.acceleration.z);

    var totalAcc = Math.sqrt(accX * accX + accY * accY + accZ * accZ);

    if (totalAcc > threshold) {
        removeStyling();
    }
});


$(document).ready(function() {
    mobileHandleScroll();
});

$(window).scroll(function() {
    mobileHandleScroll();
});

var dusted = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;


$(".profile, h1, h2, p").on("click", function(e) {
    if (e.type === "click") {
        thanos($(this));
    }
});

function thanos($element) {
    $element.fadeOut();
    dusted++;
    if (dusted === 5) {
        alert("Thanos!");
        if(dusted === 6)
        alert("UH OH!!!");
        removeStyling()
    }
}


function konamiCodeHandler(event) {
    if (event.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;

        // Check if the entire Konami Code sequence has been entered
        if (konamiCodePosition === konamiCode.length) {
            $('body').addClass('hard-mode');
            alert('Hard mode activated!!!');
            
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
}

$(document).on('keydown', konamiCodeHandler);
