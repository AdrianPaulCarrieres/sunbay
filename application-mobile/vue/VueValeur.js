var VueValeur = (function() {
    pageIndex = document.getElementById("page-index").innerHTML;


    return function(valeurActuelle, comparaison, tabAujourdHui, tabDebut) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageIndex;

            var valeurActuelleLuminositeText = document.getElementById("valeur-actuelle-luminosite");
            valeurActuelleLuminositeText.innerHTML = "<h1­>La luminosité est actuellement de " + valeurActuelle + "</h1>" + " lux.";

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