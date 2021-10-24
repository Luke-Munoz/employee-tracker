INSERT INTO department
(id, name_of_department)
VALUES
(1, 'sales'),
(2, 'finance'),
(3, 'legal'),
(4, 'engineering');

INSERT INTO roles
(id, salary, department_id, name)
VALUES 
(1, 4000, 2, 'sales manager'),
(2, 2000, 3, 'lawyer'),
(3, 1500, 4, 'Head engineer'),
(4, 5000, 1, 'Finacial advisor');

insert into employee(first_name, last_name, role_id, manager_id)
values
("matt", "tree", 1, null),
("sarah", "hart", 1, 1),
("kim", "wall", 2, null),
("chris", "wunderli", 2, 3),
("cory", "waller", 4, null),
("connor", "harris", 3, null);