function Menu() {
    const menu = document.querySelector(".navbar-nav");
    const icon = document.querySelector(".navbar-toggler-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function ReproducirVideo() {
    var anchoPantalla = window.innerWidth;
  var altoPantalla = window.innerHeight;

  // Calcular las coordenadas para centrar la ventana emergente
  var izquierda = (anchoPantalla - 800) / 2; // Ancho de la ventana emergente
  var arriba = (altoPantalla - 600) / 2; // Alto de la ventana emergente
    var ventana = window.open("", "Video", "width=670,height=380,left=" + izquierda + ",top=" + arriba);
    ventana.document.write(`
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
    </style>
    <div id="contenedorVideo">
    <video width="640" height="360" controls>
      <source src="assets/0414.mp4" type="video/mp4">
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
    `);
  }