SELECT dep2.name_of_department AS name_of_department, roles2.id AS role_of_id
FROM department dep2
JOIN employee ON  dep2.id = employee.manager_id
JOIN roles roles2 ON roles2.id = employee.role_id


SELECT emp. FROM employee 
JOIN role ON employee.role_id = role.id
JOIN employee ON employee.manager_id = employee.id
