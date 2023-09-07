DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 price NUMBER NOT NULL,
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS offers;

CREATE TABLE offers (
 id SERIAL PRIMARY KEY,
 author TEXT,
 title TEXT,
 price TEXT,
 content TEXT,
 post_id INTEGER REFERENCES posts (id)
 ON DELETE CASCADE
);
