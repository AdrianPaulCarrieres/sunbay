<?php

require_once('required.php');

if ( isset($_GET['plage']) ) $plage = htmlentities($_GET['plage']);

if ( !isset($plage) ) exit();

if ( !($plage == 'jour' || $plage == 'mois' || $plage == 'annee') ) exit();

echo CalculateurMock::recupererDonnees($plage);