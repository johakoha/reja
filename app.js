console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const res = require("express/lib/response");

//MongoDB call
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    }
    else {
        user = JSON.parse(data);
    }
});

//1: Kirish Code
app.use(express.static("public"));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


//2: Session


//3: Viewsga boqliq kodlar
app.set("views", "views");
app.set("view engine", "ejs"); 


//4: Routing code
app.post("/create-item", (req, res) => {

    //TODO: code with db here
    console.log("user Entered/create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
    })
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
})


app.get("/", function (req, res) {
    console.log("user Entered/");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("Something went wrong");
        }
        else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;


