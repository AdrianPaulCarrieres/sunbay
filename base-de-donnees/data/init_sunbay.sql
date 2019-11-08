DROP TABLE IF EXISTS donnee_mesuree;
DROP TABLE IF EXISTS type_donnee_mesuree;

-- CREATE TABLE type_donnee_mesuree(
--     id_type_donnee_mesuree serial PRIMARY KEY,
--     etiquette text,
--     unite text
-- );

CREATE TABLE donnee_mesuree(
    id_donnee_mesuree serial PRIMARY KEY,
    valeur numeric(5),
    instant timestamp without time zone
    -- ,
    -- id_type_donnee_mesuree integer,
    -- CONSTRAINT type_donnee_mesuree_mesure_fk
    --     FOREIGN KEY (id_type_donnee_mesuree)
    --     REFERENCES type_donnee_mesuree(id_type_donnee_mesuree)
    --     ON DELETE CASCADE
    --     ON UPDATE CASCADE
);