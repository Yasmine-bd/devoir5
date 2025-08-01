
# Tableau de Bord - Prix des Fruits

Ce projet est un tableau de bord interactif React qui affiche des données fictives sur les prix des fruits (2020-2025).
Il inclut :
- Deux graphiques interactifs (Line chart et Bar chart) avec **Recharts**.
- Un **sélecteur de langue (FR/EN)**.
- Des données fictives intégrées directement dans les composants.

## Installation

1. **Cloner le projet ou décompresser le ZIP**.

2. Ouvrez un terminal dans le dossier du projet :
   ```bash
   cd dashboard_fruits_complete
   ```

3. **Installer les dépendances :**
   ```bash
   npm install
   ```

4. **Lancer le serveur de développement :**
   ```bash
   npm start
   ```

Le projet sera disponible à l’adresse : `http://localhost:3000`.

---

## Structure du projet

```
dashboard_fruits_complete/
  public/
    index.html
  src/
    components/
      FruitLineChart.js
      FruitBarChart.js
    App.js
    index.js
    index.css
  package.json
```

---

## Déploiement sur GitHub Pages

1. **Installer le package `gh-pages` :**
   ```bash
   npm install --save gh-pages
   ```

2. **Ajouter ces lignes dans `package.json` :**
   ```json
   "homepage": "https://<votre_nom_utilisateur>.github.io/<nom_du_repo>/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Déployer :**
   ```bash
   npm run deploy
   ```

Votre tableau de bord sera en ligne sur GitHub Pages.

---

## Auteur

- **Yasmine Bziouid**
