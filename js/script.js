$(document).ready(function(){ 
// var abc=0;

    if ($(".accrd__top").length){
        $(".accrd").hover(
            function () {
                $(this).closest(".accrd").addClass("accrd--open");
                $(this).closest(".accrd").find(".accrd__eff-wrap").stop().slideDown(400);
            },
            function () {
                $(this).closest(".accrd").removeClass("accrd--open");
                $(this).closest(".accrd").find(".accrd__eff-wrap").stop().slideUp(250);
            }
        );
    }
    if ($(".js--header-search-btn").length){
        $(".js--header-search-btn").click(function(event){
            event.preventDefault();
            // $(".search-bl").stop().slideToggle();
            $(".search-bl__effect-el").stop().slideToggle();
        });
        
    }
    if ($(".js--hbron-btn").length){
        $(".js--hbron-btn").click(function(event){
            event.preventDefault();
            $(".header-bron-block").addClass("header-bron-block--open");
        });
    }
    if ($(".hbron-form__close").length){
        $(".hbron-form__close").click(function(event){
            event.preventDefault();
            $(".header-bron-block").removeClass("header-bron-block--open");
        });
    }
    if ($(".js--home-slider").length){
        var homeSlider = new Swiper('.js--home-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 400,
            // If we need pagination
            pagination: {
                el: '.js--home-pag',
                clickable: true,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.js--home-next',
                prevEl: '.js--home-prev',
            },
        });
        $(window).resize(function () {
            homeSlider.update(true);
            console.log("window-resize + homeSwiper update");
        });
    }
//  
if ($(".js--scale-slider").length > 0) {
    var startRangeLeftPos = function () {
        var wWindow = $(window).innerWidth();
        var wContainer = $(".js--sizer-1").innerWidth();
        var sumWBeforeRange = (wWindow - wContainer) / 2;
        // sumWBeforeRange = sumWBeforeRange.toFixed(0);
        // sumWBeforeRange = parseInt(sumWBeforeRange);
        sumWBeforeRange = parseInt(sumWBeforeRange);
        // sumWBeforeRangeMinus = sumWBeforeRange - 15;
        if (wWindow>575){
            minus123 = 15;
        } else {
            minus123 = 5;
        }
        sumWBeforeRangeMinus = sumWBeforeRange - minus123;
        console.log("wWindow = " + wWindow + "; wContainer = " + wContainer + "; minus123 = " + minus123 + "; sumWBeforeRange = " + sumWBeforeRange + ";");
        // return sumWBeforeRange;
        return sumWBeforeRangeMinus;
    };
    // var startRangeLeftPosMobile = function () {
    //     var wWindow = $(window).innerWidth();
    //     var wContainer = $(".js--sizer-1").innerWidth();
    //     var sumWBeforeRange = (wWindow - wContainer) / 2;
    //     // sumWBeforeRange = sumWBeforeRange.toFixed(0);
    //     // sumWBeforeRange = parseInt(sumWBeforeRange);
    //     sumWBeforeRange = parseInt(sumWBeforeRange);
    //     sumWBeforeRange = sumWBeforeRange - 5;
    //     console.log("wWindowMOBILE = " + wWindow + "; wContainerMOBILE = " + wContainer + "; sumWBeforeRangeMOBILE = " + sumWBeforeRange + ";");
    //     // return sumWBeforeRange;
    //     return sumWBeforeRange;
    // };
    startRangeLeftPos();
    // startRangeLeftPosMobile();
    var rangeDart = new Swiper('.js--scale-slider', {
        init: false,
        slidesPerView: "auto",
        freeMode: true,
        speed: 1000,
        // slidesOffsetBefore: 10,
        // slidesOffsetAfter: 10,
        slidesOffsetBefore: startRangeLeftPos(),
        // slidesOffsetBefore: startRangeLeftPos(),
        spaceBetween: 0,
        slideToClickedSlide: true,

        navigation: {
            nextEl: '.js--scale-next-btn',
            // prevEl: '.js--scale-prev-btn',
        },
        // autoplay: {
        //     delay: 5000,
        // },
        // pagination: {
        //     el: '.swiper-pagination',
        //     // type: 'bullets',
        //     type: 'fraction',
        // },
        breakpoints: {
          // when window width is <= 320px
          // 320: {
          //   slidesPerView: 1,
          //   spaceBetween: 10
          // },
          // // when window width is <= 480px
          // 480: {
          //   slidesPerView: 2,
          //   spaceBetween: 20
          // },
          // // when window width is <= 640px
        //   575: {
        //         slidesOffsetBefore: startRangeLeftPosMobile(),
        //   }
        //   1600: {
        //     slidesOffsetBefore: startRangeLeftPos(),
        //   }
        },
        // on: {
        //   init: function (e) {

        //   },
        //   resize: function (e) {
        //     // slidesOffsetBefore: startRangeLeftPos()
        //   },

        // },
    });
    rangeDart.init();
    $(window).resize(function () {
        console.log("rangeDart ---------- update-step1");
        rangeDart.params.slidesOffsetBefore = startRangeLeftPos();
        console.log("rangeDart ---------- update-step2");
        rangeDart.update(true);
        console.log("rangeDart.activeIndex = " + rangeDart.activeIndex);
        if (rangeDart.activeIndex === 0) {
            rangeDart.slideTo(0);
        }
        // rangeDart.updateSlidesOffset();
        console.log("rangeDart ---------- full-update");
    });
}


if ($(".js--partners-slider").length) {
    var partnersSlider = new Swiper('.js--partners-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        freeMode: false,
        slidesOffsetBefore: 0,
        // speed: 400,
        // If we need pagination
        // pagination: {
        //     el: '.js--home-pag',
        //     clickable: true,
        // },
        // Navigation arrows
        breakpoints: {
            575: {
                slidesPerView: "auto",
                freeMode: true,
                speed: 1000,
                slidesOffsetBefore: 15,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: '.js--partners-next',
            prevEl: '.js--partners-prev',
        },
    });
    $(window).resize(function () {
        partnersSlider.update(true);
        console.log("window-resize + homeSwiper update");
    });
}


    if ($(".usluga-card__text p").length) {
        $(".usluga-card__text p").after("<div class='p-wrapper'></div>");
    }

    if ($(".js--otzyvy-slider").length) {
        var otzyvySlider = new Swiper('.js--otzyvy-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            // speed: 400,
            // If we need pagination
            pagination: {
                el: '.js--otzyvy-pag',
                clickable: true,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.js--otzyvy-next',
                prevEl: '.js--otzyvy-prev',
            },
        });
        $(window).resize(function () {
            otzyvySlider.update(true);
            console.log("window-resize + otzyvySwiper update");
        });
    }
    if ($(".js--opobj-slider").length) {
        var opobjSlider = new Swiper('.js--opobj-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            // slidesPerView: "auto",
            freeMode: false,
            // speed: 1000,
            speed: 400,  
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            // If we need pagination
            // pagination: {
            //     el: '.js--otzyvy-pag',
            //     clickable: true,
            // },
            // Navigation arrows
            navigation: {
                nextEl: '.js--opobj-next',
                prevEl: '.js--opobj-prev',
            },
            breakpoints: {
                575: {
                    slidesPerView: "auto",
                    freeMode: true,
                    speed: 1000,
                    slidesOffsetBefore: 15,
                    slidesOffsetAfter: 15,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            },
        });
        $(window).resize(function () {
            opobjSlider.update(true);
            console.log("window-resize + opobjSwiper update");
        });
    }
    if ($(".footer__back-btn").length > 0) {
        $(".footer__back-btn").click(function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 800);
        });
    }
    if ($(".js--anchor-start-link").length > 0) {
        $(".js--anchor-start-link").click(function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id = $(this).data('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top }, 800);
        });
    }
    // if ($(".js--tab-link").length > 0) {

    //     $(".js--tab-link").click(function () {
    //         var posLeftEl = $(this).position().left;
    //         var posParentRealScrll = $(this).closest(".js--tab-row").scrollLeft();
    //         var tabScrllSum = posLeftEl + posParentRealScrll;
    //         console.log(posLeftEl);
    //         console.log(posParentRealScrll);
    //         console.log("tabScrllSum = " + tabScrllSum);
    //         $(this).closest('.js--tab-row').animate({ scrollLeft: tabScrllSum }, 700);
    //     });
    // }
    if ($(".js--tab-link.active").length > 0) {
        var startTabLeftPos = function () {
            var posLeftEl = $(".js--tab-link.active").position().left;
            var posParentRealScrll = $(".js--tab-link.active").closest(".js--tab-row").scrollLeft();
            var tabScrllSum = posLeftEl + posParentRealScrll;
            console.log("posLeftEl =" + posLeftEl);
            console.log("posParentRealScrll =" + posParentRealScrll);
            console.log("tabScrllSum =" + tabScrllSum);
            if (tabScrllSum>15) {
                tabScrllSum = tabScrllSum - 15;
            }            
            $(".js--tab-link.active").closest('.js--tab-row').animate({ scrollLeft: tabScrllSum }, 700);
        };
        startTabLeftPos();  
    }
    if ($(".js--burger").length > 0) {
        $(".js--burger").click(function () {
            // $(".lmt").removeClass("lmt--search");
            // $(".left-menu").removeClass("left-menu--search");
            // $(this).toggleClass("mb-burger--active");
            // $(".left-menu").toggleClass("left-menu--open");
            $(".mobile-menu").addClass("mobile-menu--open");
            $("body").addClass("body-menu-open");
            $("html").addClass("html-menu-open");
        });
    }
    if ($(".js--menu-close").length > 0) {
        $(".js--menu-close").click(function () {
            $(".mobile-menu").removeClass("mobile-menu--open");
            $("body").removeClass("body-menu-open");
            $("html").removeClass("html-menu-open");
        });
    }
    if ($(".mob-accrd__top").length > 0) {
        $(".mob-accrd__top").click(function () {
            $(this).closest(".mob-accrd").toggleClass("mob-accrd--open");
            $(this).closest(".mob-accrd").find(".mob-accrd__bottom").slideToggle();
        });
    }
    
    if ($(".js--nomer-more-btn").length > 0) {
        $(".js--nomer-more-btn").click(function () {
            $(this).closest(".nomer-item").toggleClass("nomer-item--open");
            $(this).closest(".nomer-item").find(".nomer-item__bottom").slideToggle();
        });
    }
    // 
    if ($(".js--stars-block").length > 0) {
        $(".stars-block__item").mouseenter(function(){
            if (!$(this).closest(".stars-block").hasClass("stars-block--static")) {
                $(this).addClass("stars-block__item--orange");
                $(this).prevAll(".stars-block__item").addClass("stars-block__item--orange");
                $(this).nextAll(".stars-block__item").removeClass("stars-block__item--orange");
            }
        });
        $(".stars-block").mouseleave(function(){
            if (!$(this).closest(".stars-block").hasClass("stars-block--static")) {
                if ($(this).closest(".stars-block").find(".stars-block__item--active").length > 0) {
                $(this).find(".stars-block__item--active").addClass("stars-block__item--orange");
                $(this).find(".stars-block__item--active").prevAll(".stars-block__item").addClass("stars-block__item--orange");
                $(this).find(".stars-block__item--active").nextAll(".stars-block__item").removeClass("stars-block__item--orange");
                console.log("stars-block__item--active - существует");
                } else {
                $(this).find(".stars-block__item").removeClass("stars-block__item--orange");
                console.log("stars-block__item--active - НЕ существует");
                }
                // console.log("true--777");
            } else {
                // console.log("false--777");
            }
        });
        $(".stars-block__item").click(function () {
            if (!$(this).closest(".stars-block").hasClass("stars-block--static")) {
                $(this).addClass("stars-block__item--orange");
                $(this).prevAll(".stars-block__item").addClass("stars-block__item--orange");
                $(this).nextAll(".stars-block__item").removeClass("stars-block__item--orange");
                $(this).closest(".stars-block").find(".stars-block__item").removeClass("stars-block__item--active");
                $(this).addClass("stars-block__item--active");
                var starItemNum = $(this).data("star");  
                // $(this).closest(".stars-block").data("star-rating") = starItemNum;
                // $(this).closest(".stars-block").data("star-rating2", starItemNum);
                $(this).closest(".stars-block").attr("data-star-rating", starItemNum);
                $(this).closest(".stars-block").find(".stars-block__input").val(starItemNum);
            }
        });
    }
    
    // 

}); //close ready

