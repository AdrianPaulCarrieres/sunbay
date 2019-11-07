<?php


class Calculateur
{
    static function recupererDonnees($plage)
    {
        switch ($plage) {
            case 'jour':
                return self::recupererDonneesJour();
            case 'mois':
                return self::recupererDonneesMois();
            case 'annee':
                return self::recupererDonneesAnnee();
            default:
                return 'erreur de plage';
        }
    }

    static function recupererDonneesJour()
    {
        $xml = "";
        $xml .= "<resultat>" . "\n" .
            "";

        // TODO : tu étais là


        foreach ($this->listeCalcul as $calcul) {
            $xml .= "<aaaa>" . "\n" .
                "\t" . "<idCalcul>" . $calcul->getIdCalcul() . "</idCalcul>" . "\n" .
                "\t" . "<typeDonneeMesuree>" . $calcul->getTypeDonneeMesuree()->getEtiquette() . "</typeDonneeMesuree>" . "\n" .
                "\t" . "<unite>" . $calcul->getUnite()->getEtiquette() . "</unite>" . "\n" .
                "\t" . "<valeur>" . $calcul->getValeur() . "</valeur>" . "\n" .
                "\t" . "<etiquette>" . $calcul->getEtiquette() . "</etiquette>" . "\n" .
                "\t" . "<dateDebut>" . $calcul->getDateDebut() . "</dateDebut>" . "\n" .
                "\t" . "<dateFin>" . $calcul->getDateFin() . "</dateFin>" . "\n" .
                "</aaaa>" . "\n";
        }

        $xml .= "</resultat>";
        return $xml;
    }
}