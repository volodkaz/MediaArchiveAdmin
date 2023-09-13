create table client_info_tab_del() inherits (client_info_tab);

CREATE INDEX inx_client_info_tab_id_del ON client_info_tab_del (id);