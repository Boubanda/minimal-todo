plaintext

# ✅ Minimal Todo

<div align="center">

**To-Do List minimaliste et élégante avec PostgreSQL**

*Développé par Levi Junior BOUBANDA en 20 minutes avec Claude*

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.7-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)](https://www.docker.com/)

[Démo](#-démo) · [Installation](#-installation-rapide) · [Utilisation](#-utilisation) · [Architecture](#-architecture) · [Contact](#-contact)

</div>

---

## 📖 À propos du projet

**Minimal Todo** est une application Full Stack de gestion de tâches créée pour démontrer :
- ⚡ **Rapidité d'exécution** : Développée en 20 minutes avec l'aide de l'IA
- 🎯 **Méthodologie claire** : Architecture → Data → UI → API → Tests
- 💎 **Code propre** : TypeScript, structure claire, maintenable
- 🐳 **Docker** : PostgreSQL conteneurisé pour un setup ultra-rapide
- 🎨 **Design moderne** : Interface minimaliste avec glassmorphism

### Contexte

Ce projet a été créé dans le cadre d'un entretien technique pour **VibeCodr**, une entreprise dont la vision est de *"Construire le futur du code, avec l'IA comme coéquipier"*. 

L'objectif était de démontrer ma capacité à :
- Livrer rapidement avec l'IA comme assistant
- Structurer un projet Full Stack complet
- Écrire du code propre et maintenable
- Utiliser Docker pour accélérer le développement

---

## 🎥 Démo

### Interface vide
![Interface vide](https://via.placeholder.com/800x400/f8fafc/64748b?text=Minimal+Todo+-+Interface+vide)

### Avec tâches actives et terminées
![Avec tâches](https://via.placeholder.com/800x400/f8fafc/64748b?text=Minimal+Todo+-+Avec+tâches)

### Design moderne
- 🎨 Fond dégradé bleu-indigo
- ✨ Effet glassmorphism (verre dépoli)
- 🎭 Animations subtiles au hover
- 📱 Responsive (mobile, tablet, desktop)

---

## ✨ Fonctionnalités

### 📝 Gestion des tâches
- ✅ **Ajouter** une nouvelle tâche
- ✅ **Marquer** comme terminée (toggle)
- ✅ **Supprimer** une tâche
- ✅ **Séparer** les tâches actives et terminées
- ✅ **Compteurs** en temps réel (X actives • Y terminées)

### 🎨 Interface
- Design minimaliste et élégant
- Badges de statut avec points colorés animés
- Transitions fluides sur toutes les interactions
- Empty state avec emoji quand aucune tâche
- Hover effects avec scale et ombres

### ⚙️ Technique
- API REST complète (4 endpoints CRUD)
- Base de données PostgreSQL avec Prisma ORM
- Type-safety complète avec TypeScript
- Gestion d'erreurs robuste
- États de chargement

---

## 🚀 Installation rapide

### Prérequis

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **Docker** ([Télécharger](https://www.docker.com/products/docker-desktop))

### 1. Clone le projet

```bash
git clone https://github.com/Boubanda/minimal-todo.git
cd minimal-todo
```

### 2. Installe les dépendances

```bash
npm install
```

### 3. Lance PostgreSQL avec Docker 🐳

**C'est ici qu'on gagne du temps !** Pas besoin d'installer PostgreSQL localement.

```bash
docker run --name postgres-todo \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=minimal_todo \
  -p 5432:5432 \
  -d postgres:15
```

**Pourquoi Docker ?**
- ✅ Installation en 1 commande (vs 10+ min manuellement)
- ✅ Pas de config système
- ✅ Environnement isolé
- ✅ Reproductible sur n'importe quelle machine
- ✅ Facile à démarrer/arrêter

### 4. Configure les variables d'environnement

```bash
# Crée le fichier .env
cat > .env << 'EOF'
DATABASE_URL="postgresql://postgres:password@localhost:5432/minimal_todo"
EOF
```

### 5. Synchronise la base de données

```bash
npm run db:push
```

Vous devriez voir :
```
✔ Generated Prisma Client
✔ The database is now in sync with your Prisma schema
```

### 6. Lance l'application

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur ! 🎉

---

## 🐳 Commandes Docker utiles

```bash
# Démarrer PostgreSQL (si arrêté)
docker start postgres-todo

# Arrêter PostgreSQL
docker stop postgres-todo

# Voir les logs
docker logs postgres-todo

# Voir les conteneurs qui tournent
docker ps

# Supprimer complètement le conteneur (si besoin de recommencer)
docker rm -f postgres-todo
```

---

## 💻 Utilisation

### Ajouter une tâche
1. Tape le titre dans le champ "Ajouter une tâche..."
2. Clique sur le bouton **Ajouter** ou appuie sur **Entrée**
3. La tâche apparaît instantanément dans la liste des actives

### Marquer comme terminée
1. Clique sur le **carré** à gauche de la tâche
2. La tâche passe dans la section "Terminées"
3. Une coche verte apparaît
4. Le texte devient grisé et barré

### Supprimer une tâche
1. **Survole** une tâche avec la souris
2. Un bouton **×** apparaît à droite
3. Clique dessus pour supprimer

### Statistiques
Les compteurs se mettent à jour automatiquement :
- 🔵 **X active(s)** : Nombre de tâches à faire
- 🟢 **Y terminée(s)** : Nombre de tâches complétées

---

## 🏗️ Architecture

### Stack technique

```
Frontend    : Next.js 14 (App Router) + React 18 + TypeScript
Backend     : Next.js API Routes
Database    : PostgreSQL 15 (via Docker)
ORM         : Prisma 5.7
Styling     : Tailwind CSS 3.3
Container   : Docker
```

### Structure du projet

```
minimal-todo/
├── app/
│   ├── api/todos/
│   │   └── route.ts          # 🔥 API REST (4 endpoints CRUD)
│   ├── layout.tsx             # Layout HTML racine
│   ├── page.tsx               # 🎨 Interface principale (React)
│   └── globals.css            # Styles Tailwind
├── prisma/
│   └── schema.prisma          # 📊 Schéma BDD (modèle Todo)
├── package.json               # Dépendances
├── tsconfig.json              # Config TypeScript
├── next.config.js             # Config Next.js
├── tailwind.config.js         # Config Tailwind
├── postcss.config.js          # Config PostCSS
├── .env                       # Variables d'environnement
├── .gitignore                 # Exclusions Git
└── README.md                  # Documentation
```

**Total : 10 fichiers | ~400 lignes de code**

---

## 📊 Schéma de base de données

### Modèle Prisma

```prisma
model Todo {
  id        String   @id @default(cuid())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

### Explication des champs

| Champ | Type | Description |
|-------|------|-------------|
| `id` | String | Identifiant unique (cuid auto-généré) |
| `title` | String | Titre de la tâche |
| `completed` | Boolean | État de complétion (false par défaut) |
| `createdAt` | DateTime | Date de création (auto-rempli) |

### Pourquoi ces choix ?

- **cuid** au lieu d'auto-increment : Plus sécurisé, pas de séquence prévisible
- **Boolean** pour completed : Simple et efficace pour un toggle
- **DateTime** pour createdAt : Permet de trier par date si besoin

---

## 🔌 API REST

### Endpoints disponibles

#### `GET /api/todos`
Récupère toutes les tâches (triées par date décroissante)

**Réponse :**
```json
[
  {
    "id": "clxxx...",
    "title": "Préparer entretien VibeCodr",
    "completed": false,
    "createdAt": "2025-10-15T10:30:00.000Z"
  }
]
```

---

#### `POST /api/todos`
Crée une nouvelle tâche

**Body :**
```json
{
  "title": "Ma nouvelle tâche"
}
```

**Réponse :**
```json
{
  "id": "clxxx...",
  "title": "Ma nouvelle tâche",
  "completed": false,
  "createdAt": "2025-10-15T10:35:00.000Z"
}
```

**Validation :**
- ✅ `title` requis
- ✅ `title` non vide (trim)
- ❌ Erreur 400 si manquant

---

#### `PATCH /api/todos`
Met à jour l'état d'une tâche (toggle completed)

**Body :**
```json
{
  "id": "clxxx...",
  "completed": true
}
```

**Réponse :**
```json
{
  "id": "clxxx...",
  "title": "Ma tâche",
  "completed": true,
  "createdAt": "2025-10-15T10:30:00.000Z"
}
```

---

#### `DELETE /api/todos`
Supprime une tâche

**Body :**
```json
{
  "id": "clxxx..."
}
```

**Réponse :**
```json
{
  "success": true
}
```

---

### Gestion d'erreurs

Tous les endpoints incluent :
- ✅ Try-catch pour les erreurs inattendues
- ✅ Validation des données d'entrée
- ✅ Codes HTTP appropriés (200, 201, 400, 500)
- ✅ Messages d'erreur explicites

**Exemple d'erreur :**
```json
{
  "error": "Titre requis"
}
```

---

## 💡 Méthodologie de développement

### Workflow en 5 étapes avec Claude

#### 1️⃣ Architecture (2 min)
**Objectif :** Définir la structure du projet

**Approche :**
- Demandé à Claude une architecture minimale Next.js + PostgreSQL
- Choix de Prisma ORM pour la productivité
- Décision d'utiliser Docker pour PostgreSQL

**Résultat :**
```
✅ Structure de fichiers claire
✅ Choix technologiques justifiés
✅ Setup Docker pour gain de temps
```

---

#### 2️⃣ Schéma de données (2 min)
**Objectif :** Modéliser la base de données

**Approche :**
- Itération avec Claude sur le modèle Prisma
- Minimalisme : 4 champs seulement
- Types appropriés et contraintes

**Résultat :**
```prisma
model Todo {
  id        String   @id @default(cuid())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

---

#### 3️⃣ Interface utilisateur (8 min)
**Objectif :** Créer une UI élégante et fonctionnelle

**Itérations avec Claude :**
1. **Proposition initiale** : Formulaire + liste basique
2. **Amélioration design** : Ajout de Tailwind CSS
3. **Minimalisme** : Espacement, typographie
4. **Glassmorphism** : Fond dégradé + effet verre dépoli
5. **Animations** : Hover, transitions, scale
6. **Séparation** : Actives vs Terminées
7. **Compteurs** : Badges avec points colorés

**Résultat :**
- Interface moderne et professionnelle
- Interactions fluides
- Design cohérent

---

#### 4️⃣ API Backend (5 min)
**Objectif :** Implémenter le CRUD complet

**Approche :**
- 4 endpoints dans un seul fichier (Next.js API Routes)
- Gestion d'erreurs systématique
- Validation des entrées
- Codes HTTP appropriés

**Résultat :**
```typescript
export async function GET() { /* ... */ }
export async function POST(request: NextRequest) { /* ... */ }
export async function PATCH(request: NextRequest) { /* ... */ }
export async function DELETE(request: NextRequest) { /* ... */ }
```

---

#### 5️⃣ Tests et polish (3 min)
**Objectif :** Vérifier et améliorer

**Actions :**
- ✅ Vérification du typage TypeScript
- ✅ Tests manuels de toutes les fonctionnalités
- ✅ Ajout des états de chargement
- ✅ Gestion d'erreurs côté client

**Résultat :**
- Application 100% fonctionnelle
- Code propre et maintenable
- Prêt pour la démo

---

### ⚡ Temps total : 20 minutes

**Répartition :**
- Architecture : 10%
- Schéma BDD : 10%
- Interface : 40%
- API : 25%
- Tests : 15%

---

## 🎨 Design

### Principes

- **Minimalisme** : Aucun élément superflu
- **Élégance** : Transitions subtiles, espacement harmonieux
- **Contraste** : Noir/Blanc/Gris pour la clarté
- **Modernité** : Glassmorphism, dégradés
- **Responsive** : Fonctionne sur mobile et desktop

### Palette de couleurs

```css
/* Fond */
background: linear-gradient(to bottom right, 
  #f8fafc, /* slate-50 */
  #e0f2fe, /* blue-50 */
  #e0e7ff  /* indigo-50 */
);

/* Tâches actives */
background: rgba(255, 255, 255, 0.8); /* white/80 */
border: 2px solid #e5e7eb; /* gray-200 */
hover: border-color: #c7d2fe; /* indigo-200 */

/* Tâches terminées */
background: linear-gradient(to right,
  rgba(240, 253, 244, 0.5), /* green-50/50 */
  rgba(236, 253, 245, 0.5)  /* emerald-50/50 */
);
border: 2px solid #bbf7d0; /* green-100 */

/* Accent */
color: #4f46e5; /* indigo-600 */
```

### Animations

```css
/* Hover sur tâche */
transition: all 200ms ease;
transform: scale(1.02);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Point animé */
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

/* Bouton */
hover: transform: scale(1.05);
```

---

## 🛠️ Scripts disponibles

### Développement

```bash
# Lance le serveur de développement
npm run dev
# → http://localhost:3000

# Build pour la production
npm run build

# Lance en mode production
npm start
```

### Base de données

```bash
# Synchronise le schéma Prisma avec la BDD
npm run db:push

# Ouvre Prisma Studio (interface graphique pour la BDD)
npm run db:studio
# → http://localhost:5555
```

---

## 🚀 Déploiement

### Option 1 : Vercel + Neon (PostgreSQL cloud)

**Le plus simple pour Next.js !**

1. **Crée une base de données sur [Neon](https://neon.tech)** (gratuit)
   - Copie la `DATABASE_URL`

2. **Déploie sur Vercel :**
   ```bash
   # Installe Vercel CLI
   npm i -g vercel
   
   # Déploie
   vercel
   ```

3. **Configure les variables d'environnement sur Vercel :**
   - Dashboard → Settings → Environment Variables
   - Ajoute `DATABASE_URL` avec ta connexion Neon

4. **Push le schéma Prisma en production :**
   ```bash
   DATABASE_URL="ta-connexion-neon" npx prisma db push
   ```

5. **C'est en ligne ! 🎉**

---

### Option 2 : Railway (All-in-one)

**Inclut PostgreSQL automatiquement !**

1. Va sur [Railway.app](https://railway.app)
2. Connecte ton repo GitHub
3. Railway détecte Next.js et PostgreSQL automatiquement
4. Ajoute juste : `npx prisma db push` dans les build commands
5. Déployé ! 🚀

---

### Option 3 : Docker Compose (self-hosted)

**Pour héberger toi-même :**

```yaml
# docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: minimal_todo
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  app:
    build: .
    environment:
      DATABASE_URL: postgresql://postgres:${DB_PASSWORD}@db:5432/minimal_todo
    ports:
      - "3000:3000"
    depends_on:
      - db

volumes:
  postgres_data:
```

```bash
docker-compose up -d
```

---

## 📈 Améliorations possibles

### Court terme (5-10 min chacune)
- [ ] **Catégories** : Grouper par projet/contexte
- [ ] **Recherche** : Filtrer les tâches
- [ ] **Dates d'échéance** : Ajouter une deadline
- [ ] **Priorités** : Haute/Moyenne/Basse
- [ ] **Mode sombre** : Toggle light/dark

### Moyen terme (30 min - 1h)
- [ ] **Drag & drop** : Réorganiser les tâches
- [ ] **Tags** : Système d'étiquettes
- [ ] **Export CSV** : Exporter ses tâches
- [ ] **Statistiques** : Graphiques de productivité
- [ ] **Authentification** : Multi-utilisateurs

### Long terme (2-4h)
- [ ] **Récurrence** : Tâches répétitives
- [ ] **Sous-tâches** : Hiérarchie de tâches
- [ ] **Notifications** : Rappels par email/push
- [ ] **Collaboration** : Partager des listes
- [ ] **Mobile app** : React Native

---

## 🧪 Tests

### Tests manuels effectués
- ✅ Ajout de tâche
- ✅ Toggle complétion
- ✅ Suppression de tâche
- ✅ Compteurs en temps réel
- ✅ Empty state
- ✅ États de chargement
- ✅ Gestion d'erreurs

### Tests automatisés (à implémenter)

```bash
# Tests unitaires (Jest)
npm test

# Tests d'intégration (Playwright)
npm run test:e2e

# Coverage
npm run test:coverage
```

---

## 🐛 Troubleshooting

### Problème : `todos.filter is not a function`

**Cause :** L'API retourne autre chose qu'un tableau

**Solution :**
```typescript
const data = await res.json()
setTodos(Array.isArray(data) ? data : [])
```

---

### Problème : Tâches ne s'ajoutent pas

**Cause :** PostgreSQL n'est pas lancé

**Solution :**
```bash
docker start postgres-todo
npm run db:push
```

---

### Problème : Port 3000 déjà utilisé

**Cause :** Une autre app utilise le port

**Solution :**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill

# Ou change le port
PORT=3001 npm run dev
```

---

### Problème : Erreur Prisma "Database does not exist"

**Cause :** Base de données non créée

**Solution :**
```bash
docker exec -it postgres-todo createdb -U postgres minimal_todo
npm run db:push
```

---

## 💻 Développement local

### Prérequis
- Node.js 18+
- Docker Desktop
- Git

### Setup complet

```bash
# Clone
git clone https://github.com/Boubanda/minimal-todo.git
cd minimal-todo

# Dépendances
npm install

# PostgreSQL (Docker)
docker run --name postgres-todo \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=minimal_todo \
  -p 5432:5432 \
  -d postgres:15

# Environnement
echo 'DATABASE_URL="postgresql://postgres:password@localhost:5432/minimal_todo"' > .env

# Base de données
npm run db:push

# Lancer
npm run dev
```

### Hot reload

Next.js inclut le hot reload par défaut :
- Modifications de code → Rechargement automatique
- Modifications du schéma Prisma → `npm run db:push` puis reload

---

## 📚 Ressources

### Documentation
- [Next.js 14](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Docker](https://docs.docker.com/)

### Tutoriels utilisés
- Next.js App Router avec TypeScript
- Prisma avec PostgreSQL
- API Routes Next.js
- Tailwind CSS avancé

### Outils
- [VS Code](https://code.visualstudio.com/) - IDE
- [Docker Desktop](https://www.docker.com/products/docker-desktop) - Containers
- [Prisma Studio](https://www.prisma.io/studio) - DB GUI
- [Claude](https://claude.ai) - Assistant IA

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvre une Pull Request

---

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Auteur

**Levi Junior BOUBANDA**

- 📧 Email : [leviboubanda07@gmail.com](mailto:leviboubanda07@gmail.com)
- 💼 LinkedIn : [léví-junior016](https://linkedin.com/in/lévi-junior016)
- 🐙 GitHub : [@Boubanda](https://github.com/Boubanda)
- 🌐 Portfolio : [mon-portfolio-nine-lime.vercel.app](https://mon-portfolio-nine-lime.vercel.app)

**Formation :**  
🎓 Aivancity School - 4ᵉ année IA & Data Science  
🔍 En recherche d'alternance Full Stack IA / Data Engineer

---

## 🎯 Contexte de création

### Pourquoi ce projet ?

Ce projet a été créé dans le cadre d'un entretien technique pour **VibeCodr**, une entreprise innovante dont la mission est de *"Construire le futur du code, avec l'IA comme coéquipier"*.

### Objectifs démontrés

1. **Rapidité** ⚡
   - Application complète en 20 minutes
   - Utilisation de Docker pour gagner du temps
   - Workflow optimisé avec l'IA

2. **Méthodologie** 📐
   - Architecture → Data → UI → API → Tests
   - Processus clair et reproductible
   - Collaboration efficace avec Claude

3. **Qualité** 💎
   - Code TypeScript type-safe
   - Structure Next.js standard
   - Gestion d'erreurs robuste
   - Design soigné et moderne

4. **Pragmatisme** 🎯
   - Minimaliste mais fonctionnel
   - Docker pour simplifier le setup
   - Pas de sur-engineering
   - Production-ready

### Technologies choisies

- **Next.js** : Framework React moderne, API Routes intégrées
- **TypeScript** : Type-safety et meilleure DX
- **PostgreSQL** : Base relationnelle robuste
- **Prisma** : ORM moderne et type-safe
- **Docker** : Setup ultra-rapide de PostgreSQL
- **Tailwind** : Styling rapide et cohérent

---

## 🙏 Remerciements

- **Claude (Anthropic)** pour l'assistance au développement
- **VibeCodr** pour l'opportunité
- **Next.js, Prisma, Tailwind** pour leurs excellentes docs
- **Docker** pour simplifier l'infrastructure

---

## 📊 Statistiques du projet

```
Fichiers de code       : 10
Lignes de code         : ~400
Temps de développement : 20 minutes
Technologies           : 6 principales
Endpoints API          : 4
Tests manuels          : 7
Bugs rencontrés        : 5 (tous résolus)
Docker containers      : 1 (PostgreSQL)
```

---

## 🔗 Liens utiles

- [Démo live](#) *(à venir)*
- [Documentation API](#api-rest)
- [Guide d'installation](#-installation-rapide)
- [Architecture détail

utes avec Claude comme coéquipier** ⚡
