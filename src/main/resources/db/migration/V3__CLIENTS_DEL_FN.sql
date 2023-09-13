CREATE OR REPLACE FUNCTION fn_clients_delete()
    RETURNS TRIGGER AS
$$
BEGIN
    INSERT INTO clients_del(id, name, password, create_date, is_deleted)
    VALUES (OLD.id, old.name, old.password, old.create_date, true);
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;