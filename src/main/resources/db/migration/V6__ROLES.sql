create table roles
(
    id          int8 generated always as identity primary key,
    name        varchar(16)  not null unique,
    comment     varchar(255) null,
    type        varchar(8)   null,
    create_date timestamp(6) not NULL,
    modify_date timestamp(6) NULL
);