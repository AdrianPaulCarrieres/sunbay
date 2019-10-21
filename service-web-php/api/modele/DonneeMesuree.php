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
    private $idTypeDonneeMesuree;

    /**
     * DonneeMesuree constructor.
     * @param $idDonneeMesuree
     * @param $valeur
     * @param $instant
     * @param $idTypeDonneeMesuree
     */
    public function __construct($idDonneeMesuree, $valeur, $instant, $idTypeDonneeMesuree)
    {
        $this->idDonneeMesuree = $idDonneeMesuree;
        $this->valeur = $valeur;
        $this->instant = $instant;
        $this->idTypeDonneeMesuree = $idTypeDonneeMesuree;
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
    public function getIdTypeDonneeMesuree()
    {
        return $this->idTypeDonneeMesuree;
    }

    /**
     * @param mixed $idTypeDonneeMesuree
     */
    public function setIdTypeDonneeMesuree($idTypeDonneeMesuree)
    {
        $this->idTypeDonneeMesuree = $idTypeDonneeMesuree;
    }
}