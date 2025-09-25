console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // Express ilovasini yaratish
const fs = require("fs");


// Read user.json
let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        user = JSON.parse(data);
    }
});


// MongoDB connect
const db = require("../server").db; // Fixed path and usage


//1: Kirish code
app.use(express.static("public"));  // 'public' folderi ochiq degani clientlar uchun
app.use(express.json()); // JSON formatdagi ma'lumotlarni object holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); // form request yani traditional requestlarni qabul qilib oladi, express qabul qilishi uchun kerak


//2: Session code

// Views code
app.set("views", "./views"); // views papkasini ko'rsatib qo'yamiz
app.set("view engine", "ejs"); // view engine ni ejs qilib qo'yamiz

//4: Routing code

app.post("/create-item", (req, res) => {
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.send("successfully added"); // Fixed: use res.send instead of res.redirect for message
        }
    }); // <-- Fixed: closed insertOne callback
}); // <-- Fixed: closed app.post

app.get("/author", (req, res) => {
    if (!user) {
        return res.status(503).send("User data is loading, please try again later.");
    }
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, items) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", { items: data });
        }
    });
});


module.exports = app;
