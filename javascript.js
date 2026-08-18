function openInfo(titulo, texto) {

    const modal = document.getElementById("modal");

    document.getElementById("modalTitle").textContent = titulo;

    document.getElementById("modalText").textContent = texto;

    modal.classList.add("active");
}


function closeInfo() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeInfo();

        }

    });


/* =========================================
   SISTEMA DE PESQUISA
========================================= */

function searchWiki() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const result =
        document.getElementById("searchResult");

    const cards =
        document.querySelectorAll(
            ".character-card, .element-card, .creature-card"
        );

    if (input === "") {

        cards.forEach(card => {

            card.style.display = "";

        });

        result.textContent = "";

        return;
    }


    let encontrados = 0;


    cards.forEach(card => {

        const texto =
            card.innerText.toLowerCase();

        if (texto.includes(input)) {

            card.style.display = "";

            encontrados++;

        } else {

            card.style.display = "none";

        }

    });


    if (encontrados === 0) {

        result.textContent =
            "Nenhum registro encontrado.";

    } else {

        result.textContent =
            encontrados +
            " registro(s) encontrado(s).";

    }

}


document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchWiki();

        }

    });