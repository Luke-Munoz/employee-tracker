const inquirer = require('inquirer');
const mysql = require('mysql2');
const util = require('util')


const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'lukmun40',
        database: 'employee'
    },
    console.log(`Connected to the inventory_db database.`)
);
connection.connect((err) => {
    if (err) throw err
})
connection.query = util.promisify(connection.query)
const actions = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'selections',
            message: "What would you like to do?",
            choices: [{
                    name: "Delete from Employee's",
                    value: "deleteEmployee",
                },
                {
                    name: "Update employee manager",
                    value: "updateManager",
                },
                {
                    name: "view employee by manager",
                    value: "viewByMan",
                },
                {
                    name: "view employees by department",
                    value: "viewDep",
                },
                {
                    name: "View total budget of the company",
                    value: "viewBudget",
                },
                {
                    name: "view all departments",
                    value: "viewAllDep"
                },
                {
                    name: 'view all roles',
                    value: 'viewRoles'
                },
                {
                    name: 'view all employees',
                    value: 'viewEmp'
                }
            ]

        }])

    .then((answers) => {
        console.log(answers);
        switch (answers.selections) {
            case "deleteEmployee":
                console.log('im here')
                deleteEmployee();
                break;
            case "updateManager":
                updateManager()
                break;
            case "viewAllDep":
                viewAllDep();
                break;
            case "viewRoles":
                viewRoles();
                break;
            case "viewEmp":
                viewEmp();
                break;

        }
    })
}

const deleteEmployee = async() => {


    let dataEmployee
    try {
        const query = "SELECT employee.id, employee.first_name, manager.first_name AS manager, roles.name, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN employee manager ON employee.manager_id = manager.id;"
        const dataEmployee = await connection.query(query)
        console.table(dataEmployee)
    } catch (error) {
        console.log(error);
    }
    try {
        const { employeeId } = await inquirer
            .prompt([{
                type: 'input',
                name: 'employeeId',
                message: 'Enter id to delete'
            }])
        console.log(employeeId)
        const query = "DELETE FROM employee WHERE id = ?"
        const deleteEmployee = await connection.query(query, employeeId)
        console.log(deleteEmployee)
        actions()
    } catch (error) {
        console.log(error);
    }
}


const updateManager = async() => {

    let dataEmployee
    try {
        const query = "SELECT employee.id, employee.first_name, manager.first_name AS manager, roles.name, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN employee manager ON employee.manager_id = manager.id;"
        const dataEmployee = await connection.query(query)
        console.table(dataEmployee)
    } catch (error) {
        console.log(error);
    }
    try {
        const { employeeId } = await inquirer
            .prompt([{
                type: 'input',
                name: 'employeeId',
                message: 'Enter id to delete'
            }])
        const query = "UPDATE FROM employee WHERE id = ?"
        const deleteEmployee = await connection.query(query, employeeId)
        console.log(deleteEmployee)
        actions()
    } catch (error) {
        console.log(error);
    }
}



const viewAllDep = async() => {


    let view
    try {
        const query = "SELECT department.id, department.name_of_department FROM department;"
        const view = await connection.query(query)
        console.log('im here again')
        console.table(view)
    } catch (error) {
        console.log(error);
    }
    try {
        const { departmentName } = await inquirer
            .prompt([{
                type: 'input',
                name: 'departmentName',
                message: 'Enter a name to update'
            }])
        console.log(departmentName)
        const query = "INSERT INTO department SET name_of_department = ?"
        const viewAllDep = await connection.query(query, departmentName)
        console.log(viewAllDep)
        actions()
    } catch (error) {
        console.log(error);
    }
}


const viewRoles = async() => {


    let viewRole
    try {
        const query = "SELECT roles.id, roles.salary, roles.department_id, roles.name FROM roles;"
        const viewRole = await connection.query(query)
        console.table(viewRole)
    } catch (error) {
        console.log(error);
    }
};

const viewEmp = async() => {


    let viewEmp
    try {
        const query = "SELECT employee.id, employee.first_name, manager.first_name AS manager, roles.name, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN employee manager ON employee.manager_id = manager.id;"
        const viewEmp = await connection.query(query)
        console.table(viewEmp)
    } catch (error) {
        console.log(error);
    }
};




actions()