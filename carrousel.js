$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoWidth: true,
        variableWidth: true,
        infinite: true,
        arrows: true,
        mobileFirst: true,
        prevArrow: '.contenedor-left-arrow',
        nextArrow: '.contenedor-right-arrow',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 3,
                    centerPadding: '50px',
                    variableWidth: false,
                    autoWidth: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".center3").slick({
        autoplay: true,
        arrows: false,
        mobileFirst: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoWidth: true,
        variableWidth: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {},
            },
        ],
    });
});
