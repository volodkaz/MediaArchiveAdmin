CREATE TABLE client_roles
(
    client_id int8 NOT null REFERENCES public.clients (client_id) on delete cascade,
    role_id   int8 NOT null REFERENCES public.roles (role_id),
    CONSTRAINT client_roles_pkey PRIMARY KEY (client_id, role_id)
);