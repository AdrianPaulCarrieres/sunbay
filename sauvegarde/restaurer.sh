#!/bin/bash
/bin/bash ~/script/creerbd.sh
pg_restore -d sunbay --create ~/backup/sunbay_dump.sql