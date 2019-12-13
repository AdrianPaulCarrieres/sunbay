<?php


interface ResultatSQL
{

    const SQL_TROUVER_TOTAL_JOUR = "
        SELECT round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
        FROM donnee_mesuree
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('day', instant) = date_trunc('day', now());
    ";

    const SQL_TROUVER_TOTAL_MOIS = "
       SELECT round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
        FROM donnee_mesuree
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('month', instant) = date_trunc('month', now())
    ";

    const SQL_TROUVER_TOTAL_ANNEE = "
        (SELECT round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
            FROM donnee_mesuree
            WHERE id_type_donnee_mesuree = 2
                AND date_trunc('year', instant) = date_trunc('year', now()))
        UNION ALL
        (SELECT round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
            FROM donnee_archive
            WHERE id_type_donnee_mesuree = 2
                AND date_trunc('year', instant) = date_trunc('year', now()))

    ";

    const SQL_LISTER_LUMINOSITE_JOUR_PAR_HEURE = "
        SELECT extract(hour FROM date_trunc('hour', instant)) as index_moment,
            round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
        FROM donnee_mesuree
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('day', instant) = date_trunc('day', now())
        GROUP BY index_moment
    ";

    const SQL_LISTER_LUMINOSITE_MOIS_PAR_JOUR = " 
        SELECT extract(day FROM date_trunc('day', instant)) as index_moment,
            round(avg(valeur),1) as moyenne,
            round(min(valeur),1) as minimum,
            round(max(valeur),1) as maximum
        FROM donnee_mesuree
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('month', instant) = date_trunc('month', now())
        GROUP BY index_moment;
    ";

    const SQL_LISTER_LUMINOSITE_ANNEE_PAR_MOIS = "
    (SELECT extract(month FROM date_trunc('month', instant)) as index_moment,
        round(avg(valeur),1) as moyenne,
        round(min(valeur),1) as minimum,
        round(max(valeur),1) as maximum
        FROM donnee_mesuree
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('year', instant) = date_trunc('year', now())
        GROUP BY index_moment)
    UNION ALL
    (SELECT extract(month FROM date_trunc('month', instant)) as index_moment,
        round(avg(valeur),1) as moyenne,
        round(min(valeur),1) as minimum,
        round(max(valeur),1) as maximum
        FROM donnee_archive
        WHERE id_type_donnee_mesuree = 2
            AND date_trunc('year', instant) = date_trunc('year', now())
        GROUP BY index_moment)
    ";
}