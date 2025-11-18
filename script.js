function verificar() {
    let input = document.getElementById("codigo").value;
    let mensaje = document.getElementById("mensaje");

    if (input === "16") {
        mensaje.textContent = "¡Correcto! La puerta se abre y escapas 🎉";
        mensaje.style.color = "lightgreen";

        let animacion = document.getElementById("animacionPuerta");
        animacion.classList.remove("oculto");

        setTimeout(() => {
            document.querySelector(".izquierda").classList.add("abre-izq");
            document.querySelector(".derecha").classList.add("abre-der");
        }, 200);

        // OPCIONAL: redirigir después de abrir la puerta
        // setTimeout(() => window.location.href = "siguiente_nivel.html", 2500);

    } else {
        mensaje.textContent = "Código incorrecto... sigue observando 👀";
        mensaje.style.color = "orange";
    }
}
