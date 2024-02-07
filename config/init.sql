drop database mostbook;

create database mostbook;

\c mostbook;

create table category(
    parent_id int,
    category_id serial not null primary key,
    name varchar
);

-- create table user(
--     user_id srial not null primary key,
--     username varchar,
--     password varchar,
--     firt_name varchar,
--     last_name varchar,
--     phone int
-- );

-- create table user_address(
--     user_address_id not null primary key,
--     user_id int,
--     address_line1 varchar,
--     address_line2 varchar,
--     city varchar,
--     postal_code varchar,
--     country varchar,
--     constraint fk_user foreign key(user_id) references user(user_id)
-- );

-- create table user_payment(
--     user_payment_id not null primary key,
--     payment_type varchar,
--     provider varchar,
--     account_no varchar,
--     expiry varchar,
--     constraint fk_user foreign key(user_id) references user(user_id)
-- );
create table size(
    size_id serial not null primary key,
    size_code varchar
);

create table product (
    product_id serial not null primary key,
    name varchar,
    price int,
    description varchar,
    category_id int,
    constraint fk_category foreign key(category_id) references category(category_id)
);

create table color (
    color_id serial not null primary key,
    color_code varchar,
    color_img varchar
);



create table variant_product (
    variant_product_id serial not null primary key,
    product_id int,
    color_id int,
    constraint fk_product foreign key(product_id) references product(product_id),
    constraint fk_color foreign key(color_id) references color(color_id)
);
create table product_size(
    prodcut_size_id serial not null primary key,
    variant_product_id int,
    size_id int,
    constraint fk_size foreign key(size_id) references size(size_id),
    constraint fk_variant_product foreign key(variant_product_id) references variant_product(variant_product_id)

);
create table image (
    image_id serial not null primary key,
    variant_product_id int,
    url varchar,
    constraint fk_variant_product foreign key(variant_product_id) references variant_product(variant_product_id)
);

--insert product
insert into
    product(product_id, name, description, price)
values
    (1, 'shirt', 'good', 20000);

insert into
    product(product_id, name, description, price)
values
    (2, 'shirt 2', 'good', 20000);

--insert color
insert into
    color(color_id, color_code)
values
    (1, 'red');

insert into
    color(color_id, color_code)
values
    (2, 'blue');

insert into
    color(color_id, color_code)
values
    (3, 'yellow');

--insert size
insert into
    size(size_code)
values
    ('X');

insert into
    size(size_code)
values
    ('XL');

--insert variant product
insert into
    variant_product(variant_product_id, product_id, color_id)
values
    (1, 1, 1);

insert into
    variant_product(variant_product_id, product_id, color_id)
values
    (2, 1, 2);

--insert image
insert into
    image(image_id, variant_product_id, url)
values
    (1, 1, 'www.youtube.com');

insert into
    image(image_id, variant_product_id, url)
values
    (2, 1, 'www.youtube.com');

insert into
    image(image_id, variant_product_id, url)
values
    (3, 2, 'www.youtube.com');

insert into
    image(image_id, variant_product_id, url)
values
    (4, 2, 'www.facebook.com');

-- insert category
insert into
    category(name)
values
    ('t-shirt');

