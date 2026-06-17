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
      result.innerHTML =
        "<strong>Diagnosi preliminare:</strong> nessuna criticità rilevata.<br><br>" +
        "Il soggetto mostra capacità residue di dubbio, lettura e convivenza con la complessità. " +
        "Non si esclude, tuttavia, una forma latente di buonsenso verificabile solo dopo esposizione a un post politico su Facebook.";
      return;
    }

    let specifiche = [];

    if (hasStudy) {
      specifiche.push(
        "<strong>Area studio:</strong> sospetta allergia al testo scritto. " +
        "Il soggetto tende a formulare opinioni definitive prima dell'apertura del documento."
      );
    }

    if (hasEurope) {
      specifiche.push(
        "<strong>Area comparazioni europee:</strong> citazionismo geografico non assistito. " +
        "Prescrizione: leggere almeno una fonte primaria prima di usare “in Europa lo fanno”."
      );
    }

    if (hasEasy) {
      specifiche.push(
        "<strong>Area semplificazione:</strong> sindrome da soluzione unica. " +
        "Il soggetto manifesta fiducia eccessiva in misure drastiche, preferibilmente applicabili ad altri."
      );
    }

    if (hasRacism) {
      specifiche.push(
        "<strong>Area panico identitario:</strong> possibile razzismo in modalità “ma”. " +
        "Si rileva tendenza a confondere persone reali, religioni, cittadinanza e fantasie di sostituzione."
      );
    }

    if (hasWomen) {
      specifiche.push(
        "<strong>Area misoginia:</strong> disagio lieve/moderato davanti all'autonomia femminile. " +
        "Il soggetto potrebbe percepire i diritti delle donne come un attacco personale alla quiete del divano."
      );
    }

    if (hasQueer) {
      specifiche.push(
        "<strong>Area queer/Pride:</strong> sindrome da “ho amici gay, ma”. " +
        "Il soggetto sembra tollerare l'esistenza LGBT+ purché invisibile, silenziosa e possibilmente non colorata."
      );
    }

    if (hasConspiracy) {
      specifiche.push(
        "<strong>Area complotto social:</strong> intossicazione da bacheca indignata. " +
        "Probabile esposizione prolungata a contenuti con molte maiuscole, poche fonti e musica epica."
      );
    }

    if (hasNostalgia) {
      specifiche.push(
        "<strong>Area nostalgia selettiva:</strong> idealizzazione del passato immaginario. " +
        "Il soggetto ricorda un'epoca ordinata, semplice e probabilmente mai esistita."
      );
    }

    let diagnosi = "";

    if (texts.length <= 2) {
      diagnosi =
        "<strong>Diagnosi preliminare:</strong> esposizione lieve a slogan semplificatori. " +
        "Il soggetto è recuperabile con letture brevi, pause prima dell'invio e due bicchieri d'acqua.";
    } else if (texts.length <= 5) {
      diagnosi =
        "<strong>Diagnosi preliminare:</strong> rescolarizzazione consigliata. " +
        "Si osserva tendenza a sostituire l'analisi con frasi da bar travestite da geopolitica.";
    } else if (texts.length <= 9) {
      diagnosi =
        "<strong>Diagnosi preliminare:</strong> rescolarizzazione intensiva. " +
        "Il soggetto presenta accumulo significativo di slogan, panico morale e fiducia eccessiva nel proprio buonsenso.";
    } else {
      diagnosi =
        "<strong>Diagnosi preliminare:</strong> emergenza educativa nazionale. " +
        "Attivare immediatamente protocollo completo: storia, diritto, antropologia, fonti verificate e silenzio operativo prima dell'invio.";
    }

    result.innerHTML =
      diagnosi +
      "<br><br><strong>Specifiche rilevate:</strong><br>" +
      specifiche.map(x => "• " + x).join("<br><br>");
  });
}

});
