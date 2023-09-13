CREATE TRIGGER tr_client_info_tab_delete
    BEFORE delete ON client_info_tab
    FOR EACH ROW EXECUTE PROCEDURE fn_clients_info_tab_delete();