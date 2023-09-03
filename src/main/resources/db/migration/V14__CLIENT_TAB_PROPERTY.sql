create table client_tab_property
(
    prop_id          int8 generated always as identity primary key,
    name             varchar(32)  not null,
    property_comment varchar(255) null,
    create_date      timestamp(6) not null,
    modify_date      timestamp(6) null
);