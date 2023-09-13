create table clients
(
    id            int8 generated always as identity primary key,
    name          varchar(36)  not null unique,
    password      varchar(255) not null,
    refresh_token varchar(255) null,
    is_deleted    boolean default false,
    create_date   timestamp(6) not NULL,
    modify_date   timestamp(6) NULL
);