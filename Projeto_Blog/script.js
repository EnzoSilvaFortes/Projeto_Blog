const quotes = [
  "A tecnologia move o mundo — e quem domina o código, move a tecnologia.",
  "Cada erro é um passo a mais rumo ao aprendizado. Continue tentando!",
  "Todo grande programador já foi um iniciante que não desistiu.",
  "Aprender a programar é como aprender a criar o futuro com suas próprias mãos.",
  "Não é sobre ser gênio, é sobre ser curioso e persistente."
];

document.getElementById('new-quote').addEventListener('click', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quote;
});
