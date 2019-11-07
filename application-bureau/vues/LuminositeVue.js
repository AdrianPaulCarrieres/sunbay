var LuminositeVue = (function () {
    pageLuminosite = document.getElementById("page_luminosite").innerHTML;
    header = document.getElementById("script_header").innerHTML;

    return function () {

        this.afficher = function () {
            var tableauLum = new Array();
            var tableauMoments = new Array();
            var tableauLumMois = new Array();
            var tableauMomentsMois = new Array();
            var tableauLumAnnee = new Array();
            var tableauMomentsAnnee = new Array();
            var xhr = new XMLHttpRequest();
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
                    console.log(tableauMoments);
                }
            };
            xhr.send(null);

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=mois", false);
            // If specified, responseType must be empty string or "document"

// Force the response to be parsed as XML
            xhr.overrideMimeType('text/xml');

            xhr.onload = function () {
                if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                    console.log(xhr.response, xhr.responseXML);
                    valeurs = xhr.responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhr.responseXML.getElementsByTagName("numero");
                    for (i = 1; i< valeurs.length; i++) {
                        tableauLumMois.push( valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i< valeursMoments.length; i++) {
                        tableauMomentsMois.push( valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMomentsMois);
                }
            };
            xhr.send(null);

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost/projet-capture-2019-sunbay/service-web-php/api/index.php?plage=annee", false);
            // If specified, responseType must be empty string or "document"

// Force the response to be parsed as XML
            xhr.overrideMimeType('text/xml');

            xhr.onload = function () {
                if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                    console.log(xhr.response, xhr.responseXML);
                    valeurs = xhr.responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhr.responseXML.getElementsByTagName("numero");
                    for (i = 1; i< valeurs.length; i++) {
                        tableauLumAnnee.push( valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i< valeursMoments.length; i++) {
                        tableauMomentsAnnee.push( valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMomentsAnnee);
                }
            };
            xhr.send(null);

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = header + pageLuminosite;
            var ctx = document.getElementById('chartLumJour').getContext('2d');
            ctx.height = 500;
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

            var ctx = document.getElementById('chartLumMois').getContext('2d');
            ctx.height = 500;
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: tableauMomentsMois,
                    datasets: [{
                        label: 'Luminosité',
                        backgroundColor: 'rgb(99, 255, 132)',
                        borderColor: 'rgb(99, 255, 132)',
                        data: tableauLumMois
                    }]
                },

                // Configuration options go here
                options: {
                    maintainAspectRatio: false,
                }
            });

            var ctx = document.getElementById('chartLumAnnee').getContext('2d');
            ctx.height = 200;
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: tableauMomentsAnnee,
                    datasets: [{
                        label: 'Luminosité',
                        backgroundColor: 'rgb(99, 255, 132)',
                        borderColor: 'rgb(99, 255, 132)',
                        data: tableauLumAnnee
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