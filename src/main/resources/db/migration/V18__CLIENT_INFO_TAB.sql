create table client_info_tab
(
    id               int8 generated always as identity primary key,
    tab_id           int8         not null references client_tab(id),
    client_id        int8         not null references clients (id) on delete cascade,
    name             varchar(64)  not null,
    comment          varchar(256) not null,
    is_deleted       boolean      not null default false,
    create_date      timestamp(6) not null,
    modify_date      timestamp(6) null
);