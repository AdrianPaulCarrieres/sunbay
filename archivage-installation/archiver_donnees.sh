#!/bin/bash

SERVEUR=192.168.56.10
PORT=2232
BASE_DE_DONNEES=sunbay
TABLE=donnee_mesuree
CHAMPS_DATE=instant
DATE_LIMITE=`date --date="$(date +%Y-%m-15) -3 month" +'%Y-%m-01 00:00:00'`

# The fuzz in units can cause problems with relative items. For example, 
# 2003-07-31 -1 month might evaluate to 2003-07-01, because 2003-06-31 is an 
# invalid date. To determine the previous month more reliably, you can ask for 
# the month before the 15th of the current month.
# From GNU date info page https://www.gnu.org/software/coreutils/manual/html_node/Relative-items-in-date-strings.html

psql --host ${SERVEUR} --port ${PORT} --dbname ${BASE_DE_DONNEES} <<FIN
  SELECT COUNT(*) FROM ${TABLE}
  WHERE ${CHAMPS_DATE} <= '${DATE_LIMITE}'::DATE
FIN