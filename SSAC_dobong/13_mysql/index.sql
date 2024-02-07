SHOW DATABASEs;
DROP DATABASE sesac;
DROP DATABASE mydatabase;
SHOW DATABASES;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
-- dobong - 문자열셋으로 utf8mb4를, 클레이션으로 utfmb4_unicode_ci를 사용
-- utf8mb4 - utf8보다 더 많은 문자 지원(이모지 지원)
--         - 이모지를 저장하는 DB라면 utfmb4 이모지를 저장하지 않아도 된다면 utf8
create DATABASE dobong CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터베이스를 사용
use sesac;

-- table 관련 명령어
-- 1. 테이블 생성
-- create table products(
--  속성1 값형식 제약조건,
--  속성2 값형식 제약조건,
-- )

-- 제약조건
-- NOT NULL : null 허용 안함
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키(중복허용 안함, null 값 허용 안함)
-- DEFAULT : 기본값
-- UNIQUE : 중복허용 안함 but null 값은 허용
CREATE Table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);


-- table 목록 확인
show tables;

-- products 테이블에 어떤 컬럼이 있는지 확인
desc products;

-- 테이블 삭제
drop table products; -- products 테이블이 아예 삭제
TRUNCATE TABLE products; -- products 안에 내용들이 전부 삭제

-- 테이블 수정 ALTER
-- 1. 컬럼 추가
ALTER Table products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정
ALTER Table products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER Table products DROP new_column;

-- ----------------------------------------------------
-- DML Data Manipulation Language (데이터 조작어)
-- user TABLE(id: not null AUTO_INCREMENT PRIMARY KEY, name VARCHAR(10) NOT NULL, age INT NOT NULL, address VARCHAR(100))
CREATE Table user_rekey(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT null,
    age INT NOT NULL,
    address VARCHAR(100)
);
DESC user_rekey;
-- CREATE -> INSERT INTO
-- INSERT INTO 테이블 이름 (컬럼1, 컬럼2,...) VALUES (값1, 값2,...)
INSERT INTO user_rekey (name, age, address) VALUES ('이기혁', 29, '경기도 성남시 분당구');
INSERT INTO user_rekey (name, age, address) VALUES ('손민식', 33, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('손은아', 28, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('방호진', 29, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('남태영', 29, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('김재영', 29, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('이또식', 25, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('구본중', 27, '경기도 성남시 수진구');
INSERT INTO user_rekey (name, age, address) VALUES ('장난감', 32, '경기도 수원시 영통구');
INSERT INTO user_rekey (name, age, address) VALUES ('하동훈', 21, '서울특별시 마포구');
INSERT INTO user_rekey (name, age, address) VALUES ('유재석', 50, '서울특별시 은평구');


-- update 데이터 수정
-- UPDATE 테이블이름 SET 데이터를 어떻게 수정할 것인지 WHERE 어떤 데이터를 찾아올지;
UPDATE user_rekey SET name='이재성' WHERE id=7;

-- DELETE 데이터 삭제
-- DELETE FROM 테이블이름 WHERE 삭제 조건;
DELETE FROM user_rekey WHERE id=10; -- where 이후 조건에 따른 삭제
DELETE FROM user_rekey; -- 전체 데이터 삭제
-- 이씨인 사람 모두 지우기
DELETE FROM user_rekey WHERE name LIKE '이%';

TRUNCATE TABLE user;

-- SELECT
-- 데이터 조회
SELECT * FROM user_rekey; -- 테이블 전체 컬럼 조회
SELECT name from user_rekey;
SELECT name, age from user_rekey;

-- where을 이용한 조건 추가
SELECT * from user_rekey WHERE age >= 25;
SELECT * from user_rekey WHERE id = 3;
SELECT name from user_rekey WHERE id = 7;
SELECT id, age from user_rekey WHERE name = '하동훈';

-- order by : 데이터 정렬
-- desc : 내림차순
-- asc : 오름차순
SELECT * FROM user_rekey ORDER BY age DESC;
SELECT * FROM user_rekey where id > 6 ORDER BY age ASC;

-- LIKE : 문자열 패턴 조회(where와 함께 쓰임)
-- '서울로 시작하는 주소 찾기'
SELECT * FROM user_rekey WHERE address LIKE '서울%';

-- 이름의 마지막 글자가 '영'인 사람
SELECT * FROM user_rekey WHERE name LIKE '%영'; -- or '__영'
-- 주소가 성남시인 사람
SELECT * FROM user_rekey WHERE address LIKE '%성남시%'; -- or '__영'
SELECT name FROM user_rekey WHERE name LIKE '%영' ORDER BY id DESC;

--LIMIT : 데이터의 개수 제한
SELECT * FROM user_rekey LIMIT 3;
SELECT * FROM user_rekey WHERE address LIKE '경기도%' LIMIT 2;

-- BETWEEN A AND B : A 와 B 의 사이값 조회 (A, B는 포함)
SELECT * FROM user_rekey WHERE age BETWEEN 25 and 30;

-- IN(20,21,22,30) : 리스트의 요소와 일치하면 참 -> 문자열에서도 사용 가능
SELECT * FROM user_rekey WHERE age IN(25,27,29);

-- IS NULL / IS NOT NULL
INSERT INTO user_rekey (name, age) VALUES ('서현승', 28);
SELECT * FROM user_rekey WHERE address IS NULL;
SELECT name, address FROM user_rekey WHERE address IS NOT NULL;

-- 논리연산자 : AND OR NOT
-- AND
-- 주소가 NULL이 아니면서 age가 25보다 큰 전체 속성
SELECT * FROM user_rekey WHERE address IS NOT NULL AND age > 25;
-- SELECT * FROM user_rekey WHERE address IS NOT NULL OR age > 25;

-- 이씨 이면서 나이가 29살인 사람
SELECT * FROM user_rekey WHERE name LIKE '이%' AND age = 29;

-- DISTINCT(중복 튜플 제거)
SELECT DISTINCT age FROM user_rekey

-- GROUP BY & HAVING
show DATABASEs;
use sesac;
show TABLES;
drop table IF EXISTS user;
create TABLE user(
    user_id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구', '야구', '클라이밍', '배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year int NOT NULL
);
desc user;

INSERT INTO user VALUES(NULL, '김판곤', '축구', '남',40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

SELECT * FROM user;

-- 집계함수
SELECT COUNT(specialize) 
FROM user 
WHERE specialize='축구';
-- where 조건에 만족하는 튜플의 개수를 세줌

SELECT SUM(career_year) 
FROM user;
SELECT SUM(career_year) 
FROM user
WHERE specialize = '축구';
SELECT AVG(career_year) 
FROM user
WHERE specialize = '축구';
SELECT MIN(career_year) 
FROM user
WHERE specialize = '축구';
SELECT MAX(career_year) 
FROM user
WHERE specialize = '축구';

-- GROUP BY(같은 그룹끼리 묶어서 확인 가능)
SELECT specialize 
FROM user
GROUP BY specialize;

SELECT specialize, COUNT(*) 
FROM user
GROUP BY specialize;

-- 각 분야의 여성들 숫자 세기
SELECT specialize, COUNT(*) 
FROM user
WHERE gender = '여'
GROUP BY specialize
HAVING COUNT(specialize); -- having에는 GROUP BY로 지정한 값에 관련된 걸 넣어야지만 가능

/*
쿼리 순서
- select > from > where > group by > having > order by > limit
*/







-- 실습 문제
create database practice1 DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
SHOW DATABASES;
use practice1;
CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

ALTER TABLE member DROP age;
ALTER Table member ADD interest VARCHAR(100);

desc member

CREATE Table user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

desc user;
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender LIKE 'M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender LIKE 'M' AND birthday LIKE '197%';
SELECT * FROM user  ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age >=25 AND age <=50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

