onload = () =>{
    document.body.classList.remove("container");
};

 // Seleciona o elemento do botão no HTML usando a sua classe
 const botaoRedirecionar = document.querySelector('.botao-proximo');

 // Adiciona um "escutador de evento" que espera por um clique no botão
 botaoRedirecionar.addEventListener('click', function() {
     
     // Quando o clique acontece, esta função é executada
     console.log("Botão clicado! Redirecionando agora...");

     // IMPORTANTE: Troque 'sua-proxima-pagina.html' pelo nome do seu arquivo de destino
     window.location.href = 'nossaPag.html';
 });







 document.querySelector(".heart").addEventListener("mousemove", (e) => {
    const particles = document.createElement("div");
    particles.className = "particle";
    particles.style.left = e.clientX + "px";
    particles.style.top = e.clientY + "px";
  
    const colors = ["#ff3a7f", "#ff0a6c", "#ff6b9e", "#ff9ec4"];
    particles.style.background =
      colors[Math.floor(Math.random() * colors.length)];
  
    const size = Math.random() * 15 + 5;
    particles.style.width = size + "px";
    particles.style.height = size + "px";
  
    particles.style.setProperty("--random-x", Math.random() * 2 - 1);
    particles.style.setProperty("--random-y", Math.random() * 2 - 1);
  
    document.body.appendChild(particles);
  
    setTimeout(() => {
      particles.remove();
    }, 1500);
  });
  