CREATE OR REPLACE FUNCTION fn_clients_info_property_delete()
    RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO client_info_property_del(id, property_id, info_tab_id, is_deleted, create_date)
    VALUES (OLD.id, OLD.property_id, OLD.info_tab_id, true, OLD.create_date);
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;