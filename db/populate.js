// create table categories (
// category_id uuid primary key default gen_random_uuid(),
// category_name text not null unique
//  );


// create table items (
// item_id uuid primary key default gen_random_uuid(),
// item_name text not null unique,
// item_quantity integer not null check (item_quantity >= 0),
// category_id uuid not null references categories(category_id) on delete cascade,
// updated_at timestamp default now()
// );

// INSERT INTO categories (category_name) VALUES
//     ('Electronics'),
//     ('Groceries'),
//     ('Books')
// RETURNING *;

// insert into items (item_name, item_quantity, category_id) values
// ('Laptop', 10, 'f2bf07e9-1528-4926-8f50-27508efae3fb'),
// ('Rice', 25, 'df93b3d9-1922-4c57-859b-2b32e55be7f4'),
// ('1984', 5, '920b7e49-8084-4004-be10-067846fb13f3'),
// ('Notes from underground', 3, '920b7e49-8084-4004-be10-067846fb13f3')
// returning *;

// select items.item_name, items.item_quantity, categories.category_name, items.updated_at
// from items
// join categories on items.category_id = categories.category_id;



