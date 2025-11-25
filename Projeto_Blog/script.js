const quotes = [
  "A tecnologia move o mundo — e quem domina o código, move a tecnologia.",
  "Cada erro é um passo a mais rumo ao aprendizado. Continue tentando!",
  "Todo grande programador já foi um iniciante que não desistiu.",
  "Aprender a programar é como aprender a criar o futuro com suas próprias mãos.",
  "Não é sobre ser gênio, é sobre ser curioso e persistente.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia! 💪",
  "Na tecnologia, cada problema é uma oportunidade de aprendizado! 🚀",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário! 📚",
  "Você não precisa ser grande para começar, mas precisa começar para ser grande! 🌟",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência! 🧠",
  "A persistência é o caminho do êxito! 🏆",
  "Seu único limite é você mesmo! 💫",
  "A tecnologia move o mundo - e você pode ser parte disso! 💻",
  "Cada expert já foi um iniciante que não desistiu! 🔥",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos! ✨"
];

document.getElementById('new-quote').addEventListener('click', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quote;
});

        // Smooth scroll para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Efeito de revelação ao scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        // Aplicar efeito nas seções
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
          
