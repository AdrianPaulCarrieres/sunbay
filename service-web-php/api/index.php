<?php

require_once('required.php');

if ( isset($_GET['typeDonnee']) ) $typeDonnee = htmlentities($_GET['typeDonnee']);
if ( isset($_GET['plage']) ) $plage = htmlentities($_GET['plage']);

if ( !(isset($typeDonnee) || isset($plage)) ) exit();

if ( !($typeDonnee == 'luminosite' || $typeDonnee == 'temperature' ) ) exit();
if ( !($plage == 'jour' || $plage == 'mois' || $plage == 'annee') ) exit();

$calculDAO = CalculDAO::getInstance();
$calculDAO->recupererListeCalculParTypeDonneeEtPlage($typeDonnee, $plage);

echo $calculDAO->exporter();