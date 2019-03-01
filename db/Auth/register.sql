insert into users (username, password, user_img)
values (${username}, ${password}, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rEmU-ruIn1lRqaxZIziwcpZcTH6d9m_zVevdyU4y8pnhgPGI')
returning id, username, user_img