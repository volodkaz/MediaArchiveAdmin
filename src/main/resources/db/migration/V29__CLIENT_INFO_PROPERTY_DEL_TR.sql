CREATE TRIGGER tr_client_info_property_delete
    BEFORE delete ON client_info_property
    FOR EACH ROW EXECUTE PROCEDURE fn_clients_info_property_delete();