<?php

class Calcul
{
    const CLE_ID_CALUL = 'id_calcul';
    const CLE_ID_TYPE_DONNEE_MESUREE = 'id_type_donnee_mesuree';
    const CLE_ID_UNITE = 'id_unite';
    const CLE_VALEUR = 'valeur';
    const CLE_ETIQUETTE = 'etiquette';
    const CLE_DATE_DEBUT = 'date_debut';
    const CLE_DATE_FIN = 'date_fin';

    private $idCalcul;
    private $idTypeDonneeMesuree;
    private $idUnite;
    private $valeur;
    private $etiquette;
    private $dateDebut;
    private $dateFin;

    /**
     * Calcul constructor.
     * @param $idCalcul
     * @param $idTypeDonneeMesuree
     * @param $idUnite
     * @param $valeur
     * @param $etiquette
     * @param $dateDebut
     * @param $dateFin
     */
    public function __construct($idCalcul, $idTypeDonneeMesuree, $idUnite, $valeur, $etiquette, $dateDebut, $dateFin)
    {
        $this->idCalcul = $idCalcul;
        $this->idTypeDonneeMesuree = $idTypeDonneeMesuree;
        $this->idUnite = $idUnite;
        $this->valeur = $valeur;
        $this->etiquette = $etiquette;
        $this->dateDebut = $dateDebut;
        $this->dateFin = $dateFin;
    }

    /**
     * @return mixed
     */
    public function getIdCalcul()
    {
        return $this->idCalcul;
    }

    /**
     * @param mixed $idCalcul
     */
    public function setIdCalcul($idCalcul)
    {
        $this->idCalcul = $idCalcul;
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

    /**
     * @return mixed
     */
    public function getIdUnite()
    {
        return $this->idUnite;
    }

    /**
     * @param mixed $idUnite
     */
    public function setIdUnite($idUnite)
    {
        $this->idUnite = $idUnite;
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
    public function getEtiquette()
    {
        return $this->etiquette;
    }

    /**
     * @param mixed $etiquette
     */
    public function setEtiquette($etiquette)
    {
        $this->etiquette = $etiquette;
    }

    /**
     * @return mixed
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * @param mixed $dateDebut
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;
    }

    /**
     * @return mixed
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * @param mixed $dateFin
     */
    public function setDateFin($dateFin)
    {
        $this->dateFin = $dateFin;
    }
}