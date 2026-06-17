// ---------------------
// Navigazione tra pagine
// ---------------------

const links = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
        window.scrollTo(0, 0);
    }
}

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const pageId = this.dataset.page;

        showPage(pageId);

        history.pushState(null, "", "#" + pageId);

    });

});


// Apertura iniziale

const initialPage = location.hash.replace("#", "");

if (initialPage && document.getElementById(initialPage))
    showPage(initialPage);
else
    showPage("home");


// ---------------------
// Test diagnostico
// ---------------------

const button = document.getElementById("calc");
const result = document.getElementById("result");

if (button && result) {

    button.addEventListener("click", () => {

        const count = document.querySelectorAll(".quiz input:checked").length;

        let text = "";

        if (count === 0) {

            text = "Situazione sotto controllo. Si consiglia comunque manutenzione periodica delle fonti.";

        }
        else if (count <= 2) {

            text = "Livello lieve. Corso introduttivo consigliato: Comprensione del testo e igiene delle fonti.";

        }
        else if (count <= 4) {

            text = "Livello medio-alto. Rescolarizzazione intensiva raccomandata entro 30 giorni.";

        }
        else {

            text = "Emergenza educativa. Attivare immediatamente il protocollo: Storia, diritto, antropologia e silenzio operativo fino a nuova valutazione.";

        }

        result.textContent = text;

    });

}
