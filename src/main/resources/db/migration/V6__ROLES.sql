create table roles
(
    role_id      int8 generated always as identity primary key,
    role_name    varchar(16)  not null unique,
    role_comment varchar(255) null,
    role_type   varchar(8)   null,
    create_date  timestamp(6) not NULL,
    modify_date  timestamp(6) NULL
);