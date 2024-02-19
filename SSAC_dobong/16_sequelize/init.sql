-- Active: 1707101322155@@127.0.0.1@3306@sessac
show TABLEs;
DROP TABLE visitor;
CREATE Table visitor(
    id INT AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT NOT NULL
);
desc visitor;

insert into visitor (name,comment) VALUES ('allie','안녕하세요');
insert into visitor (name,comment) VALUES ('홍길동','반가워요');
insert into visitor (name,comment) VALUES ('둘리','호이호이');
insert into visitor (name,comment) VALUES ('흰둥이','멍멍');
insert into visitor (name,comment) VALUES ('짱구','울라울라');
insert into visitor (name,comment) VALUES ('피카츄','피카피카');

select * from visitor;
--새로운 user만들기1
CREATE USER 'sessac'@'%' IDENTIFIED BY '1234';
--새로운 user만들기2
ALTER USER 'sessac'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 

GRANT ALL PRIVILEGES on *.* TO 'sessac'@'%' WITH GRANT OPTION;
--모든 db에 접근 가능하도록 , sessac 계정에 db접근 권한을 부여

FLUSH PRIVILEGES;
--db에서 사용하고있던 캐시를 제거.
--현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용

select * from user