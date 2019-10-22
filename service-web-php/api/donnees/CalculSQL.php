<?php

interface CalculSQL
{
    const SQL_LISTER_CALCUL = "SELECT id_calcul, id_type_donnee_mesuree, id_unite, valeur, etiquette, date_debut, date_fin FROM calcul";
}