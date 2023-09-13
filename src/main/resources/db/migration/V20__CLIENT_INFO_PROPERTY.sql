create table client_info_property
(
    id               int8 generated always as identity primary key,
    property_id      int8         not null references client_tab_property (id),
    info_tab_id      int8         references client_info_tab (id) on delete cascade,
    is_deleted       boolean      not null default false,
    create_date      timestamp(6) not null,
    modify_date      timestamp(6) null
);