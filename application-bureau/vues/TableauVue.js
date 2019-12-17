var TableauVue = (function () {
    tableau = document.getElementById("tableau").innerHTML;
    header = document.getElementById("script_header").innerHTML;

    return function () {

        this.afficher = function (valeur) {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = header + tableau;
            if (valeur == "jour") {
                textEntete = "<td>heure</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
                document.getElementById("entete").innerHTML = textEntete;
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=jour", true);
                xhr.overrideMimeType('text/xml');

                xhr.onload = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        console.log(xhr.response, xhr.responseXML);
                        var x, y, i, xlen, xmlDoc;
                        xmlDoc = xhr.responseXML;
                        textTableau = "";
                        for (let j = 0; j <xmlDoc.getElementsByTagName("moment").length ; j++) {
                            x = xmlDoc.getElementsByTagName("moment")[j];
                            xlen = x.childNodes.length;
                            y = x.firstChild;
                            textTableau += "<tr>";
                            for (i = 0; i < xlen; i++) {
                                if (y.nodeType == 1) {
                                    textTableau +=  "<td> " + y.childNodes[0].nodeValue + "</td>";
                                }
                                y = y.nextSibling;
                            }
                            textTableau+="</tr>"
                        }
                        document.getElementById("corps_tableau").innerHTML = textTableau;
                    }
                };
            xhr.send(null);

            }else if(valeur == "mois") {
                textEntete = "<td>semaine</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
                document.getElementById("entete").innerHTML = textEntete;
                var xhr2 = new XMLHttpRequest();
                xhr2.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=mois", true);
                xhr2.overrideMimeType('text/xml');

                xhr2.onload = function () {
                    if (xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
                        console.log(xhr2.response, xhr2.responseXML);
                        var x, y, i, xlen, xmlDoc, txt;
                        console.log(xhr2.responseXML);
                        xmlDoc = xhr2.responseXML;
                        textTableau = "";
                        for (let j = 0; j <xmlDoc.getElementsByTagName("moment").length ; j++) {
                            x = xmlDoc.getElementsByTagName("moment")[j];
                            xlen = x.childNodes.length;
                            y = x.firstChild;
                            textTableau += "<tr>";
                            for (i = 0; i < xlen; i++) {
                                if (y.nodeType == 1) {
                                    textTableau +=  "<td> " + y.childNodes[0].nodeValue + "</td>";
                                }
                                y = y.nextSibling;
                            }
                            textTableau+="</tr>"
                        }
                        document.getElementById("corps_tableau").innerHTML = textTableau;
                    }
                };
                xhr2.send(null);
            }else if(valeur == "annee") {
                textEntete = "<td>mois</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
                document.getElementById("entete").innerHTML = textEntete;
                var xhr3 = new XMLHttpRequest();
                xhr3.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=annee", true);
                xhr3.overrideMimeType('text/xml');

                xhr3.onload = function () {
                    if (xhr3.readyState === xhr3.DONE && xhr3.status === 200) {
                        console.log(xhr3.response, xhr3.responseXML);
                        var x, y, i, xlen, xmlDoc, txt;
                        xmlDoc = xhr3.responseXML;
                        textTableau = "";
                        for (let j = 0; j <xmlDoc.getElementsByTagName("moment").length ; j++) {
                            x = xmlDoc.getElementsByTagName("moment")[j];
                            xlen = x.childNodes.length;
                            y = x.firstChild;
                            textTableau += "<tr>";
                            for (i = 0; i < xlen; i++) {
                                if (y.nodeType == 1) {
                                    textTableau +=  "<td> " + y.childNodes[0].nodeValue + "</td>";
                                }
                                y = y.nextSibling;
                            }
                            textTableau+="</tr>"
                        }
                        document.getElementById("corps_tableau").innerHTML = textTableau;
                    }
                };
                xhr3.send(null);
            }

        }
    }
})();