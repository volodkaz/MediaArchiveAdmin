with client_id as (select cl.client_id from clients cl where cl.client_name = 'vladimir'),
     role_id as (select r.role_id from roles r where r.role_name = 'ROLE_ADMIN')
insert into client_roles
select * from client_id, role_id
