import Mysql from "mysql";
import util from "util";


const db = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e-commerce",
    port: 3306,
});

const query = util.promisify(db.query).bind(db);


db.connect((err) => {
    if (err) {
        console.error("Error connecting to DB: " + err.stack);
        return;
    }
    console.log("Connected to DB ");
});


export default  query
