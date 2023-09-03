CREATE TRIGGER tr_client_delete
    BEFORE delete
    ON clients
    FOR EACH ROW
EXECUTE PROCEDURE fn_clients_delete();