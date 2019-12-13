#!/bin/bash
mkdir ~/.script/

# Script qui crée la table d'archive dans la base de données.
# Il déplace aussi les données plus vieilles que 3 mois dans une table d'archivage
/bin/bash preparer_base_de_donnees.sh

cp archiver_donnees.sh ~/.script/
# A 00:00 le premier de chaque mois exécuter le script d'archivage. 
echo " 0 0 1 * * ~/.script/archiver_donnees.sh" | crontab -