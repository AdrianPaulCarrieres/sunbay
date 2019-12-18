const baseDeDonnees = require('./BaseDeDonnee');

exports.selectionnerDonneesJourneeParHeure = async function(date) {

    const QUERY = {
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

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}

exports.trouverTotalJour = async function(date) {

    const QUERY = {
        name: 'trouverTotalJour',
        text: 'SELECT round(avg(valeur),1) as moyenne,'
                    + 'round(min(valeur), 1) as minimum,'
                    + 'round(max(valeur), 1) as maximum '
            + 'FROM donnee_mesuree '
            + 'WHERE id_type_donnee_mesuree = 2 '
            + 'AND date_trunc(\'day\', instant) = date_trunc(\'day\', TIMESTAMP \'' + date + '\');'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}

exports.trouverTotalMois = async function (date) {

    const QUERY = {
        name: 'trouverTotalJour',
        text: 'SELECT round(avg(valeur),1) as moyenne,'
            + 'round(min(valeur), 1) as minimum,'
            + 'round(max(valeur), 1) as maximum '
            + 'FROM donnee_mesuree '
            + 'WHERE id_type_donnee_mesuree = 2 '
            + 'AND date_trunc(\'month\', instant) = date_trunc(\'month\', TIMESTAMP \'' + date + '\');'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}

exports.trouverTotalAnnee = async function (date) {

    const QUERY = {
        name: 'trouverTotalJour',
        text: 'SELECT round(avg(valeur),1) as moyenne,'
            + 'round(min(valeur), 1) as minimum,'
            + 'round(max(valeur), 1) as maximum '
            + 'FROM donnee_mesuree '
            + 'WHERE id_type_donnee_mesuree = 2 '
            + 'AND date_trunc(\'year\', instant) = date_trunc(\'year\', TIMESTAMP \'' + date + '\');'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows[0];

}

exports.insererTableJour = async function (donneesHeure) {

    var donnees = [];
    donnees.push(donneesHeure.index_moment);
    donnees.push(donneesHeure.moyenne);
    donnees.push(donneesHeure.minimum);
    donnees.push(donneesHeure.maximum);

    const QUERY = {
        name: 'insererTableJour',
        text: 'INSERT INTO jour(numero, moyenne, min, max) VALUES ($1,$2,$3,$4)',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données insérées');
    
}

exports.mettreAJourTotal = async function(etiquettePlage, total) {

    var donnees = [];
    donnees.push(total.moyenne);
    donnees.push(total.minimum);
    donnees.push(total.maximum);

    const QUERY = {
        name: 'mettreAJourTotal',
        text: 'UPDATE total SET moyenne = $1, min = $2, max = $3 WHERE etiquette_plage = \'' + etiquettePlage + '\'',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données modifiées');

}

exports.selectionnerDonneesTable = async function(nomTable) {

    const QUERY = {
        name: 'selectionnerDonneesTable',
        text: 'SELECT * FROM ' + nomTable
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    // console.log(resultat.rows);

    return resultat.rows;

}

exports.mettreAJourMois = async function (numero, valeurs) {

    var donnees = [];
    donnees.push(valeurs.moyenne);
    donnees.push(valeurs.minimum);
    donnees.push(valeurs.maximum);

    const QUERY = {
        name: 'mettreAJourMois',
        text: 'UPDATE mois SET moyenne = $1, min = $2, max = $3 WHERE numero = \'' + numero + '\'',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données modifiées');

}

exports.mettreAJourAnnee = async function (numero, valeurs) {

    var donnees = [];
    donnees.push(valeurs.moyenne);
    donnees.push(valeurs.minimum);
    donnees.push(valeurs.maximum);

    const QUERY = {
        name: 'mettreAJourAnnee',
        text: 'UPDATE annee SET moyenne = $1, min = $2, max = $3 WHERE numero = \'' + numero + '\'',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données modifiées');

}

exports.supprimerDonneesTable = async function(nomTable) {
    
    const QUERY = {
        name: 'supprimerDonneesTable',
        text: 'DELETE FROM ' + nomTable + 'WHERE 1=1'
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données supprimées');
}

exports.insererTableMois = async function (donneesJour) {

    var donnees = [];
    donnees.push(donneesJour.numero);
    donnees.push(donneesJour.moyenne);
    donnees.push(donneesJour.minimum);
    donnees.push(donneesJour.maximum);

    const QUERY = {
        name: 'insererTableJour',
        text: 'INSERT INTO mois(numero, moyenne, min, max) VALUES ($1,$2,$3,$4)',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données insérées');

}

exports.insererTableAnnee = async function (donneesMois) {

    var donnees = [];
    donnees.push(donneesMois.numero);
    donnees.push(donneesMois.moyenne);
    donnees.push(donneesMois.minimum);
    donnees.push(donneesMois.maximum);

    const QUERY = {
        name: 'insererTableJour',
        text: 'INSERT INTO annee(numero, moyenne, min, max) VALUES ($1,$2,$3,$4)',
        values: donnees
    }

    var bdd = await baseDeDonnees.connexion();

    var resultat = await bdd.query(QUERY);

    await baseDeDonnees.deconnexion(bdd);

    console.log('>>> données insérées');

}