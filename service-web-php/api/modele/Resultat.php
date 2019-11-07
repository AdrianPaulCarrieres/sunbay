<?php


class Resultat
{
    private $plage;
    private $uniteMoment;
    private $typeDonnee;
    private $unite;
    private $totalMoment;
    private $listeMoment;

    /**
     * Resultat constructor.
     * @param $plage
     * @param $uniteMoment
     * @param $typeDonnee
     * @param $unite
     * @param $totalMoment
     * @param $listeMoment
     */
    public function __construct($plage, $uniteMoment, $typeDonnee, $unite, $totalMoment, $listeMoment)
    {
        $this->plage = $plage;
        $this->uniteMoment = $uniteMoment;
        $this->typeDonnee = $typeDonnee;
        $this->unite = $unite;
        $this->totalMoment = $totalMoment;
        $this->listeMoment = $listeMoment;
    }

    /**
     * @return mixed
     */
    public function getPlage()
    {
        return $this->plage;
    }

    /**
     * @param mixed $plage
     */
    public function setPlage($plage)
    {
        $this->plage = $plage;
    }

    /**
     * @return mixed
     */
    public function getUniteMoment()
    {
        return $this->uniteMoment;
    }

    /**
     * @param mixed $uniteMoment
     */
    public function setUniteMoment($uniteMoment)
    {
        $this->uniteMoment = $uniteMoment;
    }

    /**
     * @return mixed
     */
    public function getTypeDonnee()
    {
        return $this->typeDonnee;
    }

    /**
     * @param mixed $typeDonnee
     */
    public function setTypeDonnee($typeDonnee)
    {
        $this->typeDonnee = $typeDonnee;
    }

    /**
     * @return mixed
     */
    public function getUnite()
    {
        return $this->unite;
    }

    /**
     * @param mixed $unite
     */
    public function setUnite($unite)
    {
        $this->unite = $unite;
    }

    /**
     * @return mixed
     */
    public function getTotalMoment()
    {
        return $this->totalMoment;
    }

    /**
     * @param mixed $totalMoment
     */
    public function setTotalMoment($totalMoment)
    {
        $this->totalMoment = $totalMoment;
    }

    /**
     * @return mixed
     */
    public function getListeMoment()
    {
        return $this->listeMoment;
    }

    /**
     * @param mixed $listeMoment
     */
    public function setListeMoment($listeMoment)
    {
        $this->listeMoment = $listeMoment;
    }
}