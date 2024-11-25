function pare() {
    document.querySelector("#vermelho").classList.remove("luz");
    document.querySelector("#amarela").classList.add("luz");
    document.querySelector("#verde").classList.add("luz");
}

function atencao() {
    document.querySelector("#vermelho").classList.add("luz");
    document.querySelector("#amarela").classList.remove("luz");
    document.querySelector("#verde").classList.add("luz");
}

function siga() {
    document.querySelector("#vermelho").classList.add("luz");
    document.querySelector("#amarela").classList.add("luz");
    document.querySelector("#verde").classList.remove("luz");
}

function autoSemaforo() {
    setInterval(() => {
        pare();
        setTimeout(() => {
            atencao();
        }, 3000);

        setTimeout(() => {
            siga();
        }, 5000);

    }, 8000);
};
