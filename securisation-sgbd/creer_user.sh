#!/bin/bash
# Créer un utilisateur limité pour sunbay
createuser -U master -A -D -P sbuser

sudo psql --dbname sunbay <<FIN
GRANT CONNECT ON DATABASE sunbay TO sbuser;
GRANT USAGE ON SCHEMA public TO sbuser;
GRANT SELECT ON donnee_mesuree TO sbuser;
FIN