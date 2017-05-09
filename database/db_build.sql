BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TYPE IF EXISTS cohort, relation, location CASCADE;

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

INSERT INTO users VALUES
(1, 'Joey Scott', 'https://avatars1.githubusercontent.com/u/11914321?v=3', 11914321, 'joeylouise', 'FAC10', 'alumni', 'London', '234fdsfvsdfg234fdg324')
RETURNING ID;

COMMIT;
