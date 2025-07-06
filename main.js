
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("mobile-menu-button").addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
});

$(document).ready(function () {
    // Hero slider

    // Feedback slider
    $('#feedback-slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });


    $('#hero-slick').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        speed: 800,
        fade: true,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    // Brand slider
    $('#brand-slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });
});
