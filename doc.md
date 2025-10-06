<!-- ============================================================
 🌈 COURS COMPLET TAILWIND CSS POUR DÉBUTANTS
 Auteur : ChatGPT
 Objectif : comprendre et maîtriser les bases de Tailwind CSS
============================================================ -->

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cours complet Tailwind CSS</title>
  <!-- ============================================================
       🧰 INSTALLATION DE TAILWIND
       ------------------------------------------------------------
       1️⃣ Via CDN (pour tester rapidement)
          <script src="https://cdn.tailwindcss.com"></script>
       2️⃣ Via npm (pour projets réels)
          npm install -D tailwindcss
          npx tailwindcss init
          -> puis configurer tailwind.config.js et importer Tailwind :
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
       ============================================================ -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans bg-gray-100 text-gray-800">
<!-- ============================================================
 🧠 1. TYPOGRAPHIE ET COULEURS
 ------------------------------------------------------------
 Tailwind fonctionne avec des classes utilitaires :
 - text-[taille]
 - font-[style]
 - text-[couleur]
 - bg-[couleur]
 - hover:[style au survol]
============================================================ -->
  <header class="bg-gradient-to-r from-blue-500 to-green-400 text-white text-center py-12">
    <h1 class="text-4xl font-bold mb-2">Cours Complet Tailwind CSS</h1>
    <p class="text-lg opacity-90">Apprends à créer des interfaces modernes avec des classes utilitaires</p>
  </header>

<!-- ============================================================
 🧩 2. ESPACEMENT ET TAILLES
 ------------------------------------------------------------
 - p-x (padding)
 - m-x (margin)
 - w-x (width)
 - h-x (height)
 Exemple :
    p-4 => padding: 1rem
    m-2 => margin: 0.5rem
============================================================ -->
  <main class="p-8 max-w-5xl mx-auto">
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-600">Espacement & tailles</h2>
      <div class="bg-white shadow rounded-lg p-6">
        <p class="mb-4">Voici un exemple avec des espacements et tailles :</p>
        <div class="flex gap-4">
          <div class="w-20 h-20 bg-blue-400 rounded-lg"></div>
          <div class="w-24 h-24 bg-green-400 rounded-lg"></div>
          <div class="w-32 h-32 bg-purple-400 rounded-lg"></div>
        </div>
      </div>
    </section>

<!-- ============================================================
 🎨 3. COULEURS ET DÉGRADÉS
 ------------------------------------------------------------
 Les couleurs sont basées sur une palette :
 bg-blue-500, text-gray-700, border-red-300...
 Les dégradés :
 bg-gradient-to-r from-[couleur1] to-[couleur2]
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-green-600">Couleurs & Dégradés</h2>
      <div class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white p-8 rounded-lg shadow">
        <p>Un beau dégradé créé en une seule ligne ✨</p>
      </div>
    </section>

<!-- ============================================================
 🧱 4. FLEXBOX ET GRID
 ------------------------------------------------------------
 Flexbox :
  - flex, justify-center, items-center, gap-x
 Grid :
  - grid, grid-cols-3, gap-4
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-purple-600">Flexbox & Grid</h2>

      <h3 class="font-semibold mb-2">Flexbox</h3>
      <div class="flex justify-around items-center bg-white p-4 shadow rounded-lg mb-6">
        <div class="w-16 h-16 bg-blue-400 rounded-full"></div>
        <div class="w-16 h-16 bg-green-400 rounded-full"></div>
        <div class="w-16 h-16 bg-pink-400 rounded-full"></div>
      </div>

      <h3 class="font-semibold mb-2">Grid</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-200 p-6 text-center rounded-lg">1</div>
        <div class="bg-blue-300 p-6 text-center rounded-lg">2</div>
        <div class="bg-blue-400 p-6 text-center rounded-lg">3</div>
      </div>
    </section>

<!-- ============================================================
 🧩 5. BOUTONS ET HOVER
 ------------------------------------------------------------
 Exemple de styles interactifs avec Tailwind :
 - hover:bg-[couleur]
 - transition, duration-300, transform, scale
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-pink-600">Boutons</h2>
      <div class="flex gap-4 flex-wrap">
        <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Bouton primaire</button>
        <button class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Succès</button>
        <button class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Erreur</button>
      </div>
    </section>

<!-- ============================================================
 🧮 6. RESPONSIVE DESIGN
 ------------------------------------------------------------
 Tailwind gère le responsive avec des préfixes :
 sm: 640px  | md: 768px | lg: 1024px | xl: 1280px
 Exemple :
    text-sm md:text-lg lg:text-xl
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-indigo-600">Responsive</h2>
      <div class="bg-white p-6 rounded-lg shadow">
        <p class="text-sm md:text-lg lg:text-xl">
          Texte responsive : change de taille selon la largeur de l’écran 📱💻
        </p>
      </div>
    </section>

<!-- ============================================================
 🧬 7. ANIMATIONS & TRANSITIONS
 ------------------------------------------------------------
 Exemples :
   - transition-all, duration-300
   - hover:scale-105 (zoom au survol)
   - hover:rotate-3 (rotation)
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-yellow-600">Animations</h2>
      <div class="flex gap-4">
        <div class="w-24 h-24 bg-yellow-400 rounded-lg transition-transform duration-300 hover:scale-110"></div>
        <div class="w-24 h-24 bg-red-400 rounded-lg transition-transform duration-300 hover:rotate-3"></div>
      </div>
    </section>

<!-- ============================================================
 🧾 8. EXEMPLE COMPLET DE PAGE AVEC TAILWIND
 ------------------------------------------------------------
 On combine toutes les notions dans un mini design propre
============================================================ -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-700">Mini projet : cartes produits</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Carte 1 -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <img src="https://picsum.photos/300/200" alt="Image produit" class="rounded-lg mb-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Produit 1</h3>
          <p class="text-gray-600 mb-4">Une superbe description du produit avec un style moderne.</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Acheter</button>
        </div>

        <!-- Carte 2 -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <img src="https://picsum.photos/301/200" alt="Image produit" class="rounded-lg mb-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Produit 2</h3>
          <p class="text-gray-600 mb-4">Une superbe description du produit avec un style moderne.</p>
          <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Acheter</button>
        </div>

        <!-- Carte 3 -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <img src="https://picsum.photos/302/200" alt="Image produit" class="rounded-lg mb-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Produit 3</h3>
          <p class="text-gray-600 mb-4">Une superbe description du produit avec un style moderne.</p>
          <button class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Acheter</button>
        </div>
      </div>
    </section>
  </main>

<!-- ============================================================
 ⚙️ 9. FOOTER
 ------------------------------------------------------------
 Simple footer centré
============================================================ -->
  <footer class="bg-gray-800 text-gray-300 text-center py-6 mt-10">
    <p>&copy; 2025 - Cours Tailwind CSS complet par ChatGPT</p>
  </footer>
</body>
</html>



| Classe                                    | Explication simple                                                                     |
| ----------------------------------------- | -------------------------------------------------------------------------------------- |
| `block`                                   | L’élément prend **toute la largeur** disponible (comme un `<div>`)                     |
| `inline`                                  | L’élément reste **dans la même ligne** (comme un `<span>`)                             |
| `inline-block`                            | Mélange des deux : inline mais on peut mettre largeur/hauteur                          |
| `flex`                                    | Active le **mode flexbox** → permet d’aligner facilement des éléments                  |
| `grid`                                    | Active le **mode grille** → organisation en lignes/colonnes                            |
| `hidden`                                  | Cache complètement l’élément                                                           |
| `absolute`, `relative`, `fixed`, `sticky` | Contrôlent la **position** exacte d’un élément (par rapport à la page ou à son parent) |


| Classe      | Signification                                        |
| ----------- | ---------------------------------------------------- |
| `m-4`       | Ajoute une marge (espace autour)                     |
| `mx-2`      | Marge horizontale (gauche + droite)                  |
| `my-6`      | Marge verticale (haut + bas)                         |
| `p-4`       | Padding (espace intérieur)                           |
| `px-2`      | Padding horizontal                                   |
| `py-8`      | Padding vertical                                     |
| `gap-4`     | Espace entre éléments dans un conteneur flex ou grid |
| `space-x-4` | Espace horizontal automatique entre enfants          |


| Classe         | Signification                                  |
| -------------- | ---------------------------------------------- |
| `w-full`       | L’élément prend **toute la largeur** du parent |
| `w-1/2`        | Largeur = moitié du parent                     |
| `h-screen`     | Hauteur = toute la fenêtre visible             |
| `h-10`         | Hauteur fixe                                   |
| `max-w-md`     | Largeur max moyenne                            |
| `min-h-screen` | Hauteur minimale = écran complet               |


| Classe                        | Signification            |
| ----------------------------- | ------------------------ |
| `text-xl`, `text-sm`          | Taille du texte          |
| `font-bold`, `font-light`     | Épaisseur de la police   |
| `leading-tight`               | Espace entre les lignes  |
| `tracking-wide`               | Espace entre les lettres |
| `text-center`, `text-justify` | Alignement du texte      |


| Classe           | Signification                   |
| ---------------- | ------------------------------- |
| `text-gray-800`  | Texte gris foncé                |
| `bg-blue-500`    | Fond bleu                       |
| `border-red-300` | Bordure rouge claire            |
| `bg-red-500/50`  | Fond rouge à moitié transparent |
| `text-white`     | Texte blanc                     |


| Classe                           | Signification               |
| -------------------------------- | --------------------------- |
| `bg-cover`                       | L’image couvre tout le bloc |
| `bg-center`                      | L’image est centrée         |
| `bg-gradient-to-r`               | Crée un dégradé horizontal  |
| `from-green-400` / `to-blue-600` | Couleurs du dégradé         |


| Classe                  | Signification             |
| ----------------------- | ------------------------- |
| `border`, `border-2`    | Bordure fine ou épaisse   |
| `border-dashed`         | Bordure en tirets         |
| `rounded`, `rounded-lg` | Coins arrondis            |
| `border-t`              | Bordure seulement en haut |
| `border-blue-500`       | Bordure bleue             |


| Classe                | Signification               |
| --------------------- | --------------------------- |
| `shadow`, `shadow-lg` | Ombres légères ou fortes    |
| `opacity-50`          | Élément semi-transparent    |
| `hover:opacity-75`    | Moins transparent au survol |
| `filter`, `blur-sm`   | Ajoute un effet flou        |


| Classe          | Signification                |
| --------------- | ---------------------------- |
| `rotate-45`     | Fait pivoter de 45°          |
| `scale-110`     | Agrandit légèrement          |
| `translate-x-2` | Déplace sur l’axe horizontal |
| `skew-y-6`      | Incline sur l’axe vertical   |


| Classe         | Signification                     |
| -------------- | --------------------------------- |
| `transition`   | Active les transitions            |
| `duration-300` | Durée = 0,3 secondes              |
| `ease-in-out`  | Démarrage/arrêt doux              |
| `delay-150`    | Démarre après 150 ms              |
| `animate-spin` | Fait tourner un élément en boucle |


| Classe              | Signification                            |
| ------------------- | ---------------------------------------- |
| `hover:bg-blue-600` | Change la couleur au survol              |
| `focus:ring-2`      | Ajoute un contour quand on clique dessus |
| `active:scale-95`   | Réduit un peu pendant le clic            |
