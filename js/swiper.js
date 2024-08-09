const swiper = new Swiper('.swiper', {
    
    // Основные настройки
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slider',
    slidesPerView: 'auto',
    centeredSlides: true,
   
  
    // Пагинация - квадратики
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
      
    // },
  
    // Стрелочки
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

    // Автоперелистывание
    //autoplay: {
       // delay: 2000,
    //}
  
  });