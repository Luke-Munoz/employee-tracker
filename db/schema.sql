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


CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  manager_id INTEGER NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id) 
);



