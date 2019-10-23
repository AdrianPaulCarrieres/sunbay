-- LISTER_TYPE_DONNEE_MESUREE
SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree;

-- TROUVER_TYPE_DONNEE_MESUREE_PAR_ID
SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree WHERE id_type_donnee_mesuree = 1;

-- LISTER_TEMPERATURE_JOUR
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 1
    AND date_trunc('day', instant) = date_trunc('day', now())
ORDER BY instant;

-- LISTER_TEMPERATURE_MOIS
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 1
    AND date_trunc('month', instant) = date_trunc('month', now())
ORDER BY instant;

-- LISTER_TEMPERATURE_ANNEE
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 1
    AND date_trunc('year', instant) = date_trunc('year', now())
ORDER BY instant;

-- LISTER_LUMINOSITE_JOUR
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2
    AND date_trunc('day', instant) = date_trunc('day', now())
ORDER BY instant;

-- LISTER_LUMINOSITE_MOIS
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2
    AND date_trunc('month', instant) = date_trunc('month', now())
ORDER BY instant;

-- LISTER_LUMINOSITE_ANNEE
SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2
    AND date_trunc('year', instant) = date_trunc('year', now())
ORDER BY instant;