#!/bin/bash
UTILISATEUR=master

pg_dump -U ${UTILISATEUR} -w -F t sunbay > ~/backup/sunbay_dump.sql