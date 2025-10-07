//Escribe el texto de pagina incio

const texto = '<label...>\n...\n<input...\n   type="front"\n   class="dev"\n   name="Marcy"\n   required>';
const contenedor = document.getElementById("div-intro");
const btnHired = document.getElementById("btn-hired");

let i = 0;
const cursor = document.createElement("span");
cursor.id = "cursor";
contenedor.appendChild(cursor);

function escribir() {
  if (i < texto.length) {
    cursor.insertAdjacentText("beforebegin", texto[i]);
    i++;
    setTimeout(escribir, 100);
  } else {
    btnHired.style.display = "inline-block"; // Muestra el botón al terminar
    btnHired.addEventListener("click", () => {
    window.location.href = "/pages/main.html";
});
  }
}

escribir();


