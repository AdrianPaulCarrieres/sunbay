#!/bin/bash
mkdir ~/.script/

### TODO ###
# Ajout du script qui crée la table d'archive dans la base de données.

# instead of moving the larger older volume of data, move the smaller newer 
# volume of data to a new table. and just point to this new table, or rename 
# the tables to do the switch in place.
#

cp archiver_donnees.sh ~/.script/
# A 00:00 le premier de chaque mois exécuter le script d'archivage. 
echo " 0 0 1 * * ~/.script/archiver_donnees.sh") |\
    crontab -