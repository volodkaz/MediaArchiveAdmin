create table client_info
(
    info_id          int8 generated always as identity primary key,
    client_id        int8         not null references clients (client_id) on delete cascade,
    tab_sett_id      int8         not null references client_tab_prop_setting (setting_id),
    data             varchar(255) null,
    is_default       boolean not null default false,
    modify_client_id varchar(36)  not null,
    is_deleted       boolean      not null default false,
    create_date      timestamp(6) not null,
    modify_date      timestamp(6) null
);