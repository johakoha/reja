console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // Express ilovasini yaratish
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    }else {
        user = JSON.parse(data);
    }
});

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
    res.json({ test: "success" });
});

app.get(`/author`,(req,res)=> {
    res.render("author", {user: user});
});

app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server is running successfully on port: ${PORT}`);
});

