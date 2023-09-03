create table client_tab_type
(
    id          int8 generated always as identity primary key,
    name        varchar(64)  not null unique,
    comment     varchar(255) null,
    create_date timestamp(6) not null,
    modify_date timestamp(6) null
);