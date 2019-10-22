var VueValeur = (function() {
    pageIndex = document.getElementById("page-index").innerHTML;


    return function(valeurActuelle, comparaison, tabAujourdHui, tabDebut) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageIndex;

            var valeurActuelleText = document.getElementById("valeur-actuelle");
            valeurActuelleText.innerHTML = "Température : " + valeurActuelle[0] + " ; Luminosité : " + valeurActuelle[1] + ".";

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