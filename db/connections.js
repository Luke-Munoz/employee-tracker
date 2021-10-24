const mysql = require('mysql2')

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'lukmun40',
        database: 'employee'
    },
    console.log(`Connected to the inventory_db database.`)
);

module.exports = connection