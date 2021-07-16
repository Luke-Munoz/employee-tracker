USE employee;

INSERT INTO department(id, name_of_department)
VALUES
(1, sales),
(2, finance),
(3, legal),
(4, engineering);

INSERT INTO roles (id, salary, department_id, name)
VALUES 
(1, 4000, 2, 'sales manager'),
(2, 2000, 3, 'lawyer'),
(3, 1500, 4, 'Head engineer'),
(4, 5000, 1 'Finacial advisor');


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (5, 'Ronald', 'Firbank', 1, 2),
  (6,'Virginia', 'Woolf', 2, 2),
  (7,'Piers', 'Gaveston', 3, 2),
  (8,'Charles', 'LeRoi', 4, 2),
  (9,'Katherine', 'Mansfield',5, 2),
  (10,'Dora', 'Carrington', 6, 2);
  
