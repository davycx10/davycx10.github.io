
# 📁 Structure du Projet Portfolio

Ce projet est une application web simple servant de **portfolio personnel**. Il a été pensé pour être **modulaire**, lisible et facilement maintenable, en s'inspirant librement de l’architecture **MVC** (Modèle-Vue-Contrôleur), bien que seuls les **Vues (View)** soient réellement utilisées. Les **Controllers** et **Models** sont présents mais vides ou inutiles, et seront supprimés à terme.

---

## 🔧 Technologies utilisées

* **HTML5 / CSS3**
* **JavaScript** (chargement dynamique des vues)
* **[Bootstrap 5.3](https://getbootstrap.com/)** pour la mise en page responsive
* **[Font Awesome](https://fontawesome.com/)** et **Bootstrap Icons** pour les icônes
* **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** pour les animations lors du scroll

---

## 🗂️ Arborescence du projet

```
├── Controller/                 # (Inutile pour l’instant, sera supprimé)
├── Models/                    # (Inutile également, sera supprimé)
├── View/                      # Contient toutes les pages HTML du site
│   ├── commun/
│   │   ├── header.html        # Barre de navigation dynamique
│   │   └── footer.html        # Pied de page avec liens externes
│   ├── accueil.html           # Page d’accueil
│   ├── bts_sio.html           # Présentation du BTS SIO
│   ├── contact.html           # Formulaire ou informations de contact
│   ├── cv.html                # Présentation du CV
│   ├── entreprise.html        # Expérience en entreprise
│   ├── projet.html            # Liste des projets réalisés
│   └── veille_technolo.html   # Page de veille technologique
│
├── cv/                        # Contient le CV en PDF
│   └── DaveIsraelcv.pdf
│
├── doc/                       # Documentation générale du projet
│   ├── folder_doc/            # Documentation technique (structure du projet, explication)
│   ├── installation_vm.pdf    # Instructions pour l’installation d’une machine virtuelle
│   └── *.pdf                  # Futurs documents projets
│
├── images/                    # Ressources visuelles utilisées dans le site
│
├── style/                     # Feuilles de style CSS
│   ├── accueil.css            # Spécifique à la page d’accueil
│   ├── header.css             # Style de la barre de navigation
│   ├── footer.css             # Style du pied de page
│   ├── projet.css             # Style des pages projet
│   └── style.css              # Style commun à tout le site
│
├── index.html                 # Page d’entrée du site / gère le routage dynamique via JS
├── readme.md                  # Documentation générale du projet (ce fichier)
└── text.txt                   # Fichier temporaire, inutile
```

---

## 📄 Détail des fichiers importants

### `index.html`

Ce fichier sert de **point d’entrée principal** au projet. Il contient :

* Le chargement des bibliothèques (Bootstrap, Font Awesome, AOS, etc.)
* Un script JavaScript permettant de charger dynamiquement les **pages HTML** depuis le dossier `View/`, en fonction du paramètre d’URL (`?page=...`)
* L'inclusion du `header` et du `footer` (chargés depuis `View/commun/`)

Cette approche permet d’éviter les duplications de code et facilite la mise à jour des composants communs (comme la navigation ou le footer).

### `View/commun/header.html`

Ce fichier représente la **barre de navigation principale** du site. Elle utilise **Bootstrap** pour être responsive, et contient des liens dynamiques redirigeant vers les différentes pages du site via `index.html?page=...`.

Liste des liens de navigation :

* Intro
* BTS SIO
* Entreprise
* Projets
* CV
* Veille Technologique
* Contact

### `View/commun/footer.html`

Le **footer** est un composant commun affiché sur toutes les pages. Il contient :

* Un copyright
* Des liens vers les réseaux sociaux (GitHub, LinkedIn)
* Un lien vers le CV en PDF

Il est stylisé via `style/footer.css`.

---

## 📌 Organisation et bonnes pratiques

* **Séparation claire des responsabilités** : CSS, HTML, images, scripts et documentation sont chacun dans un dossier dédié.
* **Réutilisabilité** : Le `header` et le `footer` sont partagés entre toutes les pages, via chargement JavaScript.
* **Extensibilité** : De nouvelles pages peuvent être ajoutées facilement en les plaçant dans le dossier `View/` et en ajoutant leur nom à la liste `allowedPages` dans le script de `index.html`.
* **Structure modulaire** : L’organisation du projet est inspirée d’un modèle **MVC simplifié**, où :

  * `View/` représente les **vues** (pages HTML)
  * `Controller/` et `Models/` sont présents par convention mais non utilisés (seront supprimés)

---

## 🛠️ À venir / Nettoyage prévu

* ❌ Suppression des dossiers **Controller/** et **Models/** qui ne sont pas utilisés
* ✅ Ajout de nouvelles documentations PDF dans `doc/` au fur et à mesure des projets

---

## ✅ Conclusion

Ce projet est conçu pour rester **simple**, **modulaire** et facilement **compréhensible**, que ce soit pour travailler en collaboration ou pour être présenté dans un cadre scolaire ou professionnel. La structure permet une **bonne évolutivité**, tout en conservant une **organisation claire et propre**.

---
=======
# Portfolio 

Bienvenue sur mon portfolio disponible à l’adresse :  
🔗 [https://davycx10.github.io](https://davycx10.github.io)

Ce site a été réalisé dans le cadre du **BTS SIO (Services Informatiques aux Organisations)** que je poursuis en alternance, avec une spécialisation **SLAM **. Il me permet de présenter mon parcours, mes compétences, mes projets, ainsi que mon activité en entreprise.

---

## 🎯 Objectifs du projet

- Créer un portfolio personnel complet
- Structurer les informations importantes liées à ma formation et à mes projets
- Mettre en pratique mes compétences en développement web
- Présenter mes travaux de façon claire, responsive et professionnelle

---

##  Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**

Le site est entièrement responsive et adapté à tous les types d’écrans.

---

##  Structure du site

Le portfolio se compose des pages suivantes :

- **Accueil** : Introduction, présentation personnelle
- **BTS SIO** : Présentation du diplôme et des deux options
  - Option **SLAM** : Développement d'applications
  - Option **SISR** : Réseaux et systèmes
- **Entreprise** : Missions et projets réalisés en alternance
- **Projets** : Galerie de projets 
- **Veille Technologique** : Sujets explorés et recherches personnelles
- **Contact** : Formulaire de contact et informations de contact

---

## 🚀 Déploiement

Le site est hébergé sur **GitHub Pages** via ce dépôt.  
🔗 [https://davycx10.github.io](https://davycx10.github.io)

---

##  À propos

Auteur : **davycx**  
Formation : **BTS SIO **  
Ce projet est réalisé dans un but pédagogique et professionnel.

---
