var ruzieNaKlik = document.querySelector("article[aria-label='draai']");
ruzieNaKlik.onclick = ruzieMaken;

function ruzieMaken() {
  ruzieNaKlik.classList.toggle("ruzie");
}