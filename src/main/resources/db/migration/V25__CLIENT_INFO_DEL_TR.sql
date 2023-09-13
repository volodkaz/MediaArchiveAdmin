CREATE TRIGGER tr_client_info_delete
    BEFORE delete ON client_info
    FOR EACH ROW EXECUTE PROCEDURE fn_clients_info_delete();