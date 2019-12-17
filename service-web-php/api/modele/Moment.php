<?php


class Moment
{
    const CLE_INDEX_MOMENT = "index_moment";
    const CLE_MOYENNE = "moyenne";
    const CLE_MINIMUM = "minimum";
    const CLE_MAXIMUM = "maximum";

    private $indexMoment;
    private $moyenne;
    private $minimum;
    private $maximum;

    /**
     * Moment constructor.
     * @param $indexMoment
     * @param $moyenne
     * @param $minimum
     * @param $maximum
     */
    public function __construct($indexMoment, $moyenne, $minimum, $maximum)
    {
        $this->indexMoment = $indexMoment;
        $this->moyenne = $moyenne;
        $this->minimum = $minimum;
        $this->maximum = $maximum;
    }

    /**
     * @return mixed
     */
    public function getIndexMoment()
    {
        return $this->indexMoment;
    }

    /**
     * @param mixed $indexMoment
     */
    public function setIndexMoment($indexMoment)
    {
        $this->indexMoment = $indexMoment;
    }

    /**
     * @return mixed
     */
    public function getMoyenne()
    {
        return $this->moyenne;
    }

    /**
     * @param mixed $moyenne
     */
    public function setMoyenne($moyenne)
    {
        $this->moyenne = $moyenne;
    }

    /**
     * @return mixed
     */
    public function getMinimum()
    {
        return $this->minimum;
    }

    /**
     * @param mixed $minimum
     */
    public function setMinimum($minimum)
    {
        $this->minimum = $minimum;
    }

    /**
     * @return mixed
     */
    public function getMaximum()
    {
        return $this->maximum;
    }

    /**
     * @param mixed $maximum
     */
    public function setMaximum($maximum)
    {
        $this->maximum = $maximum;
    }
}