--DDL
--Data Definition Language
--operates on tables (and other objects), is not aware of individual rows
CREATE DATABASE mydatabase;
DROP DATABASE mydatabase;

CREATE SCHEMA myschema;
DROP SCHEMA myschema;
--schemas are like namespaces/scopes for tables and other objects

CREATE SCHEMA rest_reviews;

--normally we'd have to qualify our tables with the schema name, but we can change searhc_path from its default of public to look in out schema we're working in currently
SET search_path TO rest_reviews,public;

DROP TABLE rest_reviews.reviews;
CREATE TABLE rest_reviews.reviews (
	id INTEGER NOT NULL,
	reviewer CHARACTER VARYING(100)NOT NULL,
	score NUMERIC(4,2) NOT NULL, -- 4 digits total, 2 after the decimal place
	text TEXT NULL,
	last_updated TIMESTAMP NOT NULL DEFAULT (localtime),
	CONSTRAINT pk_reviews_id PRIMARY KEY (id),
	CONSTRAINT u_reviews_reviewer_restaurant UNIQUE (restaurant_id, reviewer),
);

--constraints:
--NOT NULL : (null is not allowed as a value), allowing NULL is the default
--PRIMARY KEY (enforces uniqueness, not-null-ness, and sets the clustered index)
--DEFAULT



--POSTGRES

DROP TABLE rest_reviews.restaurants;
CREATE TABLE rest_reviews.restaurtants (
	id SERIAL NOT NULL,
	name VARCHAR(100) NOT NULL,
	cuisine VARCHAR(100) NULL,
	address_line1 VARCHAR(100) NOT NULL,
	address_line2 VARCHAR(100) NULL,
	country VARCHAR(100) NOT NULL,
	CONSTRAINT pk_restautrants_id PRIMARY KEY(id),
);

ALTER TABLE reviews
	ADD CONSTRAIN fk_reviews_restaurants_Nto1
		FOREIGN KEY (restaurant)
		
		
		
--		data types
-- smallint
-- int/integer
-- bigint
-- numeric/decimal(p,s): p - precesion = number of digits, s - scale = number of decimal places
-- serial (special int with aut-increment behavior, use for IDs)
-- money (for storing currency values, bsed on locale)
--		string/character types:
-- character/char(n) (fixed length string)
-- character varying/charvar
-- text (unlimited length string)
-- 		binary
--  bytea


