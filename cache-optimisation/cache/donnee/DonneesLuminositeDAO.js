const baseDeDonnees = require('./BaseDeDonnee');

exports.selectionnerDonneesJourneeParHeure = async function(date) {

    const SELECT_TABLE_PARAMETRE = {
        name: 'selectionnerDonneesJourneeParHeure',
        text: 'SELECT extract(hour FROM date_trunc(\'hour\', instant)) as index_moment,'
            + 'round(avg(valeur), 1) as moyenne,'
            + 'round(min(valeur),1) as minimum,'
            + 'round(max(valeur), 1) as maximum '
            + 'FROM donnee_mesuree '
            + 'WHERE id_type_donnee_mesuree = 2 AND date_trunc(\'day\', instant) = date_trunc(\'day\', TIMESTAMP \'' + date + '\') '
            + 'AND date_trunc(\'hour\', instant) = date_trunc(\'hour\', TIMESTAMP \'' + date + '\') '
            + ' GROUP BY index_moment'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(SELECT_TABLE_PARAMETRE);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}

exports.trouverTotalJour = async function(date) {

    const SELECT_TABLE_PARAMETRE = {
        name: 'selectionnerDonneesJourneeParHeure',
        text: 'SELECT round(avg(valeur),1) as moyenne,'
                    + 'round(min(valeur), 1) as minimum,'
                    + 'round(max(valeur), 1) as maximum '
            + 'FROM donnee_mesuree '
            + 'WHERE id_type_donnee_mesuree = 2 '
            + 'AND date_trunc(\'day\', instant) = date_trunc(\'day\', TIMESTAMP \'' + date + '\');'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(SELECT_TABLE_PARAMETRE);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}