create table users (
    id serial primary key,
    username varchar(255),
    password varchar(255),
    user_img text
)

create table posts (
    id serial primary key,
    title varchar(100),
    post varchar(255),
    post_img text
)