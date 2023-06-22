let headerBtn = $('.header__button');
let overlay = $('.overlay');
let popupClose = $('.popup__close');
let popupFormBtn = $('.popup__form-btn');

headerBtn.on('click', function () {
   console.log('click')
   // overlay.style = 'display: flex'
   overlay.fadeIn('slow')
})

popupClose.on('click', function () {
   overlay.fadeOut('slow')
})

popupFormBtn.on('click', function (e) {
   e.preventDefault
   overlay.fadeOut('slow')
})

overlay.on('click', function (e) {
   e.preventDefault
   if (e.target.className === "overlay") {
      overlay.fadeOut('slow')
   }
})

let ul = $('ul.review__list');
ul.on('click', 'li:not(review__item_active)', function () {
   $(this)
      .addClass('review__item_active').siblings().removeClass('review__item_active')
      .closest('div.review__tabs').find('div.review__content').removeClass('review__content_active').eq($(this).index()).addClass('review__content_active');
});

let owl = $('.owl-carousel');
owl.owlCarousel({
   items: 3,
   margin: 20,
   dotsContainer: "#dots",
   loop: true,
   autoplay: false,
   autoHeight: true, //высота подстраивается под контент
   responsive: {
      1440: {
         items: 3,
      },
      765: {
         items: 2,
         //stagePadding: 50, //видимость соседних элементов
      },
      576: {
         items: 1,
         stagePadding: 50,
      },
   }
});
// Go to the next item
$('.owl-next').click(function () {
   owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function () {
   // With optional speed parameter
   // Parameters has to be in square bracket '[]'
   owl.trigger('prev.owl.carousel', [300]);
})

$('.owl-dot').click(function () {
   owl.trigger('to.owl.carousel', [$(this).index(), 300]);
})


let map;
DG.then(function () {
   map = DG.map('map', {
      center: [54.8600098, 83.105393],
      zoom: 17
   });
   // let myIcon = DG.icon({
   //    iconUrl: '../images/map/marker2.svg',
   //    iconSize: [38, 50]
   // });
   // DG.marker([54.8600098, 83.105393], { icon: myIcon }).addTo(map);
   DG.marker([54.8600098, 83.105393]).addTo(map).bindPopup('ЭДЭМ').bindLabel('Я статическая подсказка!', { static: false });
});



