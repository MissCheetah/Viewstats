# Viewstats
______________

# Prérequis
Avoir installer node et un server mySQL (WAMP pour Windows, MAMP pour Mac).


# Importation de la base données
Importer la base de données à l'aide du fichier server.sql. Sur PhpMyAdmin, créer une base de données nommée "Viewstats", puis dans l'onglet Import, sélectionner le fichier.

# Lancement du server JS
Ouvrir un terminal dans la racine du projet et exécuter les commandes suivantes :

```
cd server/
```
```
npm i
```

```
cd bin
```
```
node www
```

# Lancement de l'application mobile
Dans un autre terminal ouvert à la racine du projet, exécuter :
```
cd Ionic/myApp
```
```
npm install -g @ionic/cli
```
```
npm install
```
```
ng serve --port 5000 -o
```


# Lancement de l'application Web
Dans un autre terminal ouvert à la racine du projet, exécuter :
```
cd Web-management
```
```
npm install
```
```
ng serve -o
```
