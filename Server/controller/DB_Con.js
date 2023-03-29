import Mysql from "mysql";

const db = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    port: 3306,
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to DB: " + err.stack);
        return;
    }
    console.log("Connected to DB ");
});


export default  db
