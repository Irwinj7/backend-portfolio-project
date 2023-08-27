DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 price INTEGER,
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS descriptions;

CREATE TABLE descriptions (
 id SERIAL PRIMARY KEY,
 author TEXT,
 title TEXT,
 content TEXT,
 post_id INTEGER REFERENCES posts (id)
 ON DELETE CASCADE
);
