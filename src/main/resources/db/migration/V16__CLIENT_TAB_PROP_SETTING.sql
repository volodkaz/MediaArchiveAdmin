create table client_tab_prop_setting
(
    id  int8 generated always as identity primary key,
    tab_id      int8         not null references client_tab (id),
    prop_id     int8         not null references client_tab_property (id),
    create_date timestamp(6) not NULL,
    modify_date timestamp(6) NULL,
    UNIQUE (prop_id, tab_id)
);