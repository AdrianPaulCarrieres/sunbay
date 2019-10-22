var VueValeur = (function() {
    pageIndex = document.getElementById("page-index").innerHTML;


    return function(valeurActuelle, comparaison, tabAujourdHui, tabDebut) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageIndex;

            var valeurActuelleTemperatureText = document.getElementById("valeur-actuelle-temperature");
            valeurActuelleTemperatureText.innerHTML = "<h1­>" + valeurActuelle[0] + "</h1>" + " °C";

            var valeurActuelleLuminositeText = document.getElementById("valeur-actuelle-luminosite");
            valeurActuelleLuminositeText.innerHTML = valeurActuelle[1];

            var comparaisonText = document.getElementById("comparaison");
            comparaisonText.innerHTML = comparaison;

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