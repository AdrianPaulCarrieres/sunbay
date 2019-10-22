<?php

require_once('../secure/env.developpement.php');
require_once('modele/Calcul.php');
require_once('modele/DonneeMesuree.php');
require_once('modele/TypeDonneeMesuree.php');
require_once('modele/Unite.php');
require_once('donnees/BaseDeDonneesSQL.php');
require_once('donnees/BaseDeDonnees.php');
require_once('donnees/DonneeMesureeSQL.php');
require_once('donnees/DonneeMesureeDAO.php');
require_once('donnees/UniteSQL.php');
require_once('donnees/UniteDAO.php');
require_once('donnees/CalculSQL.php');
require_once('donnees/CalculDAO.php');
require_once('donnees/TypeDonneeMesureeSQL.php');
require_once('donnees/TypeDonneeMesureeDAO.php');

echo CalculDAO::getInstance()->exporter();