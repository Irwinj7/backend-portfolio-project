DROP DATABASE IF EXISTS post_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 price NUMBER,
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS descriptions;

CREATE TABLE descriptions (
 id SERIAL PRIMARY KEY,
 author TEXT,
 title TEXT,
 content TEXT,
 post_id INTEGER REFERENCES posts (id)
 post_price INTEGER REFERENCES posts (price)
 ON DELETE CASCADE
);
