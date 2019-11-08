<?php


class ResultatDAO implements ResultatSQL
{
    private static $instance;

    private $connection;

    private $resultat;

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new ResultatDAO();
        }
        return self::$instance;
    }

    public function __construct()
    {
        $this->connection = BaseDeDonnees::getInstance()->getConnection();
    }

    /**
     * @return mixed
     */
    public function recupererResultat($plage)
    {
        $uniteMoment = self::etiqueterUniteMoment($plage);
        $typeDonnee = "luminosité";
        $unite = "lux";

        $requetetotal = "";
        $requeteliste = "";
        switch ($plage) {
            case 'jour':
                $requetetotal = ResultatSQL::SQL_TROUVER_TOTAL_JOUR;
                $requeteliste = ResultatSQL::SQL_LISTER_LUMINOSITE_JOUR_PAR_HEURE;
                break;
            case 'mois':
                $requetetotal = ResultatSQL::SQL_TROUVER_TOTAL_MOIS;
                $requeteliste = ResultatSQL::SQL_LISTER_LUMINOSITE_MOIS_PAR_JOUR;
                break;
            case 'annee':
                $requetetotal = ResultatSQL::SQL_TROUVER_TOTAL_ANNEE;
                $requeteliste = ResultatSQL::SQL_LISTER_LUMINOSITE_ANNEE_PAR_MOIS;
                break;
        }

        $curseur = $this->connection->query($requetetotal);
        foreach ($curseur as $item) {
            $moyenne = $item[Moment::CLE_MOYENNE];
            $minimum = $item[Moment::CLE_MINIMUM];
            $maximum = $item[Moment::CLE_MAXIMUM];
        }
        $totalMoment = new Moment(0, $moyenne, $minimum, $maximum);

        $listeMoment = array();
        $curseur = $this->connection->query($requeteliste);
        foreach ($curseur as $item) {
//            $indexMoment = intval($item[Moment::CLE_INDEX_MOMENT]);
            $indexMoment = 1;
            $moyenne = $item[Moment::CLE_MOYENNE];
            $minimum = $item[Moment::CLE_MINIMUM];
            $maximum = $item[Moment::CLE_MAXIMUM];

            array_push($listeMoment, new Moment($indexMoment, $moyenne, $minimum, $maximum));
        }

        return new Resultat($plage, $uniteMoment, $typeDonnee, $unite, $totalMoment, $listeMoment);
    }

    static function etiqueterUniteMoment($plage)
    {
        switch ($plage) {
            case 'jour':
                return 'heure';
            case 'mois':
                return 'jour';
            case 'annee':
                return 'mois';
            default:
                return 'moment';
        }
    }
}