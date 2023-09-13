with client_id as (select cl.id from clients cl where cl.name = 'vladimir'),
     role_id as (select r.id from roles r where r.name = 'ROLE_ADMIN')
insert into client_roles
select * from client_id, role_id
