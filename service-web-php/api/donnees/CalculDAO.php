<?php

class CalculDAO implements CalculSQL
{
    private static $instance;

    private $connection;
    private $listeCalcul;

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new CalculDAO();
        }
        return self::$instance;
    }

    public function __construct()
    {
        $this->connection = BaseDeDonnees::getInstance()->getConnection();
        $this->listeCalcul = array();
    }

    public function recupererListeCalcul()
    {
        $curseur = $this->connection->query(CalculSQL::SQL_LISTER_CALCUL);
        $this->listeCalcul = array();

        foreach ($curseur as $item) {
            $idCalcul = $item[Calcul::CLE_ID_CALUL];
            $idTypeDonneeMesuree = $item[Calcul::CLE_ID_TYPE_DONNEE_MESUREE];
            $idUnite = $item[Calcul::CLE_ID_UNITE];
            $valeur = $item[Calcul::CLE_VALEUR];
            $etiquette = $item[Calcul::CLE_ETIQUETTE];
            $dateDebut = $item[Calcul::CLE_DATE_DEBUT];
            $dateFin = $item[Calcul::CLE_DATE_FIN];

            $typeDonneeMesuree = TypeDonneeMesureeDAO::getInstance()->trouverTypeDonneeMesureeParId($idTypeDonneeMesuree);
            $unite = UniteDAO::getInstance()->trouverUniteParId($idUnite);

            $calcul = new Calcul(
              $idCalcul,
                $typeDonneeMesuree,
                $unite,
                $valeur,
                $etiquette,
                $dateDebut,
                $dateFin
            );
            array_push($this->listeCalcul, $calcul);
        }
        return $this->listeCalcul;
    }

    public function exporter()
    {
        $this->recupererListeCalcul();

        $xml = "";
        foreach ($this->listeCalcul as $calcul) {
            $xml .= "<calcul>" . "\n" .
                "\t" . "<idCalcul>" . $calcul->getIdCalcul() . "</idCalcul>" . "\n" .
                "\t" . "<typeDonneeMesuree>" . $calcul->getTypeDonneeMesuree()->getEtiquette() . "</typeDonneeMesuree>" . "\n" .
                "\t" . "<unite>" . $calcul->getUnite()->getEtiquette() . "</unite>" . "\n" .
                "\t" . "<valeur>" . $calcul->getValeur() . "</valeur>" . "\n" .
                "\t" . "<etiquette>" . $calcul->getEtiquette() . "</etiquette>" . "\n" .
                "\t" . "<dateDebut>" . $calcul->getDateDebut() . "</dateDebut>" . "\n" .
                "\t" . "<dateFin>" . $calcul->getDateFin() . "</dateFin>" . "\n" .
            "</calcul>" . "\n";
        }
        return $xml;
    }
}