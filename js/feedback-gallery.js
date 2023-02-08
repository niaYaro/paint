let feedbackGallery = new Swiper('.feedback-gallery', {
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

let clientGallery = new Swiper('.client-gallery', {

})

clientGallery.controller.control = feedbackGallery;
feedbackGallery.controller.control = clientGallery;