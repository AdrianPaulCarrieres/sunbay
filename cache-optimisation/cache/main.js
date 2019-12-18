const donneesLuminositeDAO = require('./donnee/DonneesLuminositeDAO');
const dateModele = require('./modele/DateModele');
const fonctionDateModele = require('./fonction/fonctionDateModele');

const dateDebutProcessus = new Date();

(async function() {

    if (dateDebutProcessus.getHours() == 0) {

    } else {

        var dateTest = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), 14,
            20, 11, dateDebutProcessus.getFullYear());
        // var dateUtilisationNormale = new dateModele.DateModele(dateDebutProcessus.getSeconds(), dateDebutProcessus.getMinutes(), dateDebutProcessus.getHours()-1,
        //     dateDebutProcessus.getDay(), dateDebutProcessus.getMonth(), dateDebutProcessus.getFullYear());

        //Récupère les données de l'heure précédente
        var donneesHeure = await donneesLuminositeDAO.selectionnerDonneesJourneeParHeure(fonctionDateModele.toString(dateTest));
        console.log(donneesHeure);

        //Récupère le total de la journée
        var totalJour = await donneesLuminositeDAO.trouverTotalJour(fonctionDateModele.toString(dateTest));
        console.log(totalJour);

        //Récupère le total du mois
        var totalMois = await donneesLuminositeDAO.trouverTotalMois(fonctionDateModele.toString(dateTest));
        console.log(totalMois);

        //Récupère le total de l'année
        var totalAnnee = await donneesLuminositeDAO.trouverTotalAnnee(fonctionDateModele.toString(dateTest));
        console.log(totalAnnee);


        //TODO:Insérer dans la table jour


        //TODO:Faire une update de la table total




    }

})()
