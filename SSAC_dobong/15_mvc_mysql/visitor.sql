show DATABASES

create DATABASE visitors CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;
use visitors;

CREATE Table visitor(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);
desc visitor;
INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '어느새 힙합은 안멋져');
SELECT * FROM visitor;

############[DCL]###############

-- ------새로운 user 만들기1
CREATE USER 'user'@'%' IDENTIFIED BY 'ctywo9631!';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면!


-- ------새로운 user만들기2
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY'1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용