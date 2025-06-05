let preguntas = [];
let actual = 0;

fetch('preguntas.json')
  .then(res => res.json())
  .then(data => {
    preguntas = data;
    mostrarPregunta();
  });

function mostrarPregunta() {
  if (actual < preguntas.length) {
    document.getElementById('question').textContent = preguntas[actual].pregunta;
    document.getElementById('feedback').textContent = '';
  } else {
    document.body.innerHTML = "<h2>Juego terminado</h2>";
  }
}

function responder(user) {
  const correcta = preguntas[actual].respuesta.toLowerCase();
  const feedback = document.getElementById('feedback');

  if (user === correcta) {
    feedback.textContent = "¡Correcto!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrecto.";
    feedback.style.color = "red";
  }

  actual++;
  setTimeout(mostrarPregunta, 1000);
}