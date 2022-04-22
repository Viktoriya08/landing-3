const widthWindov = window.innerWidth; /* удалить тут или в коде ниже, когда его раскоментирую */

/* const sliderBenefits = document.querySelector('.benefits-swiper');
const sliderChild = document.querySelector('.benefits-wrap');
const sliderChildEl = document.querySelectorAll('.swiper-slide');
document.addEventListener('DOMContentLoaded', () => {
    const widthWindov = window.innerWidth
    if (width < 1249){
        sliderBenefits = new Swiper('.benefits-swiper',{
        loop: true,
        infinity: false,
        spaceBetween: 10,
        slidesPerView: 1,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });
    } else{
        sliderBenefits.classList.remove("swiper");
        sliderChild.classList.remove("swiper-wrapper");
        sliderChildEl.forEach((el=>{
            el.classList.remove("swiper-slide");
        }));
        
    }
  }) */
/* trends__slider */
sliderTrends = new Swiper('.trends__slider',{
    loop: true,
    infinity: false,
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
});
/*  / trends__slider */

/* reviews-slider */
new Swiper('.reviews-slider',{
    loop: true,
    infinity: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.reviews__btn-prev',
        prevEl: '.reviews__btn-next'
    },
});
/* / reviews-slider */

/* карточка товара -кнопка Like */
const likeBtns = document.querySelectorAll('.like');

if(likeBtns){

    likeBtns.forEach((likeBtn)=>{

        likeBtn.addEventListener('click', (event)=>{
            likeBtn.classList.toggle('active');
        });

    });

};
/* / карточка товара -кнопка Like */

/* footer-menu__list - открытие меню  */
const footerMenuLists = document.querySelectorAll(' .footer-menu__list');

if(footerMenuLists && widthWindov < 767){

    footerMenuLists.forEach((menuList) =>{
        menuList.addEventListener('click', (event)=>{
            menuList.classList.toggle('open');
        });
    });

};

/* / footer-menu__list - открытие меню  */

///////////////////////////////////////////////////////
