
# Sécurisation du SGBD 

## Description

Cette branche contient les scripts et fichiers de configuration nécessaires à rendre un serveur SunBay plus résillient face aux attaques informatiques courantes.

## Installation

1. Cloner le répertoire
```
git clone --single-branch --branch securisation-sgbd-master https://github.com/cegepmatane/projet-capture-2019-sunbay .
```
2. Installer les fichiers de configuration postgres.conf, .pgpass et pg_hba.conf
3. Exécuter les scripts en ordre
```
./creer_proprio.sh
./creer_user.sh
```
