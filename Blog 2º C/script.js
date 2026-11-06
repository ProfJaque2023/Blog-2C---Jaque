const botoes = document.querySelectorAll(".btn-reacao");

botoes.forEach(function (botao) {
    let curtiu = false;
    const texto = botao.querySelector("span");

    botao.addEventListener("click", function () {
        if (!curtiu) {
            texto.textContent++;
            curtiu = true;
            botao.classList.add("curtido");
        } else {
            texto.textContent--;
            curtiu = false;
            botao.classList.remove("curtido");
        }
    });
});