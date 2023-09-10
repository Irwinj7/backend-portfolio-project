\c posts_dev;

INSERT INTO posts (name, url, category, price, is_favorite) VALUES
('Gaming Chair', 'https://images.secretlab.co/subimage/tr:n-display_gallery/R22PU-CP2077_02.jpg?_ga=2.57298474.1641163620.1694299415-6264495.1694299413&_gac=1.249095925.1694302592.CjwKCAjwr_CnBhA0EiwAci5silDAhmKkHWMU44CXBcwCBqD0nfkhTMk2j5eehwzhSC_ynl68ixbwNRoCkjsQAvD_BwE', 'Chair', 400, true),
('Ps5', 'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense?$Background_Large$', 'Game Console', 450, false),
('Xbox 1 Used', 'https://media.gamestop.com/i/gamestop/10115705?$pdp2x$$&fmt=webp', 'Game Console', 130, true),
('Oled Switch', 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1065/b_white/f_auto/q_auto/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-boxart-1200x675', 'Game Console', 250, true),
('PC Used', 'https://i5.walmartimages.com/seo/IPASON-Gaming-Desktop-PC-AMD-Ryzen-5-5500-GeForce-GTX-1650-16GB-DDR4-1TB-SSD-Windows-11-Home_2be74b5b-99d5-4043-a881-929d9a7b8b82.78261378b766982a4ab6ef4e518410e7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Technology', 530, true),
('Razer Gaming Chair', 'https://assets3.razerzone.com/S2lCh_kdbgSDDBMpPHe0ZgRi0jw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe3%2Fh62%2F9249241727006%2F211021-enki-green-1500x1000-1.jpg', 'Chair', 300, false),
('Racing Chair Rig', 'https://assets.wfcdn.com/im/39938834/resize-h445%5Ecompr-r85/2510/251096966/Racing+Simulator+Cockpit+with+Gaming+Seat+Steering+Wheel+Stand.jpg', 'Chair', 380, true)
;


INSERT INTO offers (post_id, author, title, price, content)
VALUES
(1, 'Mike Hawk', 'My offer based on condition', 300, 'Hey my highest offer for this item is this'),
(1, 'Daniel Reto', 'Please accept my offer', 320, 'This is my offer, I can pickup today!');