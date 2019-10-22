<?php

interface CalculSQL
{
    const SQL_LISTER_CALCUL = "SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin FROM calcul";

    const SQL_LISTER_CALCUL_LUMINOSITE_JOUR =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 1
                AND date_trunc('day', date_debut) = date_trunc('day', now())
                AND date_trunc('day', date_fin) = date_trunc('day', now())
        ";

    const SQL_LISTER_CALCUL_LUMINOSITE_MOIS =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 1
                AND date_trunc('month', date_debut) = date_trunc('month', now())
                AND date_trunc('month', date_fin) = date_trunc('month', now())
        ";

    const SQL_LISTER_CALCUL_LUMINOSITE_ANNEE =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 1
                AND date_trunc('year', date_debut) = date_trunc('year', now())
                AND date_trunc('year', date_fin) = date_trunc('year', now())
        ";

    const SQL_LISTER_CALCUL_TEMPERATURE_JOUR =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 2
                AND date_trunc('day', date_debut) = date_trunc('day', now())
                AND date_trunc('day', date_fin) = date_trunc('day', now())
        ";

    const SQL_LISTER_CALCUL_TEMPERATURE_MOIS =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 2
                AND date_trunc('month', date_debut) = date_trunc('month', now())
                AND date_trunc('month', date_fin) = date_trunc('month', now())
        ";

    const SQL_LISTER_CALCUL_TEMPERATURE_ANNEE =
        "
            SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin 
            FROM calcul
            WHERE id_type_donnee_mesuree = 2
                AND date_trunc('year', date_debut) = date_trunc('year', now())
                AND date_trunc('year', date_fin) = date_trunc('year', now())
        ";
}