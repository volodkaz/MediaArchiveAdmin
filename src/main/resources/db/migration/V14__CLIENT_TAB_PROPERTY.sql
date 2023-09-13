create table client_tab_property
(
    id          int8 generated always as identity primary key,
    name        varchar(32)  not null,
    comment     varchar(255) null,
    create_date timestamp(6) not null,
    modify_date timestamp(6) null
);