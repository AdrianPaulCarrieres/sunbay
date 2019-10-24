const {Client} = require('pg');
var connexion = {
	  user: 'master', password: '123qweQWE',
	  host: '192.168.56.10', port: 5432,
	  database: 'sunbay'};

exports.enregistrerDonnee = async function(donnee)
{
	var basededonnees = new Client(connexion);
	await basededonnees.connect();
    
    const INSERT_TEMPERATURE = {
        name: 'enregistrerDonnee',
        text: 'INSERT INTO DONNEE (valeur, instant, id_type_donnee_mesuree) VALUES $1, $2, $3',
        values: [donnee.temperature, donnee.instant, 1],
      }
      const INSERT_LUMINOSITE = {
        name: 'enregistrerDonnee',
        text: 'INSERT INTO DONNEE (valeur, instant, id_type_donnee_mesuree) VALUES $1, $2, $3',
        values: [donnee.luminosite, donnee.instant, 2],
      }
      // callback
      basededonnees.query(INSERT_TEMPERATURE, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
      })
      basededonnees.query(INSERT_LUMINOSITE, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
      })
      
      // promise
      basededonnees
        .query(INSERT_TEMPERATURE)
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack));
      basededonnees
        .query(INSERT_LUMINOSITE)
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack))

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