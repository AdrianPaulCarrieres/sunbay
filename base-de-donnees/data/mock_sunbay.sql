\COPY unite(etiquette) FROM './mockdata/unite.csv' DELIMITER ';' CSV;
\COPY type_donnee_mesuree(etiquette) FROM './mockdata/type_donnee_mesuree.csv' DELIMITER ';' CSV;
\COPY donnee_mesuree(valeur,instant,id_type_donnee_mesuree) FROM './mockdata/donnee_mesuree.csv' DELIMITER ';' CSV;
\COPY calcul(id_type_donnee_mesuree,id_unite,valeur,etiquette,date_debut,date_fin) FROM './mockdata/calcul.csv' DELIMITER ';' CSV;


