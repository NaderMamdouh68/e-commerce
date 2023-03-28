import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const db = createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'test',
});

app.post('/signup', (req, res) => {
    const name     = req.body.username;
    const password = req.body.password;
    const email    = req.body.email;

    db.query("INSERT INTO users (name, password, email) VALUES (?,?,?)",
     [name, password, email], 
    (err, result) => {
        if (result) {
            res.send(result);
        } else {
            res.send("Values Inserted");
        }
    });
});

app.post('/login', (req, res) => {
    const username = req.body.name;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE name = ? AND password = ?", [username, password], 
    (err, result) => {
        
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination"});
            }
        
    });
});




app.listen(5000, () => {
    console.log("Server is running on port 5000");
});