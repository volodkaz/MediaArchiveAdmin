CREATE OR REPLACE FUNCTION fn_clients_info_delete()
    RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO client_info_del(client_id, tab_sett_id, data, modify_client_id, is_deleted, create_date)
    VALUES (OLD.info_id, OLD.tab_sett_id, OLD.data, OLD.modify_client_id, true, OLD.create_date);
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;