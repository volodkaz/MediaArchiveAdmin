insert into client_tab_property(name, comment, form_label, create_date)
values ('Фамилия', 'Фамилия', 'firstName',current_timestamp),
       ('Имя', 'Имя', 'secondName',current_timestamp),
       ('Отчество', 'Отчество', 'patronymic',current_timestamp),
       ('Телефон', 'Мобильные и другие номера телефонов', 'phoneNumbers',current_timestamp),
       ('Электронная почта', 'Адреса электронной почты', 'emails',current_timestamp),
       ('Логин', 'Логин для входа в аккаунт', 'login',current_timestamp),
       ('Заметка', 'Данные для сохранения', 'notate',current_timestamp);