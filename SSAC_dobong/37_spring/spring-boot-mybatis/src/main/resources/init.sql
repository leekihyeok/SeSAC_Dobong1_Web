CREATE DATABASE spring default CHARACTER SET UTF8;

       create table user(
             id int not null primary key auto_increment,
             name varchar(10) not null,
             nickname varchar(20) not null
       );