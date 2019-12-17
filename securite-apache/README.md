# Sécurisation de apache2

## Description

Cette branche contient les scripts et fichiers de configuration nécessaires à rendre un serveur SunBay plus résillient face aux attaques informatiques courantes. Cette partie concerne le service de données PHP.

## Installation

1. Cloner le répertoire
```shell
git clone https://github.com/cegepmatane/projet-capture-2019-sunbay
```
2. Faire un merge manuel de sa config de apache et du fichier apache2.conf fourni
3. Exécuter le script disable-mods.sh
4. Le serveur va redémarrer et la sécurité sera activée par la suite