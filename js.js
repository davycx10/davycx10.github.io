// Fonction pour charger un fichier HTML dans un conteneur
function loadHTML(url, targetId) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erreur 404 : ${url} introuvable`);
      return res.text();
    })
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(error => {
      document.getElementById(targetId).innerHTML = `<p>${error.message}</p>`;
    });
}

// Fonction pour charger dynamiquement le contenu selon ?page=
function loadPage() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || "accueil";

  const allowedPages = [
    "accueil",
    "BTS SIO",
    "Entreprise",
    "Projets",
    "Vieille techno",
    "Contact"
  ];

  // Sécurité : ne charger que les pages autorisées
  const safePage = allowedPages.includes(page) ? page : "accueil";
  const filePath = `View/${safePage.toLowerCase().replace(/ /g, '_')}.html`;

  loadHTML(filePath, "content");
}

// Charger header, contenu, footer
loadHTML("View/commun/header.html", "header");
loadPage();
loadHTML("View/commun/footer.html", "footer");
