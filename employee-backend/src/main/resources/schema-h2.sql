CREATE TABLE EMPLOYEE
        (
        id BIGINT auto_increment,
        first_name VARCHAR2(50) NOT NULL,
        last_name VARCHAR2(50) NOT NULL,
        gender VARCHAR2(20) NOT NULL,
        dob DATE NOT NULL,
        department VARCHAR2(50) NOT NULL,
        PRIMARY KEY(id)
        );