<?php

class Unite
{
    const CLE_ID_UNITE = 'id_unite';
    const CLE_ETIQUETTE = 'etiquette';

    private $idUnite;
    private $etiquette;

    /**
     * Unite constructor.
     * @param $idUnite
     * @param $etiquette
     */
    public function __construct($idUnite, $etiquette)
    {
        $this->idUnite = $idUnite;
        $this->etiquette = $etiquette;
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