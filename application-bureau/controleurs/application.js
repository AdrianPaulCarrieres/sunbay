(function() {
    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    }

    var naviguer = function(){
        var hash = window.location.hash;

        if (!hash) {

            var page_accueil = new Accueil();
            page_accueil.afficher();
        }else if(hash.match(/^#luminosite/)){

            var luminositeVue = new LuminositeVue();
            luminositeVue.afficher();
        }else if(hash.match(/^#tableauMois/)){

            var tableau = new TableauVue();
            tableau.afficher("mois");
        }
        else if(hash.match(/^#tableauJour/)){

            var tableau = new TableauVue();
            tableau.afficher("jour");
        }
        else if(hash.match(/^#tableauAnnee/)){

            var tableau = new TableauVue();
            tableau.afficher("annee");
        }
    }

    initialiser()
})();