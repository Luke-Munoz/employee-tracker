const inquirer = require('inquirer');
const mysql = require('mysql2');



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
                    value: "viewBudget"
                }
            ]

        }])

    .then((answers) => {
        switch (answers) {
            case "deleteEmployee":
                deleteEmployee();
                break;
            case "updateManager":
                updateManager()
                break;

        }
    })
}

const deleteEmployee = () => {
    const query = "SELECT * FROM employee"
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err
        console.table(result);
        inquirer
            .prompt([{
                type: 'input',
                name: 'employeeId',
                message: 'Enter id to delete'
            }])
            .then((idEmp) => {
                const delQuery = "DELETE FROM employee WHERE id = ?"
                connection.query(delQuery, (idEmp.employeeId), (err, result) => {
                    if (err) throw err
                    console.table(result);
                    actions()
                })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}


const updateManager = () => {
    const query = "SELECT * FROM employee"
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err
        console.table(result)
        inquirer
            .prompt([{
                type: 'input',
                name: 'updateManager',
                message: 'Enter id to update'
            }])
            .then((updateManId) => {
                const updateQuery = "UPDATE FROM employee WHERE id = ?"
                connection.query(updateQuery, (updateManId.updateManager), (err, result) => {
                    if (err) throw err
                    console.table(result);
                    actions()
                })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}






actions()