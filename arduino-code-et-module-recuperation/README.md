# Instructions pour lire via le port série

```powershell
git pull origin arduino

cd arduino
```

Il faut utiliser le package serialport ( -g si vous le voulez en global) :

```powershell
npm install [-g] --save serialport
```

Une fois le programme arduino téléversé sur la carte, lancer la communication :

```powershell
node .\communication.js COM5
```

Il faut bien sûr changer le nom de votre port.

Attention : Ne pas lancer le moniteur de série dans l'IDE Arduino sinon vous aurez une erreur.

