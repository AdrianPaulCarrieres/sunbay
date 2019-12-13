SERVEUR=192.168.56.10
PORT=2232
BASE_DE_DONNEES=sunbay
TABLE=employee
CHAMPS_DATE=hire_date
DATE_LIMITE=`date --date="$(date +%Y-%m-15) -1 month" +'%Y-%m-01 00:00:00'`

psql --host ${SERVEUR} --port ${PORT} --dbname ${BASE_DE_DONNEES} <<FIN
  SELECT COUNT(*) FROM ${MY_TABLE}
  WHERE ${CHAMPS_DATE} >= '${DATE_LIMITE}'::DATE
FIN