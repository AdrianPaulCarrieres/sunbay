const {Pool, Client} = require('pg');
var connexion = {
	  user: 'sunbay', password: 'Motivation*',
	  host: 'vpsloic.loicbertrand.net', port: 2232,
	  database: 'sunbay'};

exports.enregistrerDonnee = async function(donnee)
{
  console.log('enregistrerDonnee');

	var basededonnees = new Pool(connexion);
	
  const INSERT_LUMINOSITE = {
    name: 'enregistrerDonnee',
    text: 'INSERT INTO donnee_mesuree (valeur, instant, id_type_donnee_mesuree) VALUES ($1, $2, $3)',
    values: [donnee.luminosite, donnee.instant, 2],
  }
  // callback
  
  basededonnees.query(INSERT_LUMINOSITE, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  })
  console.log(INSERT_LUMINOSITE);
  basededonnees.end();
}

/*
exports.listerDonnee = async function()
{
	var basededonnees = new Client(connexion);
	await basededonnees.connect();
	var curseurDonnee = await basededonnees.query("SELECT * FROM Donnee");
	//console.log(curseurDonnee.rows);
	var position = 0; var Donnee = {};
	curseurDonnee.rows.forEach
	(
		//Donnee => {console.log(Donnee);}
		//Donnee => {console.log("Donnee " + Donnee.titre + " : " + Donnee.description);}
		Donnee => {Donnee[position++] = Donnee; }
	);
	console.log(JSON.stringify(Donnee));
	await basededonnees.end();
	return JSON.stringify(Donnee);
}

//async function detaillerDonnee(id)
exports.detaillerDonnee = async function(id)
{
	var basededonnees = new Client(connexion);
	await basededonnees.connect();
	var curseurDonnee = await basededonnees.query("SELECT * FROM Donnee WHERE id = " + id); // TODO corriger danger injection sql
	var Donnee = curseurDonnee.rows[0];
	console.log(JSON.stringify(Donnee));
	await basededonnees.end();
	return JSON.stringify(Donnee);
}
*/