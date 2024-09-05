const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"estagiarmax"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * from usuario WHERE email = ? AND senha = ?";
   
    db.query(sql, [req.body.email,  req.body.senha], (err, data) => {
        if(err) return res.json("O login falhou");
        if(data.length > 0) {
            return res.json("login bem sucedido")
        } else {
            return res.json("Sem registro")
        }
    })
})

app.listen(8081, () => {
    console.log("Conexão Funcionando!");
})