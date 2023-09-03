CREATE OR REPLACE FUNCTION fn_clients_delete()
    RETURNS TRIGGER AS
$$
BEGIN
    INSERT INTO clients_del(client_id, client_name, client_password, create_date, is_deleted)
    VALUES (OLD.client_id, old.client_name, old.client_password, old.create_date, true);
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;