<?php

class TypeDonneeMesuree
{
    const CLE_ID_TYPE_DONNEE_MESUREE = 'id_type_donnee_mesuree';
    const CLE_ETIQUETTE = 'etiquette';

    private $idTypeDonneeMesuree;
    private $etiquette;

    /**
     * TypeDonneeMesuree constructor.
     * @param $idTypeDonneeMesuree
     * @param $etiquette
     */
    public function __construct($idTypeDonneeMesuree, $etiquette)
    {
        $this->idTypeDonneeMesuree = $idTypeDonneeMesuree;
        $this->etiquette = $etiquette;
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
}