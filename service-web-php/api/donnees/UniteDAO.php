<?php

class UniteDAO implements UniteSQL
{
    private static $instance;

    private $connection;
    private $listeUnite;

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new UniteDAO();
        }
        return self::$instance;
    }

    public function __construct()
    {
        $this->connection = BaseDeDonnees::getInstance()->getConnection();
        $this->listeUnite = array();
    }

    public function recupererListeUnite()
    {
        $curseur = $this->connection->query(UniteSQL::SQL_LISTER_UNITE);
        $this->listeUnite = array();

        foreach ($curseur as $item) {
            $idUnite = $item[Unite::CLE_ID_UNITE];
            $etiquette = $item[Unite::CLE_ETIQUETTE];

            $unite = new Unite(
                $idUnite,
                $etiquette
            );
            array_push($this->listeUnite, $unite);
        }
        return $this->listeUnite;
    }

    public function trouverUniteParId($idRecherche)
    {
        // TODO : améliorer la recherche par une requête à la base de données
        $this->recupererListeUnite();
        foreach ($this->listeUnite as $unite) {
            if ($idRecherche == $unite->getIdUnite()) return $unite;
        }
    }
}