-- SELECT id_unite, etiquette FROM unite;

-- SELECT id_type_donnee_mesuree, etiquette FROM type_donnee_mesuree;

-- SELECT id_donnee_mesuree, valeur, instant, id_type_donnee_mesuree FROM donnee_mesuree;

-- SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin FROM calcul;

SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 1
                AND date_trunc('day', date_debut) = date_trunc('day', now())
                AND date_trunc('day', date_fin) = date_trunc('day', now());