<?php

class DonneeMesuree
{
    const CLE_ID_DONNEE_MESUREE = 'id_donnee_mesuree';
    const CLE_VALEUR = 'valeur';
    const CLE_INSTANT = 'instant';
    const CLE_ID_TYPE_DONNEE_MESUREE = 'id_type_donnee_mesuree';

    private $idDonneeMesuree;
    private $valeur;
    private $instant;
    private $typeDonneeMesuree;

    /**
     * DonneeMesuree constructor.
     * @param $idDonneeMesuree
     * @param $valeur
     * @param $instant
     * @param $typeDonneeMesuree
     */
    public function __construct($idDonneeMesuree, $valeur, $instant, $typeDonneeMesuree)
    {
        $this->idDonneeMesuree = $idDonneeMesuree;
        $this->valeur = $valeur;
        $this->instant = $instant;
        $this->typeDonneeMesuree = $typeDonneeMesuree;
    }

    /**
     * @return mixed
     */
    public function getIdDonneeMesuree()
    {
        return $this->idDonneeMesuree;
    }

    /**
     * @param mixed $idDonneeMesuree
     */
    public function setIdDonneeMesuree($idDonneeMesuree)
    {
        $this->idDonneeMesuree = $idDonneeMesuree;
    }

    /**
     * @return mixed
     */
    public function getValeur()
    {
        return $this->valeur;
    }

    /**
     * @param mixed $valeur
     */
    public function setValeur($valeur)
    {
        $this->valeur = $valeur;
    }

    /**
     * @return mixed
     */
    public function getInstant()
    {
        return $this->instant;
    }

    /**
     * @param mixed $instant
     */
    public function setInstant($instant)
    {
        $this->instant = $instant;
    }

    /**
     * @return mixed
     */
    public function getTypeDonneeMesuree()
    {
        return $this->typeDonneeMesuree;
    }

    /**
     * @param mixed $typeDonneeMesuree
     */
    public function setTypeDonneeMesuree($typeDonneeMesuree)
    {
        $this->typeDonneeMesuree = $typeDonneeMesuree;
    }
}