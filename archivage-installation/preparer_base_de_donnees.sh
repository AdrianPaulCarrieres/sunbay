#!/bin/bash

SERVEUR=192.168.56.10
PORT=2232
BASE_DE_DONNEES=sunbay
TABLE=donnee_mesuree
TABLE_TEMP=donnee_temp
TABLE_ARCHIVE=donnee_archive
CHAMPS_DATE=instant
DATE_LIMITE=`date --date="$(date +%Y-%m-15) -3 month" +'%Y-%m-01 00:00:00'`

# Sélectionner dans ${TABLE} les données plus récentes que ${DATE_LIMITE}
# Les effacer et les copier dans ${TABLE_TEMP} 
# Renommer ${TABLE} en ${TABLE_ARCHIVE}
# Renommer ${TABLE_TEMP} en ${TABLE}


psql --host ${SERVEUR} --port ${PORT} --dbname ${BASE_DE_DONNEES} <<FIN
    WITH delta AS (
        DELETE FROM ${TABLE} WHERE ${CHAMPS_DATE} >= '${DATE_LIMITE}'::DATE
        RETURNING *
    )
    INSERT INTO ${TABLE_TEMP} 
    SELECT * FROM delta;

    ALTER TABLE ${TABLE}
    RENAME TO ${TABLE_ARCHIVE};

    ALTER TABLE ${TABLE_TEMP}
    RENAME TO ${TABLE};
FIN