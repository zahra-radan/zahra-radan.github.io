const OVERLAY = document.querySelector(".overlay");
const BTN = document.querySelector("button");
const OFFCANVAS = document.querySelector(".menu-smal");
const ITEM_HAMBERGER = document.querySelector(".item-hamberger");
const ICON_HAMBERGER = document.querySelectorAll(".icon-hamberger");
const ICON = document.querySelector(".close");
const ICON_LEFT = document.querySelector(".icon-left-hamberger");
const SEARCH_HAMBERGER = document.querySelector(".search-hamberger")
const ICON_TWO = document.querySelector(".close-two");
const HAMBERGER = document.querySelector(".hamberger");
const BODY = document.querySelector("body");
const SEARCH_INPUT = document.getElementById("search-input");
const NEW_CONTENT = document.querySelector(".new-content");
const LINK_HEAD = document.querySelector(".link-head2");
const CONTENT_SHOP = document.querySelector(".content-shop");
const CONTENT_AI = document.querySelector(".content-ai");
const CONTENT_DISCOVER = document.querySelector(".content-discover");
const CONTAINER_MOBILE = document.querySelectorAll(".container-mobile");
const ARROW_MOBILE = document.querySelector(".arrow-mobile");
const ARROW_MOBILE2 = document.querySelector(".arrow-mobile2");
const IMG_DISCOVER = document.querySelectorAll(".img-discover");
const CONTENT_TV = document.querySelector(".content-tv");
const CONTENT_APPLIANACE = document.querySelector(".content-applianace");
const CONTENT_COMOUTING = document.querySelector(".content-comouting");
const CONTENT_DISPLAY = document.querySelector(".content-display");
const CONTENT_ACCESSORY = document.querySelector(".content-accessory");
const CONTENT_EXPLORE = document.querySelector(".content-explore");
const CONTENT_SUPPORT = document.querySelector(".content-support");
const CONTENT_BUSINESS = document.querySelector(".content-business");
const SLIDER = ["../images/image01.webp", "../images/image02.webp", "../images/image03.webp", "../images/image04.webp", "../images/image05.webp"];
const ICON_PLAY = $(".icon-play2");
const ICON_PAUSE = $(".icon-pause2");
const IMG_LOAD = $(".img-load2");
const TEXT_LOAD = $(".text-load2");
const FILL = $(".fill2");
const IMG_SLIDER = $(".img_slider2");
const TITLE_IMG = $(".title-img2");
const PRICE_IMG = $(".price-img2");
const DESCRIPTION_IMG = $(".description-img2");
const DEAL_IMG = $(".deal-img2");
const BTN_IMG = $(".btn-img2");
const ITEM_DISCOVER2 = document.querySelectorAll(".item-discover2");
const PARENT_DISCOVER2 = document.querySelector(".parent-discover");
const scrollbar = document.querySelector('.scrollbar-horizontal__bar');
const parentImg = document.querySelector('.parent-img');
const scrollbarContainer = document.querySelector('.scrollbar-horizontal');
const IMG_LOAD3 = document.querySelectorAll('.img-load3');
const GIFT = document.querySelectorAll('.gift');
const FILL3 = document.querySelectorAll('.fill3');
const IMG_LOAD4 = document.querySelectorAll(".img-load4");
const EXPLORE = document.querySelectorAll(".explore");
const ICON_FOOTER = document.querySelectorAll(".icon-footer");
const SHOW_FOOTER = document.querySelectorAll(".show-footer");
let isDragging = false;
let startX;
let scrollLeft;
let fill_width = 0;
let is_running = true;
let active_index = 0;
let key;

let opacity = 0;
let currentIndex = 0;

HAMBERGER.addEventListener("click", function () {
    HAMBERGER.classList.toggle("hidden");
    ICON.classList.toggle("hidden");
    OFFCANVAS.classList.remove("hidden");
    BODY.classList.toggle('no-scroll');
    SEARCH_INPUT.style.padding = "25px";
    SEARCH_INPUT.style.width = "98%";

});

ICON_TWO.addEventListener("click", function () {
    HAMBERGER.classList.remove("hidden");
    OFFCANVAS.classList.add("hidden");
    BODY.classList.remove('no-scroll');
    ICON.classList.add("hidden");
});

SEARCH_INPUT.addEventListener("click", function () {
    ICON_TWO.classList.add("hidden");
    this.setAttribute("placeholder", "Galaxy Z Fold6");
    this.style.width = "93%";
    this.style.fontSize = "12px";
    this.style.padding = "50px";
    this.style.marginLeft = "50px";
    SEARCH_HAMBERGER.style.right = "70%";
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "10px";
    LINK_HEAD.classList.add("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    NEW_CONTENT.classList.remove("hidden");
    CONTENT_SHOP.classList.add("hidden");
    CONTENT_AI.classList.add("hidden");
    CONTENT_DISCOVER.classList.add("hidden");
    CONTENT_TV.classList.add("hidden");
    CONTENT_APPLIANACE.classList.add("hidden");
    CONTENT_COMOUTING.classList.add("hidden");
    CONTENT_DISPLAY.classList.add("hidden");
    CONTENT_ACCESSORY.classList.add("hidden");
    CONTENT_EXPLORE.classList.add("hidden");
    CONTENT_SUPPORT.classList.add("hidden");
    CONTENT_BUSINESS.classList.add("hidden");
});

ICON_LEFT.addEventListener("click", function () {
    this.classList.add("custom-outline")
    NEW_CONTENT.classList.add("hidden");
    ICON_TWO.classList.remove("hidden");
    LINK_HEAD.classList.remove("hidden");
    ITEM_HAMBERGER.classList.remove("hidden");
    ICON_LEFT.classList.add("hidden");
    CONTENT_SHOP.classList.add("hidden");
    CONTENT_AI.classList.add("hidden");
    CONTENT_DISCOVER.classList.add("hidden");
    CONTENT_TV.classList.add("hidden");
    CONTENT_APPLIANACE.classList.add("hidden");
    CONTENT_COMOUTING.classList.add("hidden");
    CONTENT_DISPLAY.classList.add("hidden");
    CONTENT_ACCESSORY.classList.add("hidden");
    CONTENT_EXPLORE.classList.add("hidden");
    CONTENT_SUPPORT.classList.add("hidden");
    CONTENT_BUSINESS.classList.add("hidden");
    SEARCH_INPUT.style.width = "95%";
    SEARCH_INPUT.style.marginLeft = "0";
    SEARCH_HAMBERGER.style.right = "84%";
});

ICON_HAMBERGER[0].addEventListener("click", function () {
    CONTENT_SHOP.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.top = "-1px";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[1].addEventListener("click", function () {
    CONTENT_AI.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[2].addEventListener("click", function () {
    CONTENT_DISCOVER.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[3].addEventListener("click", function () {
    CONTENT_TV.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[4].addEventListener("click", function () {
    CONTENT_APPLIANACE.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[5].addEventListener("click", function () {
    CONTENT_COMOUTING.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[6].addEventListener("click", function () {
    CONTENT_DISPLAY.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[7].addEventListener("click", function () {
    CONTENT_ACCESSORY.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[8].addEventListener("click", function () {
    CONTENT_EXPLORE.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});


ICON_HAMBERGER[9].addEventListener("click", function () {
    CONTENT_SUPPORT.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});

ICON_HAMBERGER[10].addEventListener("click", function () {
    CONTENT_BUSINESS.classList.remove("hidden");
    ITEM_HAMBERGER.classList.add("hidden");
    LINK_HEAD.classList.add("hidden");
    ICON_LEFT.classList.remove("hidden");
    ICON_LEFT.style.left = "0";
    ICON_LEFT.style.fontSize = "21px";
    SEARCH_INPUT.style.width = "90%";
    SEARCH_INPUT.style.marginLeft = "30px";
    SEARCH_HAMBERGER.style.right = "77%";
});


function updateSlider() {
    const offset = currentIndex * 50;
    CONTAINER_MOBILE[2].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[1].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[0].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[3].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[2].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[1].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[4].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[3].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[2].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[5].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[4].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[3].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[6].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[5].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[4].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[7].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[6].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[5].style.transform = `translateX(-${offset}px)`;

    CONTAINER_MOBILE[8].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[7].style.transform = `translateX(-${offset}px)`;
    CONTAINER_MOBILE[6].style.transform = `translateX(-${offset}px)`;


};

ARROW_MOBILE.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        console.log("ddd")
    } else {
        currentIndex++;
        updateSlider();
    }
});

ARROW_MOBILE2.addEventListener('click', function () {
    if (currentIndex < IMG_DISCOVER.length - 1) {
        currentIndex++;
        updateSlider();
        console.log("ddd")
    } else {
        currentIndex--;
        updateSlider();
    }
    ARROW_MOBILE.classList.remove("hidden");
});



const TEXTES2 = [
    {
        TITLE_IMG: '',
        PRICE_IMG: ' Save $1,500+',
        DESCRIPTION_IMG: 'On Bespoke Refrigerator with AI Family Hub™. Plus, get $1 Samsung Credit<sup>o</sup>, 2 years of Samsung Care for <del>$169.99</del><sup>β</sup>and installation on us.',
        DEAL_IMG: 'refrigerator deals',
        BTN_IMG: 'Buy now'
    },

    {
        TITLE_IMG: 'Deal of the Day',
        PRICE_IMG: ' Save up to $1,773+',
        DESCRIPTION_IMG: ' On QLED QE1D TV. Plus, get TV mounting on us.<sup>∝</sup> From $311.35 <del>$999.99</del> or $12.97/mo for 24 mos.<sup>⊕σ○</sup>',
        DEAL_IMG: 'Shop TV deals',
        BTN_IMG: 'Buy now'
    },

    {
        TITLE_IMG: 'Deal of the Day',
        PRICE_IMG: 'Save $600',
        description: 'On 32" Odyssey Neo G7 Curved Gaming Monitor.',
        DEAL_IMG: 'Shop monitor deals',
        BTN_IMG: 'Buy now'
    },

    {
        TITLE_IMG: '',
        PRICE_IMG: 'Save $400+ on 65" Class The Frame',
        DESCRIPTION_IMG: 'Plus, get $50 Samsung Credit with eligible purchase. Now $1,599.99 <del>$1,999.99</del>$66.67/mo for 24 mos.<sup>⊕σ○</sup>',
        DEAL_IMG: 'Shop TV deals',
        BTN_IMG: 'Buy now'
    },

    {
        TITLE_IMG: 'Deal of the Day',
        PRICE_IMG: 'Save up to $1,375+',
        DESCRIPTION_IMG: ' Get up to $1,200 instant trade-in credit<sup>θ</sup> toward Galaxy Z Fold6 or up to $500 off without trade-in <sup>¤</sup>.',
        DEAL_IMG: 'Shop phone deals',
        BTN_IMG: 'Buy now'
    },

];

function updateSlider2() {
    const SLIDE2 = TEXTES2[active_index];
    IMG_SLIDER.attr("src", SLIDER[active_index]);
    TITLE_IMG.text(SLIDE2.TITLE_IMG);
    PRICE_IMG.text(SLIDE2.PRICE_IMG);
    DESCRIPTION_IMG.html(SLIDE2.DESCRIPTION_IMG);
    DEAL_IMG.text(SLIDE2.DEAL_IMG);
    BTN_IMG.text(SLIDE2.BTN_IMG);
}


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
        updateSlider2();
    }
}

function start(index) {
    key = setInterval(() => increase(FILL[index]), 30);
}


start(active_index);


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


ITEM_DISCOVER2[1].addEventListener("click", function () {

    ITEM_DISCOVER2[0].style.marginLeft = "-20px";

})

ITEM_DISCOVER2[2].addEventListener("click", function () {
    ITEM_DISCOVER2[0].style.marginLeft = "-80px";
    ITEM_DISCOVER2[1].style.marginLeft = "-10px";

})


ITEM_DISCOVER2[3].addEventListener("click", function () {
    ITEM_DISCOVER2[0].style.marginLeft = "-160px";
    ITEM_DISCOVER2[1].style.marginLeft = "-70px";
    ITEM_DISCOVER2[2].style.marginLeft = "-20px";
})


ITEM_DISCOVER2[4].addEventListener("click", function () {
    ITEM_DISCOVER2[2].style.marginLeft = "-160px";
    ITEM_DISCOVER2[3].style.marginLeft = "-20px";

})


scrollbar.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollbar.offsetLeft;
    scrollLeft = parentImg.scrollLeft;
    scrollbar.style.transition = 'none';
});


scrollbar.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollbar.offsetLeft;
    const move = x - startX;


    const newScrollLeft = scrollLeft + move;


    const maxScrollLeft = parentImg.scrollWidth - parentImg.clientWidth;
    scrollbar.style.left = `${Math.min(Math.max(newScrollLeft / maxScrollLeft * scrollbarContainer.clientWidth, 0), scrollbarContainer.clientWidth - scrollbar.offsetWidth)}px`;

    parentImg.scrollLeft = newScrollLeft;
});


scrollbar.addEventListener('mouseup', () => {
    isDragging = false;
    scrollbar.style.transition = 'left 0.1s ease';
});


scrollbar.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollbar.style.transition = 'left 0.1s ease';
});


scrollbar.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollbar.offsetLeft;
    const move = (x - startX) * 4;


    const newScrollLeft = scrollLeft + move;


    const maxScrollLeft = parentImg.scrollWidth - parentImg.clientWidth;
    const newPosition = Math.max(0, Math.min(newScrollLeft / maxScrollLeft * scrollbarContainer.clientWidth, scrollbarContainer.clientWidth - scrollbar.offsetWidth));
    scrollbar.style.left = `${newPosition}px`;

    parentImg.scrollLeft = newScrollLeft;
});

// function close_overlay() {
//     OFFCANVAS.classList.remove("show-offcanvas");
//     let key = setInterval(function () {
//         opacity -= 5;
//         OVERLAY.style.opacity = `${opacity}%`;
//         if (opacity <= 0) {
//             clearInterval(key);
//         }
//     }, 1);
//     setTimeout(function () {
//         OVERLAY.classList.remove("show-overlay");
//     }, 300);
// }

// BTN.addEventListener("click", function () {
//     OVERLAY.classList.add("show-overlay");
//     let key = setInterval(function () {
//         opacity += 5;
//         OVERLAY.style.opacity = `${opacity}%`;
//         if (opacity >= 100) {
//             clearInterval(key);
//         }
//     }, 1);
//     OFFCANVAS.classList.add("show-offcanvas");
// });

// ICON.addEventListener("click", close_overlay);

// document.addEventListener("click", function (gholi) {
//     if (gholi.target == OVERLAY) {
//         close_overlay();
//     }
// });

IMG_LOAD3[1].addEventListener("click", function () {
    GIFT[1].classList.remove("hidden");
    GIFT[0].classList.add("hidden");
    IMG_LOAD3[1].style.backgroundColor = "black";
    IMG_LOAD3[0].classList.remove("custom-bg");
    IMG_LOAD3[0].style.backgroundColor = "";
});
IMG_LOAD3[2].addEventListener("click", function () {
    GIFT[2].classList.remove("hidden");
    GIFT[1].classList.add("hidden");
    IMG_LOAD3[2].style.backgroundColor = "black";
    IMG_LOAD3[1].style.backgroundColor = "";
    IMG_LOAD3[0].style.backgroundColor = "";
});
IMG_LOAD3[3].addEventListener("click", function () {
    GIFT[3].classList.remove("hidden");
    GIFT[2].classList.add("hidden");
    IMG_LOAD3[3].style.backgroundColor = "black";
    IMG_LOAD3[2].style.backgroundColor = "";
    IMG_LOAD3[0].style.backgroundColor = "";
});
IMG_LOAD3[0].addEventListener("click", function () {
    GIFT[0].classList.remove("hidden");
    GIFT[3].classList.add("hidden");
    IMG_LOAD3[0].style.backgroundColor = "black";
    IMG_LOAD3[3].style.backgroundColor = "";
});



IMG_LOAD4[1].addEventListener("click", function () {
    EXPLORE[0].classList.add("hidden");
    IMG_LOAD4[1].style.backgroundColor = "black";
    IMG_LOAD4[0].classList.remove("custom-bg");
    IMG_LOAD4[0].style.backgroundColor = "";

})
IMG_LOAD4[2].addEventListener("click", function () {
    EXPLORE[1].classList.add("hidden");
    IMG_LOAD4[2].style.backgroundColor = "black";
    IMG_LOAD4[1].style.backgroundColor = "";
    IMG_LOAD4[0].style.backgroundColor = "";
})
IMG_LOAD4[3].addEventListener("click", function () {
    EXPLORE[2].classList.add("hidden");
    IMG_LOAD4[3].style.backgroundColor = "black";
    IMG_LOAD4[2].style.backgroundColor = "";
    IMG_LOAD4[0].style.backgroundColor = "";
})
IMG_LOAD4[0].addEventListener("click", function () {
    EXPLORE[0].classList.remove("hidden");

    IMG_LOAD4[0].style.backgroundColor = "black";
    IMG_LOAD4[3].style.backgroundColor = "";
})

ICON_FOOTER[0].addEventListener("click", function () {
    SHOW_FOOTER[0].classList.remove("hidden");
    ICON_FOOTER[0].classList.add("hidden");
    ICON_FOOTER[1].classList.remove("hidden");
});
ICON_FOOTER[1].addEventListener("click", function () {
    SHOW_FOOTER[0].classList.add("hidden");
    ICON_FOOTER[1].classList.add("hidden");
    ICON_FOOTER[0].classList.remove("hidden");
});
ICON_FOOTER[2].addEventListener("click", function () {
    SHOW_FOOTER[1].classList.remove("hidden");
    ICON_FOOTER[2].classList.add("hidden");
    ICON_FOOTER[3].classList.remove("hidden");
});
ICON_FOOTER[3].addEventListener("click", function () {
    SHOW_FOOTER[1].classList.add("hidden");
    ICON_FOOTER[3].classList.add("hidden");
    ICON_FOOTER[2].classList.remove("hidden");
});

ICON_FOOTER[4].addEventListener("click", function () {
    SHOW_FOOTER[2].classList.remove("hidden");
    ICON_FOOTER[4].classList.add("hidden");
    ICON_FOOTER[5].classList.remove("hidden");
});
ICON_FOOTER[5].addEventListener("click", function () {
    SHOW_FOOTER[2].classList.add("hidden");
    ICON_FOOTER[5].classList.add("hidden");
    ICON_FOOTER[4].classList.remove("hidden");
});
ICON_FOOTER[6].addEventListener("click", function () {
    SHOW_FOOTER[3].classList.remove("hidden");
    ICON_FOOTER[6].classList.add("hidden");
    ICON_FOOTER[7].classList.remove("hidden");
});
ICON_FOOTER[7].addEventListener("click", function () {
    SHOW_FOOTER[2].classList.add("hidden");
    ICON_FOOTER[7].classList.add("hidden");
    ICON_FOOTER[6].classList.remove("hidden");
});