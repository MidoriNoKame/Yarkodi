const swiper = new Swiper('.swiper', {
    
    // Основные настройки
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slider',
    slidesPerView: 2,
    centeredSlides: true,
  
  
    // Пагинация - квадратики
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
      
    // },
  
    // Стрелочки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Автоперелистывание
    //autoplay: {
       // delay: 2000,
    //}
  
  });