# ✅ Minimal Todo

To-Do List minimaliste et élégante avec PostgreSQL

**Développé par Levi Junior BOUBANDA** en 20 minutes avec Claude

---

## 🎯 Stack Technique

- **Frontend** : Next.js 14 + React 18 + TypeScript
- **Backend** : Next.js API Routes
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Styling** : Tailwind CSS

---

## ✨ Fonctionnalités

- ✅ Ajouter une tâche
- ✅ Marquer comme terminée
- ✅ Supprimer une tâche
- ✅ Compteur actives/terminées
- ✅ Interface minimaliste et élégante
- ✅ Base de données PostgreSQL locale

---

## 🚀 Installation

### Prérequis
- Node.js 18+
- PostgreSQL installé et lancé

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer PostgreSQL

#### Option A : PostgreSQL local
```bash
# Créer la base de données
createdb minimal_todo

# Copier et configurer .env
cp .env.example .env
# Éditer .env avec vos credentials PostgreSQL
```

#### Option B : PostgreSQL Docker (rapide)
```bash
docker run --name postgres-todo \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=minimal_todo \
  -p 5432:5432 \
  -d postgres:15

# Puis dans .env :
DATABASE_URL="postgresql://postgres:password@localhost:5432/minimal_todo"
```

### 3. Créer les tables
```bash
npm run db:push
```

### 4. Lancer l'application
```bash
npm run dev
```

Ouvrir http://localhost:3000

---

## 📁 Structure du Projet

```
minimal-todo/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── README.md
├── prisma/
│   └── schema.prisma        # Schéma BDD (modèle Todo)
└── app/
    ├── layout.tsx          # Layout HTML
    ├── page.tsx            # Interface principale
    ├── globals.css         # Styles Tailwind
    └── api/todos/
        └── route.ts        # API CRUD (GET/POST/PATCH/DELETE)
```

**Total : 10 fichiers | ~300 lignes de code**

---

## 🔧 Schéma de Base de Données

```prisma
model Todo {
  id        String   @id @default(cuid())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

**Champs :**
- `id` : Identifiant unique (cuid)
- `title` : Titre de la tâche
- `completed` : État (false par défaut)
- `createdAt` : Date de création

---

## 🛠️ API Endpoints

### GET /api/todos
Récupère tous les todos (triés par date décroissante)

### POST /api/todos
Crée un nouveau todo
```json
{
  "title": "Ma nouvelle tâche"
}
```

### PATCH /api/todos
Met à jour l'état d'un todo
```json
{
  "id": "clxxx...",
  "completed": true
}
```

### DELETE /api/todos
Supprime un todo
```json
{
  "id": "clxxx..."
}
```

---

## 💡 Méthodologie de Développement avec Claude

### 1. Architecture (2 min)
J'ai demandé à Claude de me proposer une structure Next.js + PostgreSQL minimaliste.

**Prompt :**
*"Propose une architecture minimale pour une to-do list avec Next.js 14, TypeScript, et PostgreSQL via Prisma"*

### 2. Schéma de données (2 min)
Claude m'a aidé à définir le modèle Prisma optimal.

**Résultat :** Schéma avec 4 champs seulement (id, title, completed, createdAt)

### 3. Interface (8 min)
Développement de l'UI avec itérations sur :
- Design minimaliste
- Séparation tâches actives/terminées
- Animations hover subtiles

**Itérations avec Claude :**
- Proposition initiale
- Amélioration du design
- Ajout des compteurs

### 4. API Backend (5 min)
Création des 4 endpoints CRUD avec Prisma.

Claude m'a aidé sur :
- Structure des routes Next.js 14
- Gestion d'erreurs
- Validation des données

### 5. Tests et polish (3 min)
- Vérification du typage TypeScript
- Tests des fonctionnalités
- Ajout des états de chargement

**⚡ Temps total : 20 minutes**

---

## 🎨 Design

### Principes
- **Minimalisme** : Aucun élément superflu
- **Élégance** : Transitions subtiles, espacement harmonieux
- **Contraste** : Noir/Blanc/Gris pour clarté
- **Responsive** : Fonctionne sur mobile et desktop

### Palette de couleurs
- Fond : Dégradé gris clair (`slate-50` → `slate-100`)
- Tâches actives : Blanc avec border gris
- Tâches terminées : Fond gris clair
- Accent : Gris foncé (`gray-800`)

---

## 📊 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production
npm start

# Pousser le schéma vers la BDD
npm run db:push

# Ouvrir Prisma Studio (GUI pour la BDD)
npm run db:studio
```

---

## 🔍 Points Techniques

### Prisma ORM
- **Avantage** : Type-safe, migrations faciles
- **Client auto-généré** : Autocomplétion TypeScript
- **Syntax claire** : Requêtes intuitives

### Next.js API Routes
- **Co-location** : API et frontend dans le même projet
- **TypeScript natif** : Types partagés
- **Serverless-ready** : Déployable facilement

### React + TypeScript
- **Type safety** : Catch des erreurs à la compilation
- **Interfaces** : Contrats clairs pour les données
- **useState** : Gestion d'état simple et efficace

---

## 🚀 Déploiement

### Option 1 : Vercel + Neon (PostgreSQL)
1. Créer une DB sur [neon.tech](https://neon.tech) (gratuit)
2. Copier la `DATABASE_URL`
3. Deployer sur Vercel
4. Ajouter `DATABASE_URL` dans les variables d'env
5. Lancer `npx prisma db push` en production

### Option 2 : Fly.io
Inclut PostgreSQL dans le même service

---

## 🎯 Ce qui Rend ce Projet Impactant

✅ **Minimaliste** : 300 lignes de code, 10 fichiers  
✅ **Fonctionnel** : CRUD complet avec PostgreSQL  
✅ **Rapide** : Développé en 20 minutes avec Claude  
✅ **Propre** : Code TypeScript type-safe  
✅ **Élégant** : Design soigné et moderne  
✅ **Production-ready** : Déployable immédiatement  

---

## 💪 Améliorations Possibles (5-10 min chacune)

- [ ] Catégories de tâches
- [ ] Recherche/Filtre
- [ ] Dates d'échéance
- [ ] Priorités (haute/moyenne/basse)
- [ ] Drag & drop pour réorganiser
- [ ] Export en CSV
- [ ] Mode sombre

---

## 👨‍💻 Développeur

**Levi Junior BOUBANDA**  
📧 leviboubanda07@gmail.com  
💼 LinkedIn : [lévi-junior016](https://linkedin.com/in/lévi-junior016)  
🐙 GitHub : [Boubanda](https://github.com/Boubanda)  
🌐 Portfolio : [mon-portfolio-nine-lime.vercel.app](https://mon-portfolio-nine-lime.vercel.app)

*Étudiant en 4ᵉ année IA & Data Science - Aivancity School*  
*En recherche d'alternance Full Stack IA / Data Engineer*

---

## 📝 Licence

MIT - Open Source

---

**Développé en 20 minutes avec Claude comme coéquipier** ⚡