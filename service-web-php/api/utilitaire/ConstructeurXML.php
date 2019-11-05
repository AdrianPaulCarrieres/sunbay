<?php

class ConstructeurXML
{
    private $plage;
    private $uniteMoment;
    private $typeDonnee;
    private $unite;
    private $globalMoyenne;
    private $globalMininum;
    private $globalMaximum;
    private $listeMoment;


    public function exporter()
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




    "
<resultat>
<plage>mois</plage>
<unite-moment>semaine</unite-moment>
<type-donnee>temperature</type-donnee>
<unite>°C</unite>

<total>
<moyenne>29</moyenne>
<min>12</min>
<max>40</max>
</total>

<moment>
<numero>1</numero>
<moyenne>10</moyenne>
<min>5</min>
<max>15</max>
</moment>

<moment>
<numero>2</numero>
<moyenne>10</moyenne>
<min>5</min>
<max>15</max>
</moment>

<moment>
<numero>3</numero>
<moyenne>10</moyenne>
<min>5</min>
<max>15</max>
</moment>

<moment>
<numero>4</numero>
<moyenne>10</moyenne>
<min>5</min>
<max>15</max>
</moment>

</resultat>";


}