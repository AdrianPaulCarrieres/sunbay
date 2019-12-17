#!/bin/bash
SERVEUR=localhost
PORT=5432
BASE_DE_DONNEES=sunbay
MOT_DE_PASSE=123qweQWE

echo ${SERVEUR}:${PORT}:${BASE_DE_DONNEES}:postgres:${MOT_DE_PASSE} > ~/.pgpass

chmod 600 ~/.pgpass
mkdir ~/scripts
cp sauvegarder.sh ~/scripts/

mkdir ~/backup
# Sauvegarder a chque jour
echo " 0 0 * * * ~/.script/sauvegarder.sh" | crontab -