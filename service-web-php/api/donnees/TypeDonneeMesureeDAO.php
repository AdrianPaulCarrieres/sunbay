<?php

class TypeDonneeMesureeDAO implements TypeDonneeMesureeSQL
{
    private static $instance;

    private $connection;
    private $listeTypeDonneeMesuree;

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new TypeDonneeMesureeDAO();
        }
        return self::$instance;
    }

    public function __construct()
    {
        $this->connection = BaseDeDonnees::getInstance()->getConnection();
        $this->listeTypeDonneeMesuree = array();
    }

    public function recupererListeTypeDonneeMesuree()
    {
        $curseur = $this->connection->query(TypeDonneeMesureeSQL::SQL_LISTER_TYPE_DONNEE_MESUREE);
        $this->listeTypeDonneeMesuree = array();

        foreach ($curseur as $item) {
            $idTypeDonneeMesuree = $item[TypeDonneeMesuree::CLE_ID_TYPE_DONNEE_MESUREE];
            $etiquette = $item[TypeDonneeMesuree::CLE_ETIQUETTE];
            $unite = $item[TypeDonneeMesuree::CLE_UNITE];

            $typeDonneeMesuree = new TypeDonneeMesuree(
                $idTypeDonneeMesuree,
                $etiquette,
                $unite
            );
            array_push($this->listeTypeDonneeMesuree, $typeDonneeMesuree);
        }
        return $this->listeTypeDonneeMesuree;
    }

    public function trouverTypeDonneeMesureeParId($idRecherche)
    {
        // TODO : améliorer la recherche par une requête à la base de données
        $this->recupererListeTypeDonneeMesuree();
        foreach ($this->listeTypeDonneeMesuree as $typeDonneeMesuree) {
            if ($idRecherche == $typeDonneeMesuree->getIdTypeDonneeMesuree()) return $typeDonneeMesuree;
        }
    }
}