insert into client_tab(name, create_date, tab_comment, tab_type)
select 'Личные данные', current_timestamp, 'ФИО, разные учётные данные, логин, пароль и др.', ctt.id
from client_tab_type ctt
where ctt.name = 'userDetails';

insert into client_tab(name, create_date, tab_comment, tab_type)
select 'Заметка', current_timestamp, 'Различные данные на память', ctt.id
from client_tab_type ctt
where ctt.name = 'userNotes';
