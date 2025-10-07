//Escribe el texto de pagina incio

const texto = '<label...>\n...\n<input...\n   type="front"\n   class="dev"\n   name="Marcy"\n   required>';
const contenedor = document.getElementById("div-intro");

let i = 0;
const cursor = document.createElement("span");
cursor.id = "cursor";
contenedor.appendChild(cursor);

function escribir() {
  if (i < texto.length) {
    cursor.insertAdjacentText("beforebegin", texto[i]);
    i++;
    setTimeout(escribir, 100);
  }
}

escribir();

