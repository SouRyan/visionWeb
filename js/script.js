
var typed = new Typed('#element', {
  strings: ['<i>Sua Empressa</i>', '<i>Seu Negócio</i>', '<i>Seu Projeto</i>', '<i>Sua Presença Online</i>', '<i>Seu Sucesso</i>', '<i>Para VOCÊ!</i>'],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  // loopAdditionalSlides: 1,  // Isso cria um slide adicional para garantir a transição suave
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

