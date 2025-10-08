//Escribe el texto de pagina inicio

const texto = '<input...\n   type="front"\n   class="dev"\n   name="Marcy"\n   required>';
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
    setTimeout(escribir, 50);
  } else {
    btnHired.style.display = "inline-block"; //aparece
    btnHired.style.opacity = 0;
    btnHired.style.transition = "opacity 1s ease"; 
    setTimeout(() => {
      btnHired.style.opacity = 1;
    }, 100);
    btnHired.addEventListener("click", () => {
      window.location.href = "/main.html";
    });
  }
}

escribir();




