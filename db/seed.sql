\c posts_dev;

INSERT INTO posts (name, url, category, is_favorite) VALUES
('MDN', 'https://developer.mozilla.org/en-US/', 'educational', true),
('Apartment Therapy', 'https://www.apartmenttherapy.com', 'inspirational', true),
('DMV', 'https://dmv.ny.gov', 'adulting', true);

INSERT INTO descriptions (post_id, author, title, content, rating)
VALUES
('1', 'Evan', 'My Favorite', 'This website crushes it when it comes to awesome explanations', 3),
