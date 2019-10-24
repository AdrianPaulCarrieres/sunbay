var donneeDAO = require('./DonneeDAO');
//activiteDAO.tester();

var http = require('http');

var repondeur = async function(requete,reponse) {

    console.log('methode ' + requete.method);
    console.log('url ' + requete.url);
	var json = 'test';
	if(requete.method === 'POST') {
        json = 'POST';
    }
    
    requete.on('data'), function(data) {
        console.log(data);
        var donnee = data + "";
        var donnee_mesuree = donnee.split(":");
        var instant = donnee_mesuree[0];
        var temperature = donnee_mesuree[1];
        var luminosite = donnee_mesuree[2];

        var donneeDAO = new donneeDAO();
        donneeDAO.enregistrerDonnee(new Donnee(instant, temperature, luminosite));
    }
	
	//console.log('createServer() callback');
	reponse.statusCode = 200;
	reponse.setHeader('Content-type', 'text/plain');
	reponse.end(json);
}

var serveur = http.createServer(repondeur);
serveur.listen(8080, 'localhost', ()=>{console.log('Serveur en ligne.');});