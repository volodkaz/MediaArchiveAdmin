create table client_tab
(
    tab_id      int8 generated always as identity primary key,
    name        varchar(64) not null,
    tab_comment varchar(255) null,
    tab_type    int8 not null references client_tab_type (id),
    create_date timestamp(6) not null,
    modify_date timestamp(6) null
);