document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("[data-page]");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId, updateUrl = true) {
    pages.forEach(page => page.classList.remove("active-page"));

    const page = document.getElementById(pageId);

    if (page) {
      page.classList.add("active-page");
      window.scrollTo(0, 0);

      if (updateUrl) {
        history.pushState(null, "", "#" + pageId);
      }
    }
  }

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const pageId = this.getAttribute("data-page");
      showPage(pageId);
    });
  });

  window.addEventListener("popstate", function () {
    const pageId = location.hash.replace("#", "") || "home";

    if (document.getElementById(pageId)) {
      showPage(pageId, false);
    } else {
      showPage("home", false);
    }
  });

  const initialPage = location.hash.replace("#", "");

  if (initialPage && document.getElementById(initialPage)) {
    showPage(initialPage, false);
  } else {
    showPage("home", false);
  }

  const button = document.getElementById("calc");
  const result = document.getElementById("result");

  if (button && result) {
    button.addEventListener("click", function () {
      const count = document.querySelectorAll(".quiz input:checked").length;

      if (count === 0) {
        result.textContent = "Situazione sotto controllo. Si consiglia comunque manutenzione periodica delle fonti.";
      } else if (count <= 2) {
        result.textContent = "Livello lieve. Corso introduttivo consigliato: Comprensione del testo e igiene delle fonti.";
      } else if (count <= 4) {
        result.textContent = "Livello medio-alto. Rescolarizzazione intensiva raccomandata entro 30 giorni.";
      } else {
        result.textContent = "Emergenza educativa. Attivare immediatamente il protocollo: Storia, diritto, antropologia e silenzio operativo fino a nuova valutazione.";
      }
    });
  }

});
