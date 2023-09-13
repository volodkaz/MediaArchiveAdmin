create table client_info_property_del() inherits (client_info_property);

CREATE INDEX inx_client_info_property_id_del ON client_info_property_del (id);