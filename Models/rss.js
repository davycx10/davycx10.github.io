
  document.addEventListener("DOMContentLoaded", () => {
    console.log(" DOM chargé — lancement du script RSS");

    const RSS_URL = 'https://alerts.talkwalker.com/alerts/rss/CGS5EZ5FWXFWV5MZ4KZJ3RVDTXCKM57JHSQDYXLBNHM4FRUA75UBPAOGQGUFLRGSTLN47VF3N7TTC83'; // ← ton lien RSS
    const newsContainer = document.getElementById('news-container');

    if (!newsContainer) {
      console.warn("⚠️ Élément #news-container non trouvé dans le DOM.");
      return;
    }

    const rss2jsonURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    console.log(" URL utilisée pour le fetch :", rss2jsonURL);

    fetch(rss2jsonURL)
      .then(res => {
        console.log(" Réponse fetch reçue :", res);
        return res.json();
      })
      .then(data => {
        console.log(" Données RSS reçues :", data);

        if (!data.items || data.items.length === 0) {
          newsContainer.innerHTML = `<p class="text-muted">Aucun article pour le moment. Essaie plus tard ou modifie ta requête Talkwalker.</p>`;
          return;
        }

        newsContainer.innerHTML = ''; // Vider le message de chargement

        data.items.slice(0, 4).forEach(article => {
          const col = document.createElement('div');
          col.className = 'col-md-6 mb-4';
          col.innerHTML = `
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description || ''}</p>
                <a href="${article.link}" target="_blank" class="btn btn-outline-primary btn-sm">Lire l'article</a>
              </div>
            </div>
          `;
          newsContainer.appendChild(col);
        });
      })
      .catch(error => {
        console.error("❌ Erreur lors du chargement du flux RSS :", error);
        newsContainer.innerHTML = `<p class="text-danger">Erreur lors du chargement des articles RSS.</p>`;
      });
  });
