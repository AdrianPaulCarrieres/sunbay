# Projet Capture - SunBay - Représentation des données

## Format de l'url pour le service web de lecture

**$typeDonnee** = 'luminosite' ou 'temperature'

**$plage** = 'jour' ou 'mois' ou 'annee'

**$type** = 

* URL:
> https://hote/index.php?typeDonnee=$typeDonnee&plage=$plage

* URL améliorée:
> https://hote/$typeDonnee/$plage/$type

## Format du XML pour l'application 

```xml
<calcul>
    <moment></moment>
    <type-donnee></type-donnee>
    <unite></unite>
    <moyenne></moyenne>
    <min></min>
    <max></max>
    <moyenne-annee-derniere></moyenne-annee-derniere>
</calcul>
```

