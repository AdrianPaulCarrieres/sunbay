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
                xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=jour", false);
                xhr.overrideMimeType('text/xml');

                xhr.onload = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

                    }
                };
            xhr.send(null);

            }else if(valeur == "mois") {
                textEntete = "<td>semaine</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
                document.getElementById("entete").innerHTML = textEntete;
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=mois", false);
                xhr.overrideMimeType('text/xml');

                xhr.onload = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

                    }
                };
                xhr.send(null);
            }else if(valeur == "annee") {
                textEntete = "<td>mois</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
                document.getElementById("entete").innerHTML = textEntete;
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=annee", false);
                xhr.overrideMimeType('text/xml');

                xhr.onload = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

                    }
                };
                xhr.send(null);
            }
            console.log(xhr.response, xhr.responseXML);
            var x, y, i, xlen, xmlDoc, txt;
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
    }
})();