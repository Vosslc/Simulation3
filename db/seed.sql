CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(100),
	password VARCHAR,
	profile_pic TEXT
);
CREATE TABLE users_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	author_id INT REFERENCES users(user_id)
);
CREATE TABLE posts (
	post_id SERIAL PRIMARY KEY,
	title VARCHAR(45),
	img TEXT,
	content TEXT,
	author_id INT REFERENCES users(user_id)
);

select * from users, posts;