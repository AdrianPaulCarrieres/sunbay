#!/bin/bash

BASE_DE_DONNEES=sunbay
TABLE=donnee_mesuree
TABLE_ARCHIVE=donnee_archive
CHAMPS_DATE=instant
DATE_LIMITE=`date --date="$(date +%Y-%m-15) -3 month" +'%Y-%m-01 00:00:00'`

# Sélectionner dans ${TABLE} les données plus récentes que ${DATE_LIMITE}
# Les effacer et les copier dans ${TABLE_TEMP} 
# Renommer ${TABLE} en ${TABLE_ARCHIVE}
# Renommer ${TABLE_TEMP} en ${TABLE}

psql --dbname ${BASE_DE_DONNEES} <<FIN
    WITH delta AS (
        DELETE FROM ${TABLE} WHERE ${CHAMPS_DATE} <= '${DATE_LIMITE}'::DATE
        RETURNING *
    )
    INSERT INTO ${TABLE_ARCHIVE} 
    SELECT * FROM delta
FIN