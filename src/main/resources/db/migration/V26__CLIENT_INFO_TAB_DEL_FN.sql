CREATE OR REPLACE FUNCTION fn_clients_info_tab_delete()
    RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO client_info_tab_del(id, tab_id, client_id, name, comment, is_deleted, create_date)
    VALUES (OLD.id, OLD.tab_id, OLD.client_id, OLD.name, OLD.comment, true, OLD.create_date);
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;