create table clients_del() inherits (clients);

CREATE INDEX inx_clients_client_id_del ON clients_del (id);