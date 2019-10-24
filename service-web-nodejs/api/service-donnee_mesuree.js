var DonneeDAO = require('./DonneeDAO');
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
        var donnee = data + "";
        var donnee_mesuree = donnee.split("")
    }
	
	//console.log('createServer() callback');
	reponse.statusCode = 200;
	reponse.setHeader('Content-type', 'text/plain');
	reponse.end(json);
}

var serveur = http.createServer(repondeur);
serveur.listen(8080, 'localhost', ()=>{console.log('Serveur en ligne.');});