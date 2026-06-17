const button = document.getElementById("calc");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const count = document.querySelectorAll(".quiz input:checked").length;

  let text = "";

  if (count === 0) {
    text = "Situazione sotto controllo. Si consiglia comunque manutenzione periodica delle fonti.";
  } else if (count <= 2) {
    text = "Livello lieve. Corso introduttivo consigliato: Comprensione del testo e igiene delle fonti.";
  } else if (count <= 4) {
    text = "Livello medio-alto. Rescolarizzazione intensiva raccomandata entro 30 giorni.";
  } else {
    text = "Emergenza educativa. Attivare immediatamente il protocollo: Storia, diritto, antropologia e silenzio operativo fino a nuova valutazione.";
  }

  result.textContent = text;
});
