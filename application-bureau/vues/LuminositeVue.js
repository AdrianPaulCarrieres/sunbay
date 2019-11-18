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
            xhr.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=jour", true);
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
                    console.log(document.getElementById("lux"));
                    elementBody = document.getElementsByTagName("body")[0];
                    elementBody.innerHTML = header + pageLuminosite;
                    document.getElementById("lux").innerHTML = tableauLum[tableauLum.length-1];
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
                }
            };
            xhr.send(null);

            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=mois", true);
            // If specified, responseType must be empty string or "document"

// Force the response to be parsed as XML
            xhr2.overrideMimeType('text/xml');

            xhr2.onload = function () {
                if (xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
                    console.log(xhr2.response, xhr2.responseXML);
                    valeursMois = xhr2.responseXML.getElementsByTagName("moyenne");
                    valeursMomentsMois = xhr2.responseXML.getElementsByTagName("numero");
                    for (i = 1; i< valeursMois.length; i++) {
                        tableauLumMois.push( valeursMois[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i< valeursMomentsMois.length; i++) {
                        tableauMomentsMois.push( valeursMomentsMois[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMomentsMois);
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
                }
            };
            xhr2.send(null);

            var xhr3 = new XMLHttpRequest();
            xhr3.open("GET", "https://sunbay-php.vpsloic.loicbertrand.net/index.php?plage=annee", true);
            // If specified, responseType must be empty string or "document"

// Force the response to be parsed as XML
            xhr3.overrideMimeType('text/xml');

            xhr3.onload = function () {
                if (xhr3.readyState === xhr3.DONE && xhr3.status === 200) {
                    console.log(xhr3.response, xhr3.responseXML);
                    valeurs = xhr3.responseXML.getElementsByTagName("moyenne");
                    valeursMoments = xhr3.responseXML.getElementsByTagName("numero");
                    for (i = 1; i< valeurs.length; i++) {
                        tableauLumAnnee.push( valeurs[i].childNodes[0].nodeValue)
                    }
                    // delete tableauLum[0];
                    for (i = 0; i< valeursMoments.length; i++) {
                        tableauMomentsAnnee.push( valeursMoments[i].childNodes[0].nodeValue);
                    }
                    console.log(tableauMomentsAnnee);
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
            };
            xhr3.send(null);
        }
    }
})();