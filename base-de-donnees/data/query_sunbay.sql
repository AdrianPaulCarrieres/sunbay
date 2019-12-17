-- -- LISTER_TYPE_DONNEE_MESUREE
-- SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree;

-- -- TROUVER_TYPE_DONNEE_MESUREE_PAR_ID
-- SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree WHERE id_type_donnee_mesuree = 1;

-- -- LISTER_TEMPERATURE_JOUR
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 1
--     AND date_trunc('day', instant) = date_trunc('day', now())
-- ORDER BY instant;

-- -- LISTER_TEMPERATURE_MOIS
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 1
--     AND date_trunc('month', instant) = date_trunc('month', now())
-- ORDER BY instant;

-- -- LISTER_TEMPERATURE_ANNEE
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 1
--     AND date_trunc('year', instant) = date_trunc('year', now())
-- ORDER BY instant;

-- -- LISTER_LUMINOSITE_JOUR
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 2
--     AND date_trunc('day', instant) = date_trunc('day', now())
-- ORDER BY instant;

-- -- LISTER_LUMINOSITE_MOIS
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 2
--     AND date_trunc('month', instant) = date_trunc('month', now())
-- ORDER BY instant;

-- -- LISTER_LUMINOSITE_ANNEE
-- SELECT id_donnee_mesuree, valeur, to_char(instant, 'dd-mm-YYYY HH24:MM:SS') as instant, id_type_donnee_mesuree 
-- FROM donnee_mesuree
-- WHERE id_type_donnee_mesuree = 2
--     AND date_trunc('year', instant) = date_trunc('year', now())
-- ORDER BY instant;

-- -- TROUVER_TOTAL_JOUR
SELECT avg(valeur) as moyenne, min(valeur) as minimum, max(valeur) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('day', instant) = date_trunc('day', now());


-- -- TROUVER_TOTAL_MOIS
SELECT avg(valeur) as moyenne, min(valeur) as minimum, max(valeur) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('month', instant) = date_trunc('month', now());


-- -- TROUVER_TOTAL_ANNEE
SELECT avg(valeur) as moyenne, min(valeur) as minimum, max(valeur) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('year', instant) = date_trunc('year', now());

-- -- LISTER_LUMINOSITE_JOUR_PAR_HEURE
SELECT extract(hour FROM date_trunc('hour', instant)) as moment, 
    round(avg(valeur),1) as moyenne,
    round(min(valeur),1) as minimum,
    round(max(valeur),1) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('day', instant) = date_trunc('day', now())
GROUP BY moment;

-- -- -- LISTER_LUMINOSITE_MOIS_PAR_JOUR
SELECT extract(day FROM date_trunc('day', instant)) as moment, 
    round(avg(valeur),1) as moyenne,
    round(min(valeur),1) as minimum,
    round(max(valeur),1) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('month', instant) = date_trunc('month', now())
GROUP BY moment;

-- -- -- LISTER_LUMINOSITE_ANNEE_PAR_MOIS
SELECT extract(month FROM date_trunc('month', instant)) as moment, 
    round(avg(valeur),1) as moyenne,
    round(min(valeur),1) as minimum,
    round(max(valeur),1) as maximum
FROM donnee_mesuree
WHERE id_type_donnee_mesuree = 2 AND date_trunc('year', instant) = date_trunc('year', now())
GROUP BY moment;





