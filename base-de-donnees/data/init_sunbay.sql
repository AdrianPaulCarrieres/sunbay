DROP TABLE IF EXISTS calcul;
DROP TABLE IF EXISTS donnee_mesuree;
DROP TABLE IF EXISTS type_donnee_mesuree;
DROP TABLE IF EXISTS unite;


CREATE TABLE unite(
    id_unite serial PRIMARY KEY,
    etiquette text
);

CREATE TABLE type_donnee_mesuree(
    id_type_donnee_mesuree serial PRIMARY KEY,
    etiquette text
);

CREATE TABLE donnee_mesuree(
    id_donnee_mesuree serial PRIMARY KEY,
    valeur numeric(5),
    instant timestamp without time zone,
    id_type_donnee_mesuree integer,
    CONSTRAINT type_donnee_mesuree_mesure_fk
        FOREIGN KEY (id_type_donnee_mesuree)
        REFERENCES type_donnee_mesuree(id_type_donnee_mesuree)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE calcul(
    id_calcul serial PRIMARY KEY,
    id_type_donnee_mesuree integer,
    id_unite integer,
    valeur float,
    etiquette text,
    date_debut timestamp with time zone,
    date_fin timestamp with time zone,
    CONSTRAINT type_donnee_mesuree_calcul_fk
        FOREIGN KEY (id_type_donnee_mesuree)
        REFERENCES type_donnee_mesuree(id_type_donnee_mesuree)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT unite_calcul_fk
        FOREIGN KEY (id_unite)
        REFERENCES unite(id_unite)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);