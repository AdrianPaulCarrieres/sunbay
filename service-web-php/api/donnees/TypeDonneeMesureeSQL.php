<?php

interface TypeDonneeMesureeSQL
{
    const SQL_LISTER_TYPE_DONNEE_MESUREE = "SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree";
    const SQL_TROUVER_TYPE_DONNEE_MESUREE_PAR_ID = "SELECT id_type_donnee_mesuree, etiquette, unite FROM type_donnee_mesuree WHERE id_type_donnee_mesuree=?";
}