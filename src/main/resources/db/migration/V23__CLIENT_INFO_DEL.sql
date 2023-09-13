create table client_info_del() inherits (client_info);

CREATE INDEX inx_client_info_id_del ON client_info_del (id);