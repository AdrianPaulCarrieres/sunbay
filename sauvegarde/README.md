# Sécurisation du projet

## Sauvegarde et restauration de la BDD

Cette branche contient les scripts d'installation qui permettent d'activer
la fonctionnalité de sauvegarde quotidienne de la base de données et
la restauration de celle-ci en cas de besoin.

### Installation

#### Ces commandes doivent être lancées en tant que l'utilisateur qui à droit de lecture/écriture sur la BD

1. Cloner le répertoire
```shell
git clone
```

2. Modifier les variables dans les scripts installer.sh et sauvegarder.sh

3. Lancer le script installer.sh 

   ```
   ./installer.sh
   ```

4. À chaque jour la BD sera sauvegardée sous /home/<dbuser>/backup/sunbay_dump.sql

## Usage

Pour restaurer la base de données, lancer le script restaurer.sh

``````
./restaurer.sh
``````

