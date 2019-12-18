<?php


final class LecteurFichier {

    static function recupererDonnees($plage) {

        $nomFichier = '~/.script/cache/emplacement-fichiers-xml/' + $plage + '.xml';

        $fichier = fopen($nomFichier, 'rb');
        $xml = fread($fichier, filesize($nomFichier));

        return $xml;

    }

}