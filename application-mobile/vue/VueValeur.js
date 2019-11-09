var VueValeur = (function() {
    pageIndex = document.getElementById("page-index").innerHTML;

    return function(valeurActuelle, comparaison, tabAujourdHui, tabDebut) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageIndex;

            var xhrJour = new XMLHttpRequest();
            xhrJour.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=jour", false); //probleme a cause de cors, fonctionne que si requete envoye depuis localhost
            xhrJour.overrideMimeType('text/xml');

            xhrJour.onreadystatechange = function() {
                if (xhrJour.readyState === xhrJour.DONE && xhrJour.status === 200) {
                    console.log(xhrJour.response, xhrJour.responseXML);
                    var x, y, i, xlen, xmlDoc, txt;
                    xmlDoc = xhrJour.responseXML;
                    textTableau = "";
                    for (let j = 0; j < xmlDoc.getElementsByTagName("moment").length; j++) {
                        x = xmlDoc.getElementsByTagName("moment")[j];
                        xlen = x.childNodes.length;
                        y = x.firstChild;
                        textTableau += "<tr>";
                        for (i = 0; i < xlen; i++) {
                            if (y.nodeType == 1) {
                                textTableau += "<td> " + y.childNodes[0].nodeValue + "</td>";
                            }
                            y = y.nextSibling;
                        }
                        textTableau += "</tr>"
                    }
                    document.getElementById("corps_tableau").innerHTML = textTableau;




                    console.log(xhrJour
                        .response, xhrJour
                        .responseXML);

                    nombreValeurs = xhrJour
                        .responseXML.getElementByTagName("moment").length;
                    valeurActuelle = xhrJour
                        .responseXML

                    valeurs = xhrJour
                        .responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhrJour
                        .responseXML.getElementsByTagName("numero");
                    for (i = 1; i < valeurs.length; i++) {
                        tableauLum.push(valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i < valeursMoments.length; i++) {
                        tableauMoments.push(valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMoments)
                    var tabtest = tableauMoments;
                }
            };
            xhrJour.send(null);




















            var valeurActuelleLuminositeText = document.getElementById("valeur-actuelle-luminosite");
            valeurActuelleLuminositeText.innerHTML = "<h1­>La luminosité est actuellement de " + valeurActuelle + "</h1>" + " lux.";

            var tableauAujourdHuiText = document.getElementById("tab-aujourdhui");
            tableauAujourdHuiText.innerHTML = "";
            tabAujourdHui.forEach(element => {
                tableauAujourdHuiText.innerHTML += "<td>" + element + "</td>";
            });

            var tableauDebutText = document.getElementById("tab-debut");
            tableauDebutText.innerHTML = "";
            tabDebut.forEach(element => {
                tableauDebutText.innerHTML += "<td>" + element + "</td>";
            });

        }
    }
})();