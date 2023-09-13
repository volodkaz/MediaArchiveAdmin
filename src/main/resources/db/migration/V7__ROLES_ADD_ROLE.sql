INSERT INTO roles(name, comment, create_date)
VALUES('ROLE_ALL', 'доступ ко всем медиа  данным', current_timestamp);
INSERT INTO roles(name, comment, create_date, type)
VALUES('ROLE_PERSONAL', 'доступ имеют только владельцы', current_timestamp, 'HIDE');
INSERT INTO roles(name, comment, create_date)
VALUES('ROLE_CHILDREN', 'доступ к детским медиа данным', current_timestamp);
INSERT INTO roles(name, comment, create_date, type)
VALUES( 'ROLE_ADMIN', 'Администраторская роль', current_timestamp, 'ADMIN');