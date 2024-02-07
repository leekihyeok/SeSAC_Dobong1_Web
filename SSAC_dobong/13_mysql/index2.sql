create table customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
desc customer;
INSERT INTO customer (id, name, birthday) VALUES('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT * FROM customer;

CREATE table orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);
--foreing key(현재 테이블 컬럼 이름fk) REFERENCES 기준테이블(기준테이블 컬럼 이름 pk)
--on update cascade : 기준 테이블(customer)이 변경되면 참조하는 테이블(orderlist)도 변경이 됨
--on delete cascade : 기준 테이블(customer)이 삭제되면 참조하는 테이블(orderlist)도 삭제가 됨
-- 테이블을 삭제할 때 -> 외래키가 설정되어있는 테이블을 먼저 삭제하고 기준 테이블을 삭제해야함
--                   -> 관계로 연결된 테이블의 외래키를 먼저 삭제해야함

desc orderlist;
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM orderlist;

--join

--inner join
-- 1. inner join과 on을 사용
SELECT *
FROM customer
INNER JOIN orderlist
ON customer.id = orderlist.customer_id;
-- on은 굳이 쓰지 않아도 됨

-- 2.  , 와 where 로 inner join 사용
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name 
FROM customer, orderlist
WHERE customer.id = orderlist.customer_id;

--3. inner join, on 사용, where 조건과 함께 사용
SELECT * 
FROM orderlist INNER join customer
ON customer.id = orderlist.customer_id
WHERE quantity >= 5;

--4. table 별칭지어서 접근(as 사용)
SELECT o.id, c.id, c.name, o.product_name 
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

-- natural JOIN
SELECT * 
FROM orderlist NATURAL JOIN customer;


-- left/rigt outer join : inner join과 다르게 없던 데이터들도 보이게 함
SELECT * 
FROM orderlist
LEFT OUTER JOIN customer
ON customer.id = orderlist.customer_id;
SELECT * 
FROM orderlist
RIGHT OUTER JOIN customer
ON customer.id = orderlist.customer_id;

show databases;
use dobong;

CREATE TABLE A_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

CREATE TABLE B_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

desc A_university;
desc B_university;
DROP TABLE if EXISTS subject; 
CREATE TABLE subject(
    register_id int PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(15) NOT NULL,
    subject VARCHAR(30) NOT NULL
);

INSERT INTO A_university VALUES('20115544','a',34);
INSERT INTO A_university VALUES('20156677','b',31);
INSERT INTO A_university VALUES('20227755','c',25);
INSERT INTO A_university VALUES('20232223','d',23);
INSERT INTO A_university VALUES('20201144','e',23);
INSERT INTO A_university VALUES('20145145','f',30);
INSERT INTO A_university VALUES('20180919','g',26);

INSERT INTO B_university VALUES('2022091994','h',29);
INSERT INTO B_university VALUES('2020101021','i',23);
INSERT INTO B_university VALUES('2018187566','j',26);

INSERT INTO subject VALUES(NULL,'20115544','네트워크');
INSERT INTO subject VALUES(NULL,'20115544','알고리즘');
INSERT INTO subject VALUES(NULL,'20156677','알고리즘');
INSERT INTO subject VALUES(NULL,'20227755','네트워크');
INSERT INTO subject VALUES(NULL,'20232223','C언어');
INSERT INTO subject VALUES(NULL,'20145145','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','C언어');
INSERT INTO subject VALUES(NULL,'20180919','네트워크');
INSERT INTO subject VALUES(NULL,'2022091994','C언어');
INSERT INTO subject VALUES(NULL,'2022091994','캡스톤');
INSERT INTO subject VALUES(NULL,'2022091994','웹프레임워크');
INSERT INTO subject VALUES(NULL,'2018187566','C언어');
INSERT INTO subject VALUES(NULL,'2018187566','네트워크');
INSERT INTO subject VALUES(NULL,'2018187566','캡스톤');

select * from a_university;
select * from b_university;
select * from subject;

-- join
-- 1. inner JOIN
SELECT *
FROM A_university INNER JOIN subject
ON A_university.id=subject.id;

SELECT *
FROM A_university, subject
where A_university.id=subject.id;

-- 2. left outer JOIN
SELECT *
FROM A_university LEFT OUTER JOIN subject
ON A_university.id=subject.id;


-- 3. right outer JOIN
SELECT *
FROM A_university RIGHT OUTER JOIN subject
ON A_university.id=subject.id;

-- 4. natural join
SELECT *
FROM A_university NATURAL JOIN subject;