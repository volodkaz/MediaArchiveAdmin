create table client_tab_prop_setting
(
    setting_id  int8 generated always as identity primary key,
    tab_id      int8         not null references client_tab (tab_id),
    prop_id     int8         not null references client_tab_property (prop_id),
    create_date timestamp(6) not NULL,
    modify_date timestamp(6) NULL,
    UNIQUE (prop_id, tab_id)
);
