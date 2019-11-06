# Instructions pour lire via le port série

Il faut certainement regénérer le projet, à cause du .gitignore

Il faut utiliser le package serialport ( -g si vous le voulez en global) :

```powershell
npm install [-g] --save serialport
```

Une fois le programme téléversé sur la carte arduino, lancer la communication :

```powershell
node .\communication.js COM5
```

Il faut bien sûr changer le nom de votre port.