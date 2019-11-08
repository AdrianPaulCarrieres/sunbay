var valeurActuelle = 5;
var comparaison = "La journée est peu lumineuse.";
var tabAujourdHui = [0, 5, 10];
var tabDebut = [-20, 4, 30];

var vueValeur = new VueValeur(valeurActuelle, comparaison, tabAujourdHui, tabDebut);

vueValeur.afficher();