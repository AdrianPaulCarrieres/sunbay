#!bin/bash

mkdir ~/.script/

cp cache ~/.script/

#Toutes les heures à la minute 00, on exécute le script
echo " 0 * * * *  nodejs ~/.script/main.js" | crontab -