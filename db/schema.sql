DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;
USE employee;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name_of_department VARCHAR(30)
);


CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id),
    name VARCHAR(30) NOT NULL
);

create table employee (
id INT auto_increment primary key,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int,
foreign key (role_id) references roles(id),
foreign key (manager_id) references employee(id)
);