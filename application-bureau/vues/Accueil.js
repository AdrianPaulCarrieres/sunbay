var Accueil = (function () {
    pageAccueil = document.getElementById("page_accueil").innerHTML;

    return function () {

        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageAccueil;

            var ctx = document.getElementById('chartTemp').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['10h', '11h', '12h', '13h', '14h', '17h', '18h'],
                    datasets: [{
                        label: 'Température',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 42]
                    }]
                },

                // Configuration options go here
                options: {}
            });

            var ctx = document.getElementById('chartLum').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['10h', '11h', '12h', '13h', '14h', '17h', '18h'],
                    datasets: [{
                        label: 'Luminosité',
                        backgroundColor: 'rgb(99, 255, 132)',
                        borderColor: 'rgb(99, 255, 132)',
                        data: [42, 50, 56, 57, 43, 32, 28]
                    }]
                },

                // Configuration options go here
                options: {}
            });
        }
    }
})();