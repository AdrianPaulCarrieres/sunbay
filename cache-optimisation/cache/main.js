const donneesLuminositeDAO = require('./donnee/DonneesLuminositeDAO');
const dateModele = require('./modele/DateModele');
const fonctionDateModele = require('./fonction/fonctionDateModele');
const fonctionGenerique = require('./fonction/fonctionGenerique');
const gestionfichiersXMl = require('./donnee/GestionFichiersXML');

const dateDebutProcessus = new Date();

var calculDerniereHeureEtMiseAJourTableJourTotalEtFichiers = async function(date) {

    //Récupère les données de l'heure de date
    var donneesHeure = await donneesLuminositeDAO.selectionnerDonneesJourneeParHeure(fonctionDateModele.toString(date));
    console.log(donneesHeure);

    //Insérer dans la table jour
    await donneesLuminositeDAO.insererTableJour(donneesHeure);

    //Récupère le total de la journée
    var totalJour = await donneesLuminositeDAO.trouverTotalJour(fonctionDateModele.toString(date));
    console.log(totalJour);

    //Récupère le total du mois
    var totalMois = await donneesLuminositeDAO.trouverTotalMois(fonctionDateModele.toString(date));
    console.log(totalMois);

    //Récupère le total de l'année
    var totalAnnee = await donneesLuminositeDAO.trouverTotalAnnee(fonctionDateModele.toString(date));
    console.log(totalAnnee);

    //Update de la table mois
    await donneesLuminositeDAO.mettreAJourMois(date.jour,totalJour);

    //Update de la table annee
    await donneesLuminositeDAO.mettreAJourAnnee(date.mois, totalMois);

    //Update de la table total
    await donneesLuminositeDAO.mettreAJourTotal('jour', totalJour);
    await donneesLuminositeDAO.mettreAJourTotal('mois', totalMois);
    await donneesLuminositeDAO.mettreAJourTotal('annee', totalAnnee);

    //Mettre a jour les fichier xml
    await gestionfichiersXMl.mettreAJourFichiers();

}

var nouveauMois = async function(numeroMois) {

    var donneesMoisVide = {
        numero: numeroMois,
        moyenne: 0,
        minimum: 0,
        maximum: 0
    }

    //Insère nouvelle ligne dans la table annee (= nouveau mois)
    await donneesLuminositeDAO.insererTableAnnee(donneesMoisVide);
}

var main = async function() {

    if (dateDebutProcessus.getHours() == 1 && dateDebutProcessus.getDay() == 1 && dateDebutProcessus.getMonth() == 1) {

        //Supprime les valeurs des tables annee, mois et jour
        await donneesLuminositeDAO.supprimerDonneesTable('annee');
        await donneesLuminositeDAO.supprimerDonneesTable('mois');
        await donneesLuminositeDAO.supprimerDonneesTable('jour');

        var objetRemiseAZero = {
            moyenne: 0,
            minimum: 0,
            maximum: 0
        }

        //Update de la table total pour mettre les valeurs à 0
        await donneesLuminositeDAO.mettreAJourTotal('jour', objetRemiseAZero);
        await donneesLuminositeDAO.mettreAJourTotal('mois', objetRemiseAZero);
        await donneesLuminositeDAO.mettreAJourTotal('annee', objetRemiseAZero);

        var dateModeleDebutProcessus = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), dateDebutProcessus.getHours()-1,
            dateDebutProcessus.getDay(), dateDebutProcessus.getMonth(), dateDebutProcessus.getFullYear());

        await calculDerniereHeureEtMiseAJourTableJourTotalEtFichiers(dateModeleDebutProcessus);        
        
    } else if (dateDebutProcessus.getHours() == 0) {

        var dateModeleDebutProcessus = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), dateDebutProcessus.getHours(),
            dateDebutProcessus.getDay(), dateDebutProcessus.getMonth(), dateDebutProcessus.getFullYear());

        var dateUtilisationNormale;

            if (dateModeleDebutProcessus.jour == 1 && dateModeleDebutProcessus.mois == 1) {

                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                        31, 12, dateDebutProcessus.getFullYear()-1);

                nouveauMois(dateUtilisationNormale.mois);

            } else if (dateModeleDebutProcessus.jour == 1 && ((dateModeleDebutProcessus.mois == 2) || (dateModeleDebutProcessus.mois == 4) || (dateModeleDebutProcessus.mois == 6) || (dateModeleDebutProcessus.mois == 8) || (dateModeleDebutProcessus.mois == 9) || (dateModeleDebutProcessus.mois == 11) )) {

                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                    31, dateDebutProcessus.getMonth() - 1, dateDebutProcessus.getFullYear());

                nouveauMois(dateUtilisationNormale.mois);

            } else if ((dateModeleDebutProcessus.jour == 1 && ((dateModeleDebutProcessus.mois == 5) || (dateModeleDebutProcessus.mois == 7) || (dateModeleDebutProcessus.mois == 10) || (dateModeleDebutProcessus.mois == 12) ))) {
                
                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                    30, dateDebutProcessus.getMonth() - 1, dateDebutProcessus.getFullYear());

                nouveauMois(dateUtilisationNormale.mois);

                    
            } else if (dateModeleDebutProcessus.jour == 1 && dateModeleDebutProcessus.mois == 3 && fonctionGenerique.estBisextile(dateModeleDebutProcessus.annee)) {

                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                    29, dateDebutProcessus.getMonth() - 1, dateDebutProcessus.getFullYear());

                nouveauMois(dateUtilisationNormale.mois);

            } else if (dateModeleDebutProcessus.jour == 1 && dateModeleDebutProcessus.mois == 3 && !fonctionGenerique.estBisextile(dateModeleDebutProcessus.annee)) {

                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                    28, dateDebutProcessus.getMonth() - 1, dateDebutProcessus.getFullYear());
                
                nouveauMois(dateUtilisationNormale.mois);

            } else {

                dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 23,
                    dateDebutProcessus.getDay() - 1, dateDebutProcessus.getMonth(), dateDebutProcessus.getFullYear());

            }

        var donneesJourVide = {
            numero: dateUtilisationNormale.jour,
            moyenne: 0,
            minimum: 0,
            maximum: 0
        };

        //Insère nouvelle ligne dans la table mois (= nouveau jour)
        await donneesLuminositeDAO.insererTableMois(donneesJourVide);

        await calculDerniereHeureEtMiseAJourTableJourTotalEtFichiers(dateUtilisationNormale);  

    } else {

        var dateTest = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 14,
            20, 11, dateDebutProcessus.getFullYear());
    // var dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), dateDebutProcessus.getHours()-1,
    //     dateDebutProcessus.getDay(), dateDebutProcessus.getMonth(), dateDebutProcessus.getFullYear());

        await calculDerniereHeureEtMiseAJourTableJourTotalEtFichiers(dateTest);

    }

}

main();
