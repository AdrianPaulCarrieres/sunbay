var TableauVue = (function () {
    tableau = document.getElementById("tableau").innerHTML;
    header = document.getElementById("script_header").innerHTML;

    return function () {

        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = header + tableau;
            textEntete = "<td>heure</td><td>Luminosité moyenne</td><td>Luminosité min</td><td>Luminosité max</td>";
            document.getElementById("entete").innerHTML = textEntete;
            textTableau = "";
            for (let i = 0; i < 10 ; i++) {
                textTableau += "<tr><td>"+i+"h</td><td>400</td><td>200</td><td>500</td></tr>";
            }
            document.getElementById("corps_tableau").innerHTML=textTableau;
        }
    }
})();