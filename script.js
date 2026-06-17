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
    const checked = document.querySelectorAll(".quiz input:checked");
    const texts = Array.from(checked).map(x => x.parentElement.textContent.trim());

    const hasEasy = texts.some(x =>
      x.includes("È semplice") ||
      x.includes("casa loro") ||
      x.includes("casa tua")
    );

    const hasEurope = texts.some(x =>
      x.includes("Paesi europei")
    );

    const hasStudy = texts.some(x =>
      x.includes("Studiare") ||
      x.includes("non lo letta") ||
      x.includes("o capito")
    );

    const hasRacism = texts.some(x =>
      x.includes("razzista") ||
      x.includes("Islam") ||
      x.includes("sostituirci")
    );

    const hasWomen = texts.some(x =>
      x.includes("femministe") ||
      x.includes("donne")
    );

    const hasConspiracy = texts.some(x =>
      x.includes("Boldrini") ||
      x.includes("pdioti") ||
      x.includes("zecche") ||
      x.includes("fonti ufficiali")
    );

    const hasNostalgia = texts.some(x =>
      x.includes("Prima si stava meglio") ||
      x.includes("non si può più dire niente")
    );

    const hasQueer = texts.some(x =>
      x.includes("amici gay") ||
      x.includes("Pride")
    );

    if (texts.length === 0) {
      result.textContent =
        "Diagnosi preliminare: nessuna criticità rilevata. Il soggetto mostra capacità residue di dubbio, lettura e convivenza con la complessità.";
      return;
    }

    let modules = [];

    if (hasStudy) {
      modules.push("comprensione del testo e alfabetizzazione minima");
    }

    if (hasEurope) {
      modules.push("comparazioni internazionali non inventate");
    }

    if (hasEasy) {
      modules.push("fenomeni complessi e soluzioni non magiche");
    }

    if (hasRacism) {
      modules.push("storia, antropologia e panico identitario");
    }

    if (hasWomen) {
      modules.push("pari opportunità e diritti non sottrattivi");
    }

    if (hasQueer) {
      modules.push("diritti civili e sindrome da “non ho niente contro, ma…”");
    }

    if (hasConspiracy) {
      modules.push("igiene delle fonti e disintossicazione da bacheca indignata");
    }

    if (hasNostalgia) {
      modules.push("educazione al presente e gestione del lutto per il passato immaginario");
    }

    let intro = "";

    if (texts.length <= 2) {
      intro =
        "Diagnosi preliminare: lieve esposizione a slogan semplificatori. Il soggetto è recuperabile con poche ore di lettura assistita e una temporanea sospensione dai commenti.";
    } else if (texts.length <= 5) {
      intro =
        "Diagnosi preliminare: rescolarizzazione consigliata. Si rileva tendenza a sostituire l'analisi con frasi da bar travestite da geopolitica.";
    } else if (texts.length <= 9) {
      intro =
        "Diagnosi preliminare: rescolarizzazione intensiva. Il soggetto manifesta accumulo significativo di slogan, panico morale e fiducia eccessiva nel proprio buonsenso.";
    } else {
      intro =
        "Diagnosi preliminare: emergenza educativa nazionale. Attivare immediatamente protocollo completo: storia, diritto, antropologia, fonti verificate e silenzio operativo prima dell'invio.";
    }

    const uniqueModules = [...new Set(modules)];

    result.innerHTML =
      intro +
      "<br><br><strong>Moduli consigliati:</strong><br>" +
      uniqueModules.map(x => "• " + x).join("<br>");
  });
}

});
