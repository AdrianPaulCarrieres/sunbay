var fs = require('fs');

// 1 donnée ttes les 3sec = 20 données/min = 1200/h = 28800/j = 10512000/an

nombreEntierAleatoire = function (min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

faireCorrespondreTimestamp = function(valeur) {
    if (valeur < 10) {
        return ("0" + valeur);
    }

    return "" + valeur;
}

estBisextile = function(an) {
    bisextile = false;

    if ((Number.isInteger(an / 4) && !Number.isInteger(an / 100)) || Number.isInteger(an / 400)) {
        bisextile = true;
    }

    return bisextile;
}


enregistrer = function(valeur) {

    var contenu = "";
    var instant = "";

    jour = valeur[0];
    mois = valeur[1];
    annee = valeur[2];
    heure = valeur[3];
    minute = valeur[4];
    seconde = valeur[5];
    index = valeur[6];
    jourF = valeur[7];
    moisF = valeur[8];
    anneeF = valeur[9];

    console.log(jour,mois,annee,heure,minute,seconde,index, jourF, moisF, anneeF);
    

    while ((jour != jourF) || (mois != moisF) || (annee != anneeF)) {
        
        index++;

        if (seconde >= 60) {

            seconde = seconde - 60;
            minute++;

            if(minute >= 60) {

                minute = 0;
                heure++;

                if (heure >= 24) {
                    
                    heure = 0;
                    jour++;

                    if ( ((mois == 2) && (jour > 28) && !estBisextile(annee))
                    || ((mois == 2) && (jour > 29) && estBisextile(annee))
                    || (jour > 30) && (((mois < 8) && (mois != 2) && (mois%2 == 0)) || ((mois > 7) && (mois%2 == 1)))
                    || (jour > 31) && (((mois < 8) && (mois % 2 == 1)) || ((mois > 7) && (mois % 2 == 0)))
                    ){
                        
                        jour = 1;
                        mois++;

                        if (mois > 12) {
                            mois = 1;
                            annee++;
                        }

                    }

                }

            }

        }


        instant = "" + faireCorrespondreTimestamp(jour) + "/" + faireCorrespondreTimestamp(mois) + "/" + annee + 
                " " + faireCorrespondreTimestamp(heure) + ":" + faireCorrespondreTimestamp(minute) + ":" + faireCorrespondreTimestamp(seconde);
        
        valeur = nombreEntierAleatoire(0,1000);

    
        contenu += "" + index + "," + valeur + "," + instant + ",2\n";
        // console.log("" + index + "," + valeur + "," + instant + ",2");
        

        seconde += 10;

    }
    
    // console.log(contenu);

    fs.appendFile('nouvelle_donnees.csv', contenu, (err) => {
        if (err) throw err;
        console.log('Appended to file!');
    });

    resultats = [];
    resultats.push(jour);
    resultats.push(mois);
    resultats.push(annee);
    resultats.push(heure);
    resultats.push(minute);
    resultats.push(seconde);
    resultats.push(index);
    resultats.push(jourF);
    resultats.push(moisF);
    resultats.push(anneeF);

    return resultats;

}


var jourDebut = 1;
var moisDebut = 1;
var anneeDebut = 2019;
var heureDebut = 0;
var minuteDebut = 0;
var secondeDebut = 0;
var indexDebut = 0;

var jourFin = 12;
var moisFin = 11;
var anneeFin = 2019;

var valeur = [];

valeur.push(jourDebut);
valeur.push(moisDebut);
valeur.push(anneeDebut);
valeur.push(heureDebut);
valeur.push(minuteDebut);
valeur.push(secondeDebut);
valeur.push(indexDebut);


if (moisFin >= 04) {

    valeur.push(jourFin);
    valeur.push(04);
    valeur.push(anneeFin);

    if (moisFin%2 == 0) {
        stop = Math.floor(moisFin/4);
    } else {
        stop = Math.floor(moisFin / 4) + 1;
    }

    console.log('>>> stop : ',stop);    
    

    for (let i = 0; i < stop; i++) {

        retour = enregistrer(valeur);
        valeur = retour;
        valeur.splice(8, 1, moisFin);

        console.log(retour);
        console.log(valeur);

    }
    
} else {

    valeur.push(jourFin);
    valeur.push(moisFin);
    valeur.push(anneeFin);

    enregistrer(valeur);

}