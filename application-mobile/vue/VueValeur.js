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
                    document.getElementById("valeur-actuelle").innerHTML = x.childNodes[1].nodeValue;
                    document.getElementById("tab-aujourdhui").innerHTML = textTableau;

                }
            };
            xhrJour.send(null);



            var xhrDebut = new XMLHttpRequest();
            xhrDebut.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=annnee", false); //probleme a cause de cors, fonctionne que si requete envoye depuis localhost
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
                    document.getElementById("tab-debut").innerHTML = textTableau;
                }
            };
            xhrJour.send(null);






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