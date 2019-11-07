var Accueil = (function () {
    pageAccueil = document.getElementById("page_accueil").innerHTML;
    header = document.getElementById("script_header").innerHTML;

    return function () {

        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = header + pageAccueil;
            var tableauLum = new Array();
            var tableauMoments = new Array();
            var xhr = new XMLHttpRequest();
            var tabtest;
            xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=jour", false);
            // If specified, responseType must be empty string or "document"

// Force the response to be parsed as XML
            xhr.overrideMimeType('text/xml');

            xhr.onload = function () {
                if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                    console.log(xhr.response, xhr.responseXML);
                    valeurs = xhr.responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhr.responseXML.getElementsByTagName("numero");
                    for (i = 1; i< valeurs.length; i++) {
                        tableauLum.push( valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i< valeursMoments.length; i++) {
                        tableauMoments.push( valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMoments)
                    var tabtest = tableauMoments;
                }
            };
            xhr.send(null);
            console.log(tabtest)
            var ctx = document.getElementById('chartLum').getContext('2d');
            ctx.height = 200;
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: tableauMoments,
                    datasets: [{
                        label: 'Luminosité',
                        backgroundColor: 'rgb(99, 255, 132)',
                        borderColor: 'rgb(99, 255, 132)',
                        data: tableauLum
                    }]
                },

                // Configuration options go here
                options: {
                    maintainAspectRatio: false,
                }
            });





        }
    }
})();