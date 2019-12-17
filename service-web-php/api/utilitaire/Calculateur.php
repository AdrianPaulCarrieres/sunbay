<?php


final class Calculateur
{
    const LISTE_ETIQUETTE_JOUR = array(
        '00:00 à 01:00',
        '01:00 à 02:00',
        '02:00 à 03:00',
        '03:00 à 04:00',
        '04:00 à 05:00',
        '05:00 à 06:00',
        '06:00 à 07:00',
        '07:00 à 08:00',
        '08:00 à 09:00',
        '09:00 à 10:00',
        '10:00 à 11:00',
        '11:00 à 12:00',
        '12:00 à 13:00',
        '13:00 à 14:00',
        '14:00 à 15:00',
        '15:00 à 16:00',
        '16:00 à 17:00',
        '17:00 à 18:00',
        '18:00 à 19:00',
        '19:00 à 20:00',
        '20:00 à 21:00',
        '21:00 à 22:00',
        '22:00 à 23:00',
        '23:00 à 00:00'
    );

    const LISTE_ETIQUETTE_ANNEE = array(
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    );

    static function recupererDonnees($plage)
    {
        $resultat = ResultatDAO::getInstance()->recupererResultat($plage);
        $xml = "";
        $xml .= "<resultat>" . "\n" .
            "\t" . "<plage>" . $resultat->getPlage() . "</plage>" . "\n" .
            "\t" . "<unite-moment>" . $resultat->getUniteMoment() . "</unite-moment>" . "\n" .
            "\t" . "<type-donnee>" . $resultat->getTypeDonnee() . "</type-donnee>" . "\n" .
            "\t" . "<unite>" . $resultat->getUnite() . "</unite>" . "\n" .
            "\t" . "<total>" . "\n" .
            "\t\t" . "<moyenne>" . $resultat->getTotalMoment()->getMoyenne() . "</moyenne>" . "\n" .
            "\t\t" . "<min>" . $resultat->getTotalMoment()->getMinimum() . "</min>" . "\n" .
            "\t\t" . "<max>" . $resultat->getTotalMoment()->getMaximum() . "</max>" . "\n" .
            "\t" . "</total>" . "\n" .
            "";

        foreach ($resultat->getListeMoment() as $moment) {
            $xml .= "\t" . "<moment>" . "\n" .
                "\t\t" . "<numero>" . self::etiqueterMoment($plage, $moment->getIndexMoment()) . "</numero>" . "\n" .
                "\t\t" . "<moyenne>" . $moment->getMoyenne() . "</moyenne>" . "\n" .
                "\t\t" . "<min>" . $moment->getMinimum() . "</min>" . "\n" .
                "\t\t" . "<max>" . $moment->getMaximum() . "</max>" . "\n" .
                "\t" . "</moment>" . "\n";
        }

        $xml .= "</resultat>";
        return $xml;
    }

    static function etiqueterMoment($plage, $compteur)
    {
        switch ($plage) {
            case 'jour':
                return self::LISTE_ETIQUETTE_JOUR[$compteur];
            case 'annee':
                return self::LISTE_ETIQUETTE_ANNEE[$compteur];
            default:
                return $compteur+1;
        }
    }
}