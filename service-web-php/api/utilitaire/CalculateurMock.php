<?php

final class CalculateurMock
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
        return '
            <resultat>
                <plage>jour</plage>
                <unite-moment>heure</unite-moment>
                <type-donnee>luminosité</type-donnee>
                <unite>Lux</unite>
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
                <moment>
                    <numero>5</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>6</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>7</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>8</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>9</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>10</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>11</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>12</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>13</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>14</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>15</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>16</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>17</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>18</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>19</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>20</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>21</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>22</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>23</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>24</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
            </resultat>
            ';
        }

        static function recupererDonneesMois()
        {
            return '
                <resultat>
                    <plage>mois</plage>
                    <unite-moment>jour</unite-moment>
                    <type-donnee>luminosité</type-donnee>
                    <unite>Lux</unite>
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
                    <moment>
                        <numero>5</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>6</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>7</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>8</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>9</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>10</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>11</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>12</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>13</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>14</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>15</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>16</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>17</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>18</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>19</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>20</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>21</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>22</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>23</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>24</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>25</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>26</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>27</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>28</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>29</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>30</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                    <moment>
                        <numero>31</numero>
                        <moyenne>10</moyenne>
                        <min>5</min>
                        <max>15</max>
                    </moment>
                </resultat>
            ';
    }

    static public function recupererDonneesAnnee()
    {
        return '
            <resultat>
                <plage>année</plage>
                <unite-moment>mois</unite-moment>
                <type-donnee>luminosité</type-donnee>
                <unite>Lux</unite>
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
                <moment>
                    <numero>5</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>6</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>7</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>8</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>9</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>10</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>11</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
                <moment>
                    <numero>12</numero>
                    <moyenne>10</moyenne>
                    <min>5</min>
                    <max>15</max>
                </moment>
            </resultat>
        ';
    }
}