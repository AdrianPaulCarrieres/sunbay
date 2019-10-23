<?php

class DonneeMesureeDAO implements DonneeMesureeSQL
{
    private static $instance;

    private $connection;
    private $listeDonneeMesuree;

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new DonneeMesureeDAO();
        }
        return self::$instance;
    }

    public function __construct()
    {
        $this->connection = BaseDeDonnees::getInstance()->getConnection();
        $this->listeDonneeMesuree = array();
    }

    public function recupererListeDonneeMesuree()
    {
        $curseur = $this->connection->query(DonneeMesureeSQL::SQL_LISTER_DONNEE_MESUREE);
        $this->listeDonneeMesuree = array();

        foreach ($curseur as $item) {
            $idDonneeMesuree = $item[DonneeMesuree::CLE_ID_DONNEE_MESUREE];
            $valeur = $item[DonneeMesuree::CLE_VALEUR];
            try {
                $instant = new DateTime($item[DonneeMesuree::CLE_INSTANT]);
            } catch (Exception $e) {
//                echo $e->getMessage();
            }
            $idTypeDonneeMesuree = $item[DonneeMesuree::CLE_ID_TYPE_DONNEE_MESUREE];


            $typeDonneeMesuree = TypeDonneeMesureeDAO::getInstance()->trouverTypeDonneeMesureeParId($idTypeDonneeMesuree);

            $donneeMesuree = new DonneeMesuree(
                $idDonneeMesuree,
                $valeur,
                $instant,
                $typeDonneeMesuree
            );
            array_push($this->listeDonneeMesuree, $donneeMesuree);
        }
        return $this->listeDonneeMesuree;
    }
}