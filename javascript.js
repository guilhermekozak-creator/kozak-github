// Banco simples de informações
const arquivos = {

    "Agatha": `
        Agatha é uma personagem registrada nos arquivos da organização.
        Este espaço pode ser utilizado para colocar informações sobre
        sua história, habilidades, relações e participação nos casos.
    `,

    "Agente Desconhecido": `
        Este arquivo contém informações sobre um agente cuja identidade
        ainda não foi completamente identificada.
    `,

    "Investigador": `
        Investigadores são responsáveis por analisar ocorrências,
        encontrar pistas e compreender fenômenos paranormais.
    `,

    "Entidade Paranormal": `
        Entidade paranormal é o termo utilizado neste projeto para
        representar manifestações provenientes do Outro Lado.
    `,

    "Manifestação": `
        Uma manifestação pode alterar o ambiente e provocar fenômenos
        que desafiam as explicações convencionais.
    `
};


// Abrir arquivo
function openInfo(nome) {

    const modal = document.getElementById("modal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    title.textContent = nome;

    text.textContent =
        arquivos[nome] ||
        "Não existem informações disponíveis neste arquivo.";

    modal.classList.add("active");
}


// Fechar arquivo
function closeInfo() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


// Fechar clicando fora
document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeInfo();
    }

});


// Pesquisa
function searchWiki() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const cards =
        document.querySelectorAll(".card");

    const result =
        document.getElementById("searchResult");

    if (input === "") {

        cards.forEach(card => {
            card.style.display = "block";
        });

        result.textContent = "";

        return;
    }

    let encontrados = 0;

    cards.forEach(card => {

        const nome =
            card.dataset.name || "";

        const texto =
            card.innerText.toLowerCase();

        if (
            nome.includes(input) ||
            texto.includes(input)
        ) {

            card.style.display = "block";
            encontrados++;

        } else {

            card.style.display = "none";

        }

    });

    if (encontrados === 0) {

        result.textContent =
            "Nenhum arquivo encontrado.";

    } else {

        result.textContent =
            `${encontrados} arquivo(s) encontrado(s).`;

    }

}


// Pesquisar apertando Enter
document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchWiki();
        }

    });