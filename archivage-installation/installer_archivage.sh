# A 00:00 le premier de chaque mois.
mkdir ~/.script/

### TODO ###
# Ajout du script qui crée la table d'archive dans la base de données.
#
#
#

cp archiver_donnees.sh ~/.script/
echo " 0 0 1 * * ~/.script/archiver_donnees.sh") |\
    crontab -