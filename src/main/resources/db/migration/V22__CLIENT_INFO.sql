create table client_info
(
    id               int8 generated always as identity primary key,
    info_property_id int8 references client_info_property (id) on delete cascade,
    data             varchar(255) null,
    is_default       boolean      not null default false,
    modify_client_id varchar(36)  not null,
    is_deleted       boolean      not null default false,
    create_date      timestamp(6) not null,
    modify_date      timestamp(6) null
);