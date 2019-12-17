#!/bin/bash
# Créer un propriétaire pour la BDD
createuser -U master -A -D -P sunbay

sudo psql --dbname sunbay <<FIN
ALTER DATABASE sunbay OWNER TO sunbay;
GRANT ALL ON sunbay TO sunbay;
REVOKE CREATE on schema public from public;
FIN