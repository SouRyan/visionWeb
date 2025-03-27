const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});

function alerta(){
  alert('Logo entraremos em Contato, Fique atento ao Email Cadastrado!')
}