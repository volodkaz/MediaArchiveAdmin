with cl_tab as (select ct.tab_id
                from client_tab ct
                where ct."name" = 'Личные данные'),
     cl_prop as (select ctp.prop_id
                 from client_tab_property ctp
                 where ctp."name" in ('Фамилия', 'Имя',
                                      'Отчество', 'Телефон', 'Электронная почта', 'Логин')
     )
insert into client_tab_prop_setting(tab_id, prop_id, create_date)
select tab_id, prop_id, current_timestamp
from cl_tab, cl_prop;


with cl_tab as (select ct.tab_id
                from client_tab ct
                where ct."name" = 'Заметка'),
     cl_prop as (select ctp.prop_id
                 from client_tab_property ctp
                 where ctp."name" in ('Заметка')
     )
insert into client_tab_prop_setting(tab_id, prop_id, create_date)
select tab_id, prop_id, current_timestamp
from cl_tab, cl_prop;