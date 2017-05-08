BEGIN;

DROP TABLE IF EXISTS users CASCADE;


CREATE TYPE cohort AS ENUM ('FAC1','FAC2','FAC3','FAC4','FAC5','FAC6','FAC7',
'FAC8','FAC9','FAC10','FACN1','FACG1');
CREATE TYPE relation AS ENUM ('alumni','friend');
CREATE TYPE location AS ENUM ('London','Nazareth','Gaza');
CREATE TABLE users (
  id                   SERIAL        PRIMARY KEY,
  name                 VARCHAR(64),
  profile_picture      VARCHAR(500),
  github_id            INTEGER,
  github_username      VARCHAR(64),
  fac_cohort           cohort,
  fac_relation         relation,
  fac_location         location,
  stripe_id            VARCHAR(200)
);

COMMIT;
