INSERT INTO roles(role_name, role_comment, create_date)
VALUES('ROLE_ALL', 'доступ ко всем медиа  данным', current_timestamp);
INSERT INTO roles(role_name, role_comment, create_date, role_type)
VALUES('ROLE_PERSONAL', 'доступ имеют только владельцы', current_timestamp, 'HIDE');
INSERT INTO roles(role_name, role_comment, create_date)
VALUES('ROLE_CHILDREN', 'доступ к детским медиа данным', current_timestamp);
INSERT INTO roles(role_name, role_comment, create_date, role_type)
VALUES('ROLE_ADMIN', 'Администраторская роль', current_timestamp, 'ADMIN');