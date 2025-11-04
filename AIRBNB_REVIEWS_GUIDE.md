# Guide d'intégration des avis Airbnb

## Comment mettre à jour les avis clients

Les avis sont stockés dans le fichier `translations/index.ts` dans la section `properties.property.comments`.

### Option 1 : Mise à jour manuelle (Recommandée)

1. Ouvrez le fichier `translations/index.ts`
2. Trouvez la section `comments` dans `properties.property` (ligne ~316 pour FR, ligne ~669 pour EN)
3. Ajoutez ou modifiez les avis au format suivant :

```typescript
comments: [
  {
    name: "Marie",                    // Prénom du client (ou initiale)
    date: "Mai 2024",                 // Date du séjour (format: "Mois Année")
    text: "Texte de l'avis...",       // Texte complet de l'avis
    rating: 5,                        // Note sur 5
  },
  // ... autres avis
]
```

### Option 2 : Services tiers pour automatisation

#### Option A : EmbedSocial (Recommandé)
- Site : https://embedsocial.com/products/widgets/airbnb-reviews/
- Permet d'intégrer automatiquement les avis Airbnb
- Nécessite un abonnement (~$29/mois)

#### Option B : Trustpilot
- Intégration possible mais nécessite que les clients laissent des avis sur Trustpilot

#### Option C : Service de scraping personnalisé
- Nécessite un développeur pour créer un script
- Peut violer les conditions d'utilisation d'Airbnb
- Nécessite une maintenance régulière

### Option 3 : Widget Airbnb officiel

Airbnb propose un widget d'intégration pour les avis, mais il est limité :
- URL du widget : https://www.airbnb.fr/rooms/1432505489484954838/reviews
- Peut être intégré via iframe (mais pas recommandé pour le SEO)

### Recommandation

Pour l'instant, la meilleure approche est la **mise à jour manuelle** car :
- ✅ Simple et rapide
- ✅ Contrôle total sur le contenu
- ✅ Pas de dépendance externe
- ✅ Meilleur pour le SEO
- ✅ Gratuit

Vous pouvez mettre à jour les avis mensuellement en copiant les derniers avis depuis votre page Airbnb.

### Structure actuelle

Les avis sont affichés dans :
- Page des propriétés (`/properties`)
- Page d'accueil (via le modal)
- Les avis sont triés du plus récent au plus ancien dans le code

### Format des dates

Utilisez le format français : "Mois Année"
- Exemples : "Mai 2024", "Avril 2024", "Mars 2024", "Décembre 2023"

### Note importante

Les avis doivent être authentiques et conformes aux avis réels sur Airbnb. Ne modifiez pas le sens des avis, seulement la mise en forme si nécessaire.

