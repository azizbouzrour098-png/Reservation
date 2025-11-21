Mini Projet – Application de Réservation de Voitures

Ce projet est une application web développée en React JS, permettant aux utilisateurs de parcourir des voitures, consulter leurs détails, créer un compte, se connecter et effectuer des réservations.
L’objectif principal est de créer une interface simple, intuitive et 100% fonctionnelle, utilisant localStorage pour conserver les données.

1/. Présentation Générale

L’utilisateur peut parcourir plusieurs pages grâce à React Router : une page d’accueil, une liste de voitures, une page de détails, un formulaire de réservation, et les pages Login/Signup. Chaque réservation contient un nom, un modèle de voiture et une date. Lorsqu’il valide, la réservation est stockée dans le localStorage et s’affiche dans une liste où l’utilisateur peut aussi supprimer une entrée.

    1/.Réservation

        La page de réservation contient un formulaire simple. Si l’utilisateur laisse les champs vides, un message d’erreur apparaît. Sinon, les informations sont ajoutées à une liste de réservations enregistrée dans le navigateur. La suppression d’une réservation met automatiquement la liste à jour.

    2/.Authentification

        L’utilisateur peut créer un compte via la page Signup. Les informations sont enregistrées localement. Lors du Login, l’application vérifie si les données correspondent. Si c’est correct, l’utilisateur est connecté, sinon un message d’erreur est affiché. Le système reste simple et fonctionne uniquement avec localStorage, sans serveur.

    3/.Interface et Design

        Le style de l’application est géré dans un seul fichier CSS. On retrouve une barre de navigation avec plusieurs liens, des effets hover, des couleurs cohérentes sur toutes les pages, et un design responsive qui s’adapte aux écrans. Le formulaire de réservation et celui d’inscription possèdent un style moderne avec des ombres colorées.

L’utilisateur peut :

==> Accéder à une page d’accueil animée 

==> Voir la liste des voitures disponibles

==> Consulter la fiche détaillée de chaque voiture

==> S’inscrire / Se connecter

==> Faire une réservation avec nom + voiture + date

==> Gérer ses réservations (suppression disponible)

==> Naviguer entre les pages grâce à React 

2/. Fonctionnalités en Détail

--> Page d’Accueil 

    #- Section d’introduction avec texte + image background

    #- Présentation du concept du site

    #- Navigation rapide

--> CarList

    #- Liste complète des voitures

    #- Chaque item contient une image + nom + bouton détails

--> DétailsCars

    #- Affichage détaillé de la voiture sélectionnée

    #- Informations supplémentaires

    #- Bouton pour aller directement à la réservation

--> Réservation (Reservation.js)

    #- Formulaire composé de :
        _ Nom complet
        _ Modèle de voiture
        _ Date de réservation

    #- Vérification des champs (validation simple)

    #- Confirmation avec message animé

    #- Stockage automatique dans localStorage

    #- Liste des réservations enregistrées

    #- Suppression possible

--> Authentification : Login / Signup / SignApp

    #- Création de compte

    #- Stockage en local

    #- Login avec vérification des informations

    #- Style moderne adapté au thème global

--> Layout / Navigation

    #- Barre de navigation affichée sur toutes les pages

    #- Liens dynamiques + animation hover

    #- Design propre et responsive

3/. Technologies Utilisées

    --> React JS

    --> React Router DOM

    --> CSS3 (Projet.css)

    --> JavaScript ES6

    --> localStorage API


#===>> Résumé : 

Ce projet est une application web de réservation de voitures développée avec React JS et utilisant localStorage pour stocker les comptes utilisateurs et les réservations. L’utilisateur arrive sur la page d’accueil où il découvre la plateforme et peut consulter la liste des voitures disponibles avec leurs images, noms et prix. En cliquant sur une voiture, il peut accéder à ses détails. Ensuite, il peut créer un compte via la page d’inscription et se connecter pour remplir le formulaire de réservation en choisissant le modèle et la date. Chaque réservation est affichée dans une liste avec possibilité de suppression. La navigation est fluide grâce à React Router, le design est moderne, responsive et basé sur un thème sombre avec une couleur principale rose/violet pour les boutons et titres, et l’utilisateur peut même suivre le nombre de visites sur la page d’accueil.