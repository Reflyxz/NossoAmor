// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Vou caçar mais de um milhão de vagalumes por aí", time: 10 },
  { text: "Pra te ver sorrir, eu posso colorir o céu de outra cor", time: 15 },
  { text: "Eu só quero amar você", time: 19 },
  { text: "E quando amanhecer, eu quero acordar do seu lado", time: 25 },
  { text: "Vou escrever mais de um milhão de canções pra você ouvir", time: 28 },
  { text: "Que meu amor é teu, teu sorriso me faz sorrir", time: 30 },
  { text: "Eu vou de Marte até a Lua", time: 33 },
  { text: "Cê sabe, já tô na tua", time: 34 },
  { text: "E não cabe tanta saudade", time: 36 },
  { text: "Essa verdade nua e crua", time: 38 },
  { text: "Eu sei o que eu faço, nosso caminho, eu traço", time: 40 },
  { text: "Um casal fora da lei, ocupando o mesmo espaço", time: 43 },
  { text: "Se eu tô contigo, não ligo se o Sol não aparecer", time: 46 },
  { text: "É que não faz sentido caminhar sem dar a mão pra você", time: 48 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);