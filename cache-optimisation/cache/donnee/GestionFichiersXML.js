const fs = require('fs');
const donneesLuminositeDAO = require('./DonneesLuminositeDAO');

exports.mettreAJourFichiers = async function() {

    const fichierJour = './emplacement-fichiers-xml/jour.xml';
    const fichierMois = './emplacement-fichiers-xml/mois.xml';
    const fichierAnnee = './emplacement-fichiers-xml/annee.xml';

    var donneesJour = await donneesLuminositeDAO.selectionnerDonneesTable('jour');
    var donneesMois = await donneesLuminositeDAO.selectionnerDonneesTable('mois');
    var donneesAnnee = await donneesLuminositeDAO.selectionnerDonneesTable('annee');
    var totaux = await donneesLuminositeDAO.selectionnerDonneesTable('total');

    var xmlJour = await this.genererXML(donneesJour, totaux, 'jour');
    // console.log(xmlJour);
    
    var xmlMois = await this.genererXML(donneesMois, totaux, 'mois');
    // console.log(xmlMois);
    
    var xmlAnnee = await this.genererXML(donneesAnnee, totaux, 'annee');
    // console.log(xmlAnnee);

    // fs.appendFile(fichierJour, xmlJour, (err) => {
    //     if (err) throw err;
    //     console.log('Appended to file!');
    // });
    

    try {
        if (fs.existsSync(fichierJour)) {
            //file exists
            // delete file named 'sample.txt'
            fs.unlink(fichierJour, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');

                fs.appendFile(fichierJour, xmlJour, (err) => {
                    if (err) throw err;
                    console.log('Appended to file!');

                    if (fs.existsSync(fichierMois)) {
                        //file exists
                        // delete file named 'sample.txt'
                        fs.unlink(fichierMois, function (err) {
                            if (err) throw err;
                            // if no error, file has been deleted successfully
                            console.log('File deleted!');

                            fs.appendFile(fichierMois, xmlMois, (err) => {
                                if (err) throw err;
                                console.log('Appended to file!');

                                if (fs.existsSync(fichierAnnee)) {
                                    //file exists
                                    // delete file named 'sample.txt'
                                    fs.unlink(fichierAnnee, function (err) {
                                        if (err) throw err;
                                        // if no error, file has been deleted successfully
                                        console.log('File deleted!');

                                        fs.appendFile(fichierAnnee, xmlAnnee, (err) => {
                                            if (err) throw err;
                                            console.log('Appended to file!');
                                        });

                                    });
                                } else {
                                    console.log('Fichier n\'existe pas ');
                                }


                            });

                        });
                    } else {
                        console.log('Fichier n\'existe pas ');

                    }


                });

            });
        } else {
            console.log('Fichier n\'existe pas ');
        }
    } catch (err) {
        console.error(err)
    }

    console.log('>>> Fichiers xml mis à jour');    

}


exports.genererXML = function(donnees, total ,plage) {

    var xml = "<resultat>\n";

    xml += "\t<plage>" + plage + "</plage>\n";
    xml += "\t<type-donnee>2</type-donnee>\n";
    xml += "\t<unite></unite>\n";

    xml += "\t<total>\n";
    for (let index = 0; index < total.length; index++) {
        
        if (total[index]['etiquette_plage'] == plage) {
            xml += "\t\t<moyenne>" + total[index]['moyenne'] + "</moyenne>\n";
            xml += "\t\t<min>" + total[index]['min'] + "</min>\n";
            xml += "\t\t<max>" + total[index]['max'] + "</max>\n";
        }
        
    }
    xml += "\t</total>\n";
    
    for (let index = 0; index < donnees.length; index++) {
        xml += "\t<moment>\n";
        xml += "\t\t<numero>" + donnees[index]['numero'] + "</numero>\n";
        xml += "\t\t<moyenne>" + donnees[index]['moyenne'] + "</moyenne>\n";
        xml += "\t\t<min>" + donnees[index]['min'] + "</min>\n";
        xml += "\t\t<max>" + donnees[index]['max'] + "</max>\n";
        xml += "\t</moment>\n";
    }
    
    xml += "</resultat>";

    return xml;

}