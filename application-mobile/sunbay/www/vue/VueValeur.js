var VueValeur = (function() {
    pageIndex = document.getElementById("page-index").innerHTML;

    return function() {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageIndex;

            var xhrJour = new XMLHttpRequest();
            xhrJour.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=jour", false); //probleme a cause de cors, fonctionne que si requete envoye depuis localhost
            xhrJour.overrideMimeType('text/xml');

            xhrJour.onreadystatechange = function() {
                if (xhrJour.readyState === xhrJour.DONE && xhrJour.status === 200) {
                    console.log(xhrJour.response, xhrJour.responseXML);
                    var x, y, i, xlen, xmlDoc, txt;
                    xmlDoc = xhrJour.responseXML;
                    textTableau = "";
                    textValeurActuelle = "";
                    for (j = 0; j < xmlDoc.getElementsByTagName("total").length; j++) {
                        x = xmlDoc.getElementsByTagName("total")[j];
                        xlen = x.childNodes.length;
                        y = x.firstChild;
                        for (i = 0; i < xlen; i++) {
                            if (y.nodeType == 1) {
                                textTableau += "<td> " + y.childNodes[0].nodeValue + "</td>";
                            }
                            y = y.nextSibling;
                        }
                    }
                    x = xmlDoc.getElementsByTagName("moment")[xmlDoc.getElementsByTagName("moment").length - 1];
                    //document.getElementById("valeur-actuelle").innerHTML = "test" + x.childNodes[0].nodeValue + "lux";
                    document.getElementById("tab-aujourdhui ").innerHTML = textTableau;


                    var tableauLum = new Array();
                    var tableauMoments = new Array();
                    valeurs = xhrJour.responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhrJour.responseXML.getElementsByTagName("numero");
                    for (i = 1; i < valeurs.length; i++) {
                        tableauLum.push(valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i < valeursMoments.length; i++) {
                        tableauMoments.push(valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMoments);
                    document.getElementById("valeur-actuelle").innerHTML = "La luminosité actuelle est de " +
                        tableauLum[tableauLum.length - 1] + ".";

                }
            };
            xhrJour.send(null);



            var xhrDebut = new XMLHttpRequest();
            xhrDebut.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=annee", false); //probleme a cause de cors, fonctionne que si requete envoye depuis localhost
            xhrDebut.overrideMimeType('text/xml');

            xhrDebut.onreadystatechange = function() {
                if (xhrDebut.readyState === xhrDebut.DONE && xhrDebut.status === 200) {
                    console.log(xhrDebut.response, xhrDebut.responseXML);
                    var x, y, i, xlen, xmlDoc, txt;
                    xmlDoc = xhrDebut.responseXML;
                    textTableau = "";
                    textValeurActuelle = "";
                    for (j = 0; j < xmlDoc.getElementsByTagName("total").length; j++) {
                        x = xmlDoc.getElementsByTagName("total")[j];
                        xlen = x.childNodes.length;
                        y = x.firstChild;
                        for (i = 0; i < xlen; i++) {
                            if (y.nodeType == 1) {
                                textTableau += "<td> " + y.childNodes[0].nodeValue + "</td>";
                            }
                            y = y.nextSibling;
                        }
                    }
                    document.getElementById("tab-debut ").innerHTML = textTableau;
                }
            };
            xhrDebut.send(null);






            // var valeurActuelleLuminositeText = document.getElementById("valeur-actuelle-luminosite");
            // valeurActuelleLuminositeText.innerHTML = "<h1­>La luminosité est actuellement de " + valeurActuelle + "</h1>" + " lux.";

            // var tableauAujourdHuiText = document.getElementById("tab-aujourdhui");
            // tableauAujourdHuiText.innerHTML = "";
            // tabAujourdHui.forEach(element => {
            //     tableauAujourdHuiText.innerHTML += "<td>" + element + "</td>";
            // });

            // var tableauDebutText = document.getElementById("tab-debut");
            // tableauDebutText.innerHTML = "";
            // tabDebut.forEach(element => {
            //     tableauDebutText.innerHTML += "<td>" + element + "</td>";
            //});
        }
    }
})();