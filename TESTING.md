# Stratégie de tests

Document formel, décrit la direction que l'ont va prendre en matière de test, qu'est ce qu'on va faire, qu'est ce qu'on ne vas pas faire ...
Etre le plus exhaustif possible


## Contexte

## Type de tests
### Tests unitaires

- **Pourquoi ?**

logique métier ?

Les test unitaires permettent de vérifier que chaque fonction de l'API fonctionne comme prévu. Cela garantit que les opérations de création, modification et de suppression de factures sont correctement implémenté et renvoient les résultat attendus. Cela permet egalement de détecter les erreurs de logique. 

- **Normes**

Les tests doivent être regroupés par fonctionnalité ou par module. 

Utiliser une librairie de test

Bonnes pratiques : [documentation](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-fr.md)

- **Critères**

Les erreurs doivent aussi être testé, par exemple que se passe t-il si une fonction ne reçoit pas les bons arguments. 

Le taux de couveture doit être au moins de 80%

- **Outils**

Jest

- **Tests fonctionnel**

- **Tests d'intégration**
- **Tests E2E**
- **Tests de sécurité**
- **Tests d'acceptance**

