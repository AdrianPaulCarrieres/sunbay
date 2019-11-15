<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

header("Access-Control-Allow-Origin: *");
require_once('required.php');

require_once('../secure/env.developpement.php');

if ( isset($_GET['plage']) ) $plage = htmlentities($_GET['plage']);

if ( !isset($plage) ) exit();

if ( !($plage == 'jour' || $plage == 'mois' || $plage == 'annee') ) exit();

echo Calculateur::recupererDonnees($plage);