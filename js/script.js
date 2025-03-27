  
var typed = new Typed('#element', {
  strings: ['<i>Sua Empresa</i>', '<i>Seu Negócio</i>', '<i>Seu Projeto</i>', '<i>Sua Presença Online</i>', '<i>Seu Sucesso</i>', '<i>Para VOCÊ!</i>','<i> Criação de Site</i>'],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true
});

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',    // Infinite looping
    perPage: 3,      // Show 3 slides at once
    perMove: 1,     // Move 1 slide at a time
    gap: '1rem',
    autoplay: true,          // Habilita o autoplay
    interval: 2000,          // Tempo em milissegundos (3 segundos)
    pauseOnHover: true,      // Pausa ao passar o mouse
    pauseOnFocus: true,      // Pausa ao focar (útil para acessibilidade)
    resetProgress: false,    // Não reinicia o progresso ao mudar de slide
    // Space between slides
    breakpoints: {   // Responsive settings
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      }
    }
  });
  splide.mount();
});
