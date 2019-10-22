\COPY type_donnee_mesuree(etiquette,unite) FROM './mockdata/type_donnee_mesuree.csv' DELIMITER ',' CSV;
\COPY donnee_mesuree(valeur,instant,id_type_donnee_mesuree) FROM './mockdata/donnee_mesuree.csv' DELIMITER ',' CSV;


