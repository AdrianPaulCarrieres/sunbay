<?php

interface DonneeMesureeSQL
{
    const SQL_LISTER_DONNEE_MESUREE = "SELECT id_donnee_mesuree, valeur, instant, id_type_donnee_mesuree FROM donnee_mesuree";
}