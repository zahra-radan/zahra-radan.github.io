$(document).ready(function () {
    const LINKHEAD = $(".link-head");
    const SECTION = $("section");
    const IMG_HIDE = $(".hide-img");
    const IMG_SLIDER = $(".img_slider");
    const SLIDER = ["../images/image1.webp", "../images/image2.webp", "../images/image3.webp", "../images/image4.webp", "../images/image5.webp", "../images/image6.webp"];
    const ICON_LEFT = $(".icon-left");
    const ICON_RIGHT = $(".icon-right");
    const ICON_PLAY = $(".icon-play");
    const ICON_PAUSE = $(".icon-pause");
    const IMG_LOAD = $(".img-load");
    const TEXT_LOAD = $(".text-load");
    const FILL = $(".fill");

    const TITLE_IMG = $(".title-img");
    const PRICE_IMG = $(".price-img");
    const DESCRIPTION_IMG = $(".description-img");
    const DEAL_IMG = $(".deal-img");
    const BTN_IMG = $(".btn-img");
    const ITEM_DISCOVER = $(".item-discover");
    const LINE_DISCOVER = $(".line-discover");
    const DISCOVER_SAMSUNG = $(".discover-samsung");
    const TEXT_DISCOVER = $(".text-discover");
    const BTN_DISCOVER = $(".btn-discover");
    const LINK_DISCOVER = $(".link-discover");
    const FORYOU = $(".foryou-samsung");
    const LINK_FORYOU = $(".link-foryou");
    const TEXT_FORYOU = $(".text-foryou");
    const BTN_FORYOU = $(".btn-foryou");
    const MOBILE_SAMSUNG = $(".mobile-samsung");
    const MOBILE_DISCOVER = $(".mobile-discover");
    const ULTRA4 = $(".ultra4");
    const MOBILE_BTN = $(".mobile-btn");
    const TV_SAMSUNG = $(".tv-samsung");
    const TV_LINK = $(".tv-link");
    const TV_BTN = $(".tv-btn");
    const HOME_SAMSUNG = $(".home-samsung");
    const HOME_LINK = $(".home-link");
    const HOME_BTN = $(".home-btn");
    const COMPUTING_SAMSUNG = $(".computing-samsung");
    const COMPUTING_LINK = $(".computing-link");
    const COMPUTING_BTN = $(".computing-btn");
    const LINE_FORWARD = $(".line-forward");

    const ITEM_MOBILE = $(".item-mobile");
    const LINE_MOBILE = $(".line-mobile");
    const GALAXYS24 = $(".galaxys24");
    const MOBILE_IMG = $(".mobile-img")
    const ANIMATED = $(".animated-element");
    const ANIMATED_TV = $(".animated-tv");
    const VIDEO_IMG = $(".video-img");
    const ITEM_VIDEO = $(".item-video");
    const LINE_VIDEO = $(".line-video");
    const VIDEO_TV = $(".video-tv");
    const ANIMATED_APPLIANCE = $(".animated-appliance");
    const ITEM_APPLIANCE = $(".item-appliance");
    const LINE_APPLIANCE = $(".line-appliance");
    const APPLIANCE_IMG = $(".appliance-img");
    const APPLIANCE = $(".appliance");

    const ITEM_MOBILE2 = $(".item-mobile2");
    const LINE_MOBILE2 = $(".line-mobile2");

    const MOBILE_IMG2 = $(".mobile-img2")
    const ANIMATED2 = $(".animated-element2");
    const ANIMATED_TV2 = $(".animated-tv2");
    const VIDEO_IMG2 = $(".video-img2");
    const ITEM_VIDEO2 = $(".item-video2");
    const LINE_VIDEO2 = $(".line-video2");

    const ANIMATED_APPLIANCE2 = $(".animated-appliance2");
    const ITEM_APPLIANCE2 = $(".item-appliance2");
    const LINE_APPLIANCE2 = $(".line-appliance2");
    const APPLIANCE_IMG2 = $(".appliance-img2");


    const CONTAINER_TEXT = $(".container-text");
    const LINE_HIDE = $(".line-hide");
    const OFFER_ONE = $(".offer1");
    const LINE_GRAY = $(".line-gray");
    const IMG_LAST = $(".img-last");
    const LABLE_SEARCH = $(".lable-search");
    const LABLE_CHILD = $(".lable-child");
    const ONE = $(".one");
    const TWO = $(".two");

    const ANIMATED_SUSTA = $(".animated-Sustainability");
    const IMG_SUSTA = $(".Sustainability-img");
    const ITEM_SUSTA = $(".item-Sustainability");
    const LINE_SUSTA = $(".line-Sustainability");
    const SUSTA = $(".Sustainability");
    const ANIMATED_SUSTA2 = $(".animated-Sustainability2");
    const IMG_SUSTA2 = $(".Sustainability-img2");



    let fill_width = 0;
    let is_running = true;
    let active_index = 0;
    let key;



    $(LINKHEAD).each(function (index) {
        $(this).mouseenter(function () {

            $(SECTION).removeClass("active").addClass("hidden");


            $(SECTION[index]).removeClass("hidden").addClass("active");
            hideImages();
        }).mouseleave(function () {

            if (!$(SECTION[index]).hasClass("active")) {
                $(SECTION[index]).addClass("hidden");
                showImages();
            }
        });

        $(this).click(function (e) {
            e.preventDefault();


            $(SECTION).removeClass("active").addClass("hidden");


            $(SECTION[index]).toggleClass("active");
            if ($(SECTION[index]).hasClass("active")) {
                $(SECTION[index]).removeClass("hidden");
                hideImages();
            } else {
                $(SECTION[index]).addClass("hidden");
                showImages();
            }
        });


        $(SECTION[index]).mouseenter(function () {
            $(this).addClass("active");

        }).mouseleave(function () {
            $(this).removeClass("active");
            $(SECTION[index]).addClass("hidden");
            showImages();

        });

    });

    $(LINKHEAD).each(function (index) {
        $(this).mouseenter(function () {

            $(SECTION).removeClass("active").addClass("hidden");


            $(SECTION[index]).removeClass("hidden").addClass("active");
            hideImages();
        }).mouseleave(function () {

            if (!$(SECTION[index]).hasClass("active")) {
                $(SECTION[index]).addClass("hidden");
                showImages();
            }
        });

        $(this).click(function (e) {
            e.preventDefault();


            $(SECTION).removeClass("active").addClass("hidden");


            $(SECTION[index]).toggleClass("active");
            if ($(SECTION[index]).hasClass("active")) {
                $(SECTION[index]).removeClass("hidden");
                hideImages();
            } else {
                $(SECTION[index]).addClass("hidden");
                showImages();
            }
        });


        $(SECTION[index]).mouseenter(function () {
            $(this).addClass("active");

        }).mouseleave(function () {
            $(this).removeClass("active");
            $(SECTION[index]).addClass("hidden");
            showImages();

        });

    });


    $(this).click(function (e) {
        e.preventDefault();

    });
    function hideImages() {
        IMG_HIDE.css({
            'filter': 'grayscale(90%)',
            'filter': 'brightness(50%)'
        });
    }

    function showImages() {
        IMG_HIDE.css({
            'filter': 'none'
        });
    }

    const TEXTES = [
        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: 'Save $1,100+',
            DESCRIPTION_IMG: 'On Mega Capacity Refrigerator with Family Hub™. Plus, get 2 years of Samsung Care+ for $1 <del class="text-black">$169.99</del> and more.<sup class="text-black">β</sup>',
            DEAL_IMG: 'Shop more deals',
            BTN_IMG: 'Buy now'
        },

        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: ' Save up to $1,100+',
            DESCRIPTION_IMG: ' Get up to $800 instant trade-in credit<sup class="text-black">θ</sup>toward Galaxy S24 Ultra or save $300 without.<sup class=" text-black>" Ә</sup> Plus, double the storage on us on select colors.<sup class="text-black">Ω</sup>',
            DEAL_IMG: 'Shop phone deals',
            BTN_IMG: 'Buy now'
        },

        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: 'Save up to $1,899+',
            description: 'On select 75"+ Class QLED TVs. Plus, get a S-series All-in-one Wireless Dolby ATMOS Soundbar HW-S61D on us.',
            DEAL_IMG: 'Shop TV deals',
            BTN_IMG: 'Buy now'
        },

        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: 'Save $900+',
            DESCRIPTION_IMG: 'Now $1599.99.On 57" Odyssey Neo G9 Curved Gaming Monitor. Plus, get a 27" Odyssey G3 gaming monitor on us<sup>AC</sup> and 2 years of Samsung Care+ for $1.<sup>β</sup>',
            DEAL_IMG: 'Shop monitor deals',
            BTN_IMG: 'Buy now'
        },

        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: 'Save up to $1,000+ on The Frame',
            DESCRIPTION_IMG: ' Plus, get $100 off Ultra-slim Wireless Dolby ATMOS Soundbar HW-S800D with purchase.',
            DEAL_IMG: 'Shop all TV deals',
            BTN_IMG: 'Buy now'
        },


        {
            TITLE_IMG: 'Deal of the Day',
            PRICE_IMG: 'Save up to $1,600+',
            DESCRIPTION_IMG: ' Get up to $1,200 instant trade-in credit toward Galaxy Z Fold6<sup>θ</sup> or up to $700 off without trade-in.<sup>¤†</sup><sup>¤†</sup><sup>AZ</sup>',
            DEAL_IMG: 'Shop phone deals',
            BTN_IMG: 'Buy now'
        }
    ];



    function updateSlider() {
        const SLIDE = TEXTES[active_index];
        IMG_SLIDER.attr("src", SLIDER[active_index]);
        TITLE_IMG.text(SLIDE.TITLE_IMG);
        PRICE_IMG.text(SLIDE.PRICE_IMG);
        DESCRIPTION_IMG.html(SLIDE.DESCRIPTION_IMG);
        DEAL_IMG.text(SLIDE.DEAL_IMG);
        BTN_IMG.text(SLIDE.BTN_IMG);
    }


    ICON_LEFT.click(function () {
        active_index--;
        if (active_index < 0) {
            active_index = SLIDER.length - 1;
        }
        updateSlider();
    });

    ICON_RIGHT.click(function () {
        active_index++;
        if (active_index >= SLIDER.length) {
            active_index = 0;
        }
        updateSlider();
    });


    function increase(element) {
        fill_width++;
        element.style.width = `${fill_width}%`;
        if (fill_width >= 100) {
            clearInterval(key);
            fill_width = 0;
            element.style.width = `${fill_width}%`;
            active_index++;
            if (active_index == FILL.length) {
                active_index = 0;
            }
            start(active_index);
            updateSlider();
        }
    }

    function start(index) {
        key = setInterval(() => increase(FILL[index]), 30);
    }


    start(active_index);

    IMG_SLIDER.mouseenter(function () {

        if (is_running) {
            is_running = false;
            clearInterval(key);

            ICON_PLAY.removeClass("hidden");
            ICON_PAUSE.addClass("hidden");

        } else {
            start(active_index);
            is_running = true;
        }
    }
    );

    IMG_SLIDER.mouseleave(function () {
        ICON_PLAY.addClass("hidden");
        ICON_PAUSE.removeClass("hidden");
        if (is_running) {
            is_running = false;
            clearInterval(key);


        } else {
            start(active_index);
            is_running = true;

        }
    }
    );

    ICON_PAUSE.click(function () {

        if (is_running) {
            is_running = false;
            clearInterval(key);
            ICON_PLAY.removeClass("hidden");
            ICON_PAUSE.addClass("hidden");

        } else {
            start(active_index);
            is_running = true;

        }
    }
    );

    ICON_PLAY.click(function () {
        ICON_PLAY.addClass("hidden");
        ICON_PAUSE.removeClass("hidden");
        if (is_running) {
            is_running = false;
            clearInterval(key);
        } else {
            start(active_index);
            is_running = true;
        }
    }
    );

    $(IMG_LOAD[0]).hover(function () {
        $(TEXT_LOAD[0]).css("opacity", "1")
    })

    $(IMG_LOAD[0]).mouseleave(function () {
        $(TEXT_LOAD[0]).css("opacity", "0")
    })

    $(IMG_LOAD[1]).mouseenter(function () {
        $(TEXT_LOAD[1]).css("opacity", "1")
    })

    $(IMG_LOAD[1]).mouseleave(function () {
        $(TEXT_LOAD[1]).css("opacity", "0")
    })

    $(IMG_LOAD[2]).mouseenter(function () {
        $(TEXT_LOAD[2]).css("opacity", "1")
    })

    $(IMG_LOAD[2]).mouseleave(function () {
        $(TEXT_LOAD[2]).css("opacity", "0")
    })

    $(IMG_LOAD[3]).mouseenter(function () {
        $(TEXT_LOAD[3]).css("opacity", "1")
    })

    $(IMG_LOAD[3]).mouseleave(function () {
        $(TEXT_LOAD[3]).css("opacity", "0")
    })

    $(IMG_LOAD[4]).mouseenter(function () {
        $(TEXT_LOAD[4]).css("opacity", "1")
    })

    $(IMG_LOAD[4]).mouseleave(function () {
        $(TEXT_LOAD[4]).css("opacity", "0")
    })

    $(IMG_LOAD[5]).mouseenter(function () {
        $(TEXT_LOAD[5]).css("opacity", "1")
    })

    $(IMG_LOAD[5]).mouseleave(function () {
        $(TEXT_LOAD[5]).css("opacity", "0")
    })

    $(LINK_DISCOVER[0]).hover(function () {
        $(TEXT_DISCOVER[0]).toggleClass("hidden");
        $(BTN_DISCOVER[0]).toggleClass("hidden");
    });
    $(LINK_DISCOVER[1]).hover(function () {
        $(TEXT_DISCOVER[1]).toggleClass("hidden");
        $(BTN_DISCOVER[1]).toggleClass("hidden");
    });
    $(LINK_DISCOVER[2]).hover(function () {
        $(TEXT_DISCOVER[2]).toggleClass("hidden");
        $(BTN_DISCOVER[2]).toggleClass("hidden");
    });
    $(LINK_DISCOVER[3]).hover(function () {
        $(TEXT_DISCOVER[3]).toggleClass("hidden");
        $(BTN_DISCOVER[3]).toggleClass("hidden");
    });
    $(LINK_DISCOVER[4]).hover(function () {
        $(TEXT_DISCOVER[4]).toggleClass("hidden");
        $(BTN_DISCOVER[4]).toggleClass("hidden");
    });
    $(LINK_DISCOVER[5]).hover(function () {
        $(TEXT_DISCOVER[5]).toggleClass("hidden");
        $(BTN_DISCOVER[5]).toggleClass("hidden");
    });
    $(ITEM_DISCOVER[1]).click(function () {
        $(LINE_DISCOVER[1]).toggleClass("hidden");
        $(LINE_DISCOVER[0]).addClass("hidden");
        $(LINE_DISCOVER[2]).addClass("hidden");
        FORYOU.removeClass("hidden");
        DISCOVER_SAMSUNG.addClass("hidden");
        MOBILE_SAMSUNG.addClass("hidden");

    });
    $(ITEM_DISCOVER[0]).click(function () {
        $(LINE_DISCOVER[0]).toggleClass("hidden");
        $(LINE_DISCOVER[1]).addClass("hidden");
        $(LINE_DISCOVER[2]).addClass("hidden");
        $(LINE_DISCOVER[3]).addClass("hidden");
        $(LINE_DISCOVER[4]).addClass("hidden");
        $(LINE_DISCOVER[5]).addClass("hidden");
        FORYOU.addClass("hidden");
        DISCOVER_SAMSUNG.removeClass("hidden");
        MOBILE_SAMSUNG.addClass("hidden");
        TV_SAMSUNG.addClass("hidden");
        HOME_SAMSUNG.addClass("hidden");
        COMPUTING_SAMSUNG.addClass("hidden");
    });
    $(LINK_FORYOU[0]).hover(function () {
        $(TEXT_FORYOU[0]).toggleClass("hidden");
        $(BTN_FORYOU[0]).toggleClass("hidden");
    });
    $(LINK_FORYOU[1]).hover(function () {
        $(TEXT_FORYOU[1]).toggleClass("hidden");
        $(BTN_FORYOU[1]).toggleClass("hidden");
    });
    $(LINK_FORYOU[2]).hover(function () {
        $(TEXT_FORYOU[2]).toggleClass("hidden");
        $(BTN_FORYOU[2]).toggleClass("hidden");
    });
    $(LINK_FORYOU[3]).hover(function () {
        $(TEXT_FORYOU[3]).toggleClass("hidden");
        $(BTN_FORYOU[3]).toggleClass("hidden");
    });
    $(LINK_FORYOU[4]).hover(function () {
        $(TEXT_FORYOU[4]).toggleClass("hidden");
        $(BTN_FORYOU[4]).toggleClass("hidden");
    });
    $(LINK_FORYOU[5]).hover(function () {
        $(TEXT_FORYOU[5]).toggleClass("hidden");
        $(BTN_FORYOU[5]).toggleClass("hidden");
    });
    $(ITEM_DISCOVER[2]).click(function () {
        $(LINE_DISCOVER[2]).toggleClass("hidden");
        $(LINE_DISCOVER[1]).addClass("hidden");
        $(LINE_DISCOVER[3]).addClass("hidden");
        $(LINE_DISCOVER[4]).addClass("hidden");
        $(LINE_DISCOVER[5]).addClass("hidden");
        MOBILE_SAMSUNG.removeClass("hidden");
        FORYOU.addClass("hidden");
        DISCOVER_SAMSUNG.addClass("hidden");
        TV_SAMSUNG.addClass("hidden");
        HOME_SAMSUNG.addClass("hidden");
        COMPUTING_SAMSUNG.addClass("hidden");
    });
    ULTRA4.hover(function () {
        $(MOBILE_BTN[0]).toggleClass("hidden");
    });
    $(MOBILE_DISCOVER[0]).hover(function () {
        $(MOBILE_BTN[1]).toggleClass("hidden");
    })
    $(MOBILE_DISCOVER[1]).hover(function () {
        $(MOBILE_BTN[2]).toggleClass("hidden");
    })
    $(MOBILE_DISCOVER[2]).hover(function () {
        $(MOBILE_BTN[3]).toggleClass("hidden");
    })
    $(MOBILE_DISCOVER[3]).hover(function () {
        $(MOBILE_BTN[4]).toggleClass("hidden");
    })

    $(ITEM_DISCOVER[3]).click(function () {
        $(LINE_DISCOVER[3]).toggleClass("hidden");
        $(LINE_DISCOVER[4]).addClass("hidden");
        $(LINE_DISCOVER[2]).addClass("hidden");
        $(LINE_DISCOVER[1]).addClass("hidden");
        $(LINE_DISCOVER[0]).addClass("hidden");
        $(LINE_DISCOVER[5]).addClass("hidden");
        TV_SAMSUNG.removeClass("hidden");
        MOBILE_SAMSUNG.addClass("hidden");
        FORYOU.addClass("hidden");
        DISCOVER_SAMSUNG.addClass("hidden");
        HOME_SAMSUNG.addClass("hidden");
        COMPUTING_SAMSUNG.addClass("hidden");
    });

    $(TV_LINK[0]).hover(function () {
        $(TV_BTN[0]).toggleClass("hidden");
    })
    $(TV_LINK[1]).hover(function () {
        $(TV_BTN[1]).toggleClass("hidden");
    })
    $(TV_LINK[2]).hover(function () {
        $(TV_BTN[2]).toggleClass("hidden");
    })
    $(TV_LINK[3]).hover(function () {
        $(TV_BTN[3]).toggleClass("hidden");
    })
    $(TV_LINK[4]).hover(function () {
        $(TV_BTN[4]).toggleClass("hidden");
    })

    $(ITEM_DISCOVER[4]).click(function () {
        $(LINE_DISCOVER[4]).toggleClass("hidden");
        $(LINE_DISCOVER[3]).addClass("hidden");
        $(LINE_DISCOVER[5]).addClass("hidden");
        $(LINE_DISCOVER[2]).addClass("hidden");
        $(LINE_DISCOVER[1]).addClass("hidden");
        $(LINE_DISCOVER[0]).addClass("hidden");
        HOME_SAMSUNG.removeClass("hidden");
        TV_SAMSUNG.addClass("hidden");
        MOBILE_SAMSUNG.addClass("hidden");
        FORYOU.addClass("hidden");
        DISCOVER_SAMSUNG.addClass("hidden");
        COMPUTING_SAMSUNG.addClass("hidden");
    });


    $(HOME_LINK[0]).hover(function () {
        $(HOME_BTN[0]).toggleClass("hidden");
    })
    $(HOME_LINK[1]).hover(function () {
        $(HOME_BTN[1]).toggleClass("hidden");
    })
    $(HOME_LINK[2]).hover(function () {
        $(HOME_BTN[2]).toggleClass("hidden");
    })
    $(HOME_LINK[3]).hover(function () {
        $(HOME_BTN[3]).toggleClass("hidden");
    })
    $(HOME_LINK[4]).hover(function () {
        $(HOME_BTN[4]).toggleClass("hidden");
    })

    $(ITEM_DISCOVER[5]).click(function () {
        $(LINE_DISCOVER[5]).toggleClass("hidden");
        $(LINE_DISCOVER[4]).addClass("hidden");
        $(LINE_DISCOVER[3]).addClass("hidden");
        $(LINE_DISCOVER[2]).addClass("hidden");
        $(LINE_DISCOVER[1]).addClass("hidden");
        $(LINE_DISCOVER[0]).addClass("hidden");
        COMPUTING_SAMSUNG.removeClass("hidden");
        HOME_SAMSUNG.addClass("hidden");
        TV_SAMSUNG.addClass("hidden");
        MOBILE_SAMSUNG.addClass("hidden");
        FORYOU.addClass("hidden");
        DISCOVER_SAMSUNG.addClass("hidden");
    });

    $(COMPUTING_LINK[0]).hover(function () {
        $(COMPUTING_BTN[0]).toggleClass("hidden");
    })
    $(COMPUTING_LINK[1]).hover(function () {
        $(COMPUTING_BTN[1]).toggleClass("hidden");
    })
    $(COMPUTING_LINK[2]).hover(function () {
        $(COMPUTING_BTN[2]).toggleClass("hidden");
    })
    $(COMPUTING_LINK[3]).hover(function () {
        $(COMPUTING_BTN[3]).toggleClass("hidden");
    })
    $(COMPUTING_LINK[4]).hover(function () {
        $(COMPUTING_BTN[4]).toggleClass("hidden");
    })




    $(LINE_FORWARD[1]).click(function () {
        ONE.addClass("hidden");
        TWO.removeClass("hidden");
        TWO.addClass("two");
        $(LINE_FORWARD[0]).removeClass("forward1")
        $(LINE_FORWARD[1]).css('background', 'black');
        $(LINE_FORWARD[0]).css('background', '');
    });


    $(LINE_FORWARD[0]).click(function () {
        ONE.removeClass("hidden");
        TWO.addClass("hidden");
        $(LINE_FORWARD[0]).css('background', 'black');
        $(LINE_FORWARD[1]).css('background', '');
    });

    $(ITEM_MOBILE[0]).click(function () {
        $(ANIMATED[3]).removeClass('show');
        $(ANIMATED[0]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG).addClass("hidden");
        $(LINE_MOBILE[1]).addClass("hidden");
        $(LINE_MOBILE[2]).addClass("hidden");
        $(MOBILE_IMG[0]).removeClass("hidden");
        $(GALAXYS24[0]).removeClass("hidden");
        $(ANIMATED[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
        $(ANIMATED[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
    });


    $(ITEM_MOBILE2[0]).click(function () {
        $(ANIMATED2[3]).removeClass('show');
        $(ANIMATED2[0]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG2).addClass("hidden");
        $(LINE_MOBILE2[0]).toggleClass("hidden");
        $(LINE_MOBILE2[1]).addClass("hidden");
        $(LINE_MOBILE2[2]).addClass("hidden");
        $(MOBILE_IMG2[0]).removeClass("hidden");
        $(GALAXYS24[0]).removeClass("hidden");
        $(ANIMATED2[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
        $(ANIMATED2[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
    });

    $(ITEM_MOBILE[1]).click(function () {
        $(ANIMATED[4]).removeClass('show');
        $(ANIMATED[1]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG).addClass("hidden");
        $(LINE_MOBILE[1]).removeClass("hidden");
        $(LINE_MOBILE[0]).addClass("hidden");
        $(MOBILE_IMG[1]).removeClass("hidden");
        $(GALAXYS24[1]).removeClass("hidden");

        $(ANIMATED[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);

        });
        $(ANIMATED[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
    });


    $(ITEM_MOBILE2[1]).click(function () {
        $(ANIMATED2[4]).removeClass('show');
        $(ANIMATED2[1]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG2).addClass("hidden");
        $(LINE_MOBILE2[1]).removeClass("hidden");
        $(LINE_MOBILE2[0]).addClass("hidden");
        $(LINE_MOBILE2[2]).addClass("hidden");
        $(MOBILE_IMG2[1]).removeClass("hidden");
        $(GALAXYS24[1]).removeClass("hidden");

        $(ANIMATED2[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
            console.log("kkk")
        });
        $(ANIMATED2[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);

        });
    });

    $(ITEM_MOBILE[2]).click(function () {
        $(ANIMATED[5]).removeClass('show');
        $(ANIMATED[2]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG).addClass("hidden");
        $(LINE_MOBILE[2]).removeClass("hidden");
        $(LINE_MOBILE[1]).addClass("hidden");
        $(LINE_MOBILE[0]).addClass("hidden");
        $(MOBILE_IMG[2]).removeClass("hidden");
        $(GALAXYS24[2]).removeClass("hidden");
        $(ANIMATED[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
        $(ANIMATED[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
    });

    $('.animated-element').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show');
        }, 100 * index);
    });

    $(ITEM_MOBILE2[2]).click(function () {
        $(ANIMATED2[5]).removeClass('show');
        $(ANIMATED2[2]).removeClass('show');
        $(GALAXYS24).addClass("hidden");
        $(MOBILE_IMG2).addClass("hidden");
        $(LINE_MOBILE2[2]).removeClass("hidden");
        $(LINE_MOBILE2[1]).addClass("hidden");
        $(LINE_MOBILE2[0]).addClass("hidden");
        $(MOBILE_IMG2[2]).removeClass("hidden");
        $(GALAXYS24[2]).removeClass("hidden");
        $(ANIMATED2[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
        $(ANIMATED2[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show');
            }, 500 * index);
        });
    });


    $('.animated-element2').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show');
        }, 100 * index);
    });

    $(ITEM_VIDEO[0]).click(function () {
        $(ANIMATED_TV[3]).removeClass('show2');
        $(ANIMATED_TV[0]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG).addClass("hidden");
        $(LINE_VIDEO[1]).addClass("hidden");
        $(LINE_VIDEO[2]).addClass("hidden");
        $(VIDEO_IMG[0]).removeClass("hidden");
        $(VIDEO_TV[0]).removeClass("hidden");
        $(ANIMATED_TV[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    });


    $(ITEM_VIDEO2[0]).click(function () {
        $(ANIMATED_TV2[3]).removeClass('show2');
        $(ANIMATED_TV2[0]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG2).addClass("hidden");
        $(LINE_VIDEO2[0]).removeClass("hidden");
        $(LINE_VIDEO2[1]).addClass("hidden");
        $(LINE_VIDEO2[2]).addClass("hidden");
        $(VIDEO_IMG2[0]).removeClass("hidden");
        $(VIDEO_TV[0]).removeClass("hidden");
        $(ANIMATED_TV2[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV2[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    });


    $(ITEM_VIDEO[1]).click(function () {
        $(ANIMATED_TV[4]).removeClass('show2');
        $(ANIMATED_TV[1]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG).addClass("hidden");
        $(LINE_VIDEO[1]).removeClass("hidden");
        $(LINE_VIDEO[0]).addClass("hidden");
        $(LINE_VIDEO[2]).addClass("hidden");
        $(VIDEO_IMG[1]).removeClass("hidden");
        $(VIDEO_TV[1]).removeClass("hidden");

        $(ANIMATED_TV[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    });

    $(ITEM_VIDEO2[1]).click(function () {
        $(ANIMATED_TV2[4]).removeClass('show2');
        $(ANIMATED_TV2[1]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG2).addClass("hidden");
        $(LINE_VIDEO2[1]).removeClass("hidden");
        $(LINE_VIDEO2[0]).addClass("hidden");
        $(LINE_VIDEO2[2]).addClass("hidden");
        $(VIDEO_IMG2[1]).removeClass("hidden");
        $(VIDEO_TV[1]).removeClass("hidden");

        $(ANIMATED_TV2[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV2[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    });


    $(ITEM_VIDEO[2]).click(function () {
        $(ANIMATED_TV[5]).removeClass('show2');
        $(ANIMATED_TV[2]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG).addClass("hidden");
        $(LINE_VIDEO[2]).removeClass("hidden");
        $(LINE_VIDEO[1]).addClass("hidden");
        $(LINE_VIDEO[0]).addClass("hidden");
        $(VIDEO_IMG[2]).removeClass("hidden");
        $(VIDEO_TV[2]).removeClass("hidden");
        $(ANIMATED_TV[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    });

    $(ITEM_VIDEO2[2]).click(function () {
        $(ANIMATED_TV2[5]).removeClass('show2');
        $(ANIMATED_TV2[2]).removeClass('show2');
        $(VIDEO_TV).addClass("hidden");
        $(VIDEO_IMG2).addClass("hidden");
        $(LINE_VIDEO2[2]).removeClass("hidden");
        $(LINE_VIDEO2[1]).addClass("hidden");
        $(LINE_VIDEO2[0]).addClass("hidden");
        $(VIDEO_IMG2[2]).removeClass("hidden");
        $(VIDEO_TV[2]).removeClass("hidden");
        $(ANIMATED_TV2[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
        $(ANIMATED_TV2[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show2');
            }, 500 * index);
        });
    }); 2

    $('.animated-tv').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show2');
        }, 100 * index);
    });

    $('.animated-tv2').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show2');
        }, 100 * index);
    });



    $(ITEM_APPLIANCE[0]).click(function () {
        $(ANIMATED_APPLIANCE[3]).removeClass('show3');
        $(ANIMATED_APPLIANCE[0]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG).addClass("hidden");
        // $(LINE_APPLIANCE[0]).toggleClass("hidden");
        $(LINE_APPLIANCE[1]).addClass("hidden");
        $(LINE_APPLIANCE[2]).addClass("hidden");
        $(APPLIANCE_IMG[0]).removeClass("hidden");
        $(APPLIANCE[0]).removeClass("hidden");
        $(ANIMATED_APPLIANCE[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });

    $(ITEM_APPLIANCE2[0]).click(function () {
        $(ANIMATED_APPLIANCE[3]).removeClass('show3');
        $(ANIMATED_APPLIANCE[0]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG).addClass("hidden");
        $(LINE_APPLIANCE[0]).removeClass("hidden");
        $(LINE_APPLIANCE2[1]).addClass("hidden");
        $(LINE_APPLIANCE2[2]).addClass("hidden");
        $(APPLIANCE_IMG[0]).removeClass("hidden");
        $(APPLIANCE[0]).removeClass("hidden");
        $(ANIMATED_APPLIANCE[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });


    $(ITEM_APPLIANCE[1]).click(function () {
        $(ANIMATED_APPLIANCE[4]).removeClass('show3');
        $(ANIMATED_APPLIANCE[1]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG).addClass("hidden");
        $(LINE_APPLIANCE[1]).removeClass("hidden");
        $(LINE_APPLIANCE[0]).addClass("hidden");
        $(LINE_APPLIANCE[2]).addClass("hidden");
        $(APPLIANCE_IMG[1]).removeClass("hidden");
        $(APPLIANCE[1]).removeClass("hidden");

        $(ANIMATED_APPLIANCE[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });


    $(ITEM_APPLIANCE2[1]).click(function () {
        $(ANIMATED_APPLIANCE2[4]).removeClass('show3');
        $(ANIMATED_APPLIANCE2[1]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG2).addClass("hidden");
        $(LINE_APPLIANCE2[1]).removeClass("hidden");
        $(LINE_APPLIANCE2[0]).addClass("hidden");
        $(LINE_APPLIANCE2[2]).addClass("hidden");
        $(APPLIANCE_IMG2[1]).removeClass("hidden");
        $(APPLIANCE[1]).removeClass("hidden");

        $(ANIMATED_APPLIANCE2[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE2[4]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });



    $(ITEM_APPLIANCE[2]).click(function () {
        $(ANIMATED_APPLIANCE[5]).removeClass('show3');
        $(ANIMATED_APPLIANCE[2]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG).addClass("hidden");
        $(LINE_APPLIANCE[2]).removeClass("hidden");
        $(LINE_APPLIANCE[1]).addClass("hidden");
        $(LINE_APPLIANCE[0]).addClass("hidden");
        $(APPLIANCE_IMG[2]).removeClass("hidden");
        $(APPLIANCE[2]).removeClass("hidden");
        $(ANIMATED_APPLIANCE[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });


    $(ITEM_APPLIANCE2[2]).click(function () {
        $(ANIMATED_APPLIANCE2[5]).removeClass('show3');
        $(ANIMATED_APPLIANCE2[2]).removeClass('show3');
        $(APPLIANCE).addClass("hidden");
        $(APPLIANCE_IMG2).addClass("hidden");
        $(LINE_APPLIANCE2[2]).removeClass("hidden");
        $(LINE_APPLIANCE2[1]).addClass("hidden");
        $(LINE_APPLIANCE2[0]).addClass("hidden");
        $(APPLIANCE_IMG2[2]).removeClass("hidden");
        $(APPLIANCE[2]).removeClass("hidden");
        $(ANIMATED_APPLIANCE2[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
        $(ANIMATED_APPLIANCE2[5]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show3');
            }, 500 * index);
        });
    });

    $('.animated-appliance').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show3');
        }, 100 * index);
    });

    $('.animated-appliance2').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show3');
        }, 100 * index);
    });


    $(ITEM_SUSTA[0]).click(function () {
        $(ANIMATED_SUSTA[2]).removeClass('show4');
        $(ANIMATED_SUSTA[0]).removeClass('show4');
        $(SUSTA).addClass("hidden");
        $(IMG_SUSTA).addClass("hidden");
        $(LINE_SUSTA[0]).removeClass("hidden");
        $(LINE_SUSTA[1]).addClass("hidden");

        $(IMG_SUSTA[0]).removeClass("hidden");
        $(SUSTA[0]).removeClass("hidden");
        $(ANIMATED_SUSTA[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
        $(ANIMATED_SUSTA[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
    });

    $(ITEM_SUSTA[0]).click(function () {
        $(ANIMATED_SUSTA2[2]).removeClass('show4');
        $(ANIMATED_SUSTA2[0]).removeClass('show4');
        $(SUSTA).addClass("hidden");
        $(IMG_SUSTA2).addClass("hidden");
        $(LINE_SUSTA[0]).removeClass("hidden");
        $(LINE_SUSTA[1]).addClass("hidden");

        $(IMG_SUSTA2[0]).removeClass("hidden");
        $(SUSTA[0]).removeClass("hidden");
        $(ANIMATED_SUSTA2[2]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
        $(ANIMATED_SUSTA[0]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
    });

    $(ITEM_SUSTA[1]).click(function () {
        $(ANIMATED_SUSTA[3]).removeClass('show4');
        $(ANIMATED_SUSTA[1]).removeClass('show4');
        $(SUSTA).addClass("hidden");
        $(IMG_SUSTA).addClass("hidden");
        $(LINE_SUSTA[1]).removeClass("hidden");
        $(LINE_SUSTA[0]).addClass("hidden");

        $(IMG_SUSTA[1]).removeClass("hidden");
        $(SUSTA[1]).removeClass("hidden");

        $(ANIMATED_SUSTA[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
        $(ANIMATED_SUSTA[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
    });

    $(ITEM_SUSTA[1]).click(function () {
        $(ANIMATED_SUSTA2[3]).removeClass('show4');
        $(ANIMATED_SUSTA2[1]).removeClass('show4');
        $(SUSTA).addClass("hidden");
        $(IMG_SUSTA2).addClass("hidden");
        $(LINE_SUSTA[1]).removeClass("hidden");
        $(LINE_SUSTA[0]).addClass("hidden");

        $(IMG_SUSTA2[1]).removeClass("hidden");
        $(SUSTA[1]).removeClass("hidden");

        $(ANIMATED_SUSTA2[1]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
        $(ANIMATED_SUSTA2[3]).each(function (index) {
            setTimeout(() => {
                $(this).addClass('show4');
            }, 500 * index);
        });
    });

    $('.animated-Sustainability').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show4');
        }, 100 * index);
    });
    $('.animated-Sustainability2').each(function (index) {
        setTimeout(() => {
            $(this).addClass('show4');
        }, 100 * index);
    });
    function handleHover(index) {
        LINE_HIDE.addClass("hidden");
        OFFER_ONE.addClass("hidden");
        LINE_GRAY.addClass("hidden");
        IMG_LAST.addClass("hidden");

        $(LINE_HIDE[index]).removeClass("hidden");
        $(OFFER_ONE[index]).removeClass("hidden");
        $(LINE_GRAY[index]).removeClass("hidden");
        $(IMG_LAST[index]).removeClass("hidden");
    }

    CONTAINER_TEXT.each(function (index) {
        $(this).hover(
            function () {
                handleHover(index);
            }
        );
    });


    LABLE_SEARCH.click(function () {
        LABLE_CHILD.css("opacity", "0");
        LABLE_SEARCH.addClass("active");
    })

    const LINK_CONTENT = $(".link-content");
    const HIDE_CONTENT = $(".hide-content");
    const LINK_LESS = $(".link-less");








    LINK_CONTENT.each(function (index) {
        $(this).click(function () {
            $(this).addClass("hidden");
            $(HIDE_CONTENT[index]).toggleClass("hidden");

        });
    });


    LINK_LESS.each(function (index) {
        $(this).click(function () {
            $(LINK_CONTENT[index]).toggleClass("hidden");
            $(HIDE_CONTENT[index]).toggleClass("hidden");

        });
    });


    const ICON_CONTENT = $(".icon-content");
    const ICON_CONTENT2 = $(".icon-content2");
    const HEADER_CONTENT = $(".header-content");
    const DISCLOSURE = $(".parent-disclosures");

    function toggleVisibility(index) {
        $(ICON_CONTENT[index]).toggleClass("hidden");
        $(ICON_CONTENT2[index]).toggleClass("hidden");
        $(DISCLOSURE[index]).toggleClass("hidden");
    }


    ICON_CONTENT.each(function (index) {
        $(this).click(function () {
            toggleVisibility(index);
        });
    });


    HEADER_CONTENT.each(function (index) {
        $(this).click(function () {
            toggleVisibility(index);
        });
    });
    ICON_CONTENT2.each(function (index) {
        $(this).click(function () {
            toggleVisibility(index);
        });
    });


    $(window).scroll(function () {
        // ارتفاع کل صفحه
        var documentHeight = $(document).height();
        // ارتفاع پنجره (viewport)
        var windowHeight = $(window).height();
        // موقعیت اسکرول فعلی
        var scrollTop = $(this).scrollTop();

        // بررسی اینکه آیا به انتهای صفحه رسیده‌ایم
        if (scrollTop + windowHeight >= documentHeight - 100) {
            $('.link-footer').fadeIn(); // دکمه را نشان بده
        } else {
            $('.link-footer').fadeOut(); // دکمه را پنهان کن
        }
    });

    // وقتی کاربر بر روی دکمه کلیک می‌کند
    $('.link-footer').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800); // اسکرول به بالا
        return false;
    });

});



