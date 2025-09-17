console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // Express ilovasini yaratish
const http = require("http");

//1: Kirish code
app.use(express.static("public")); // "public" folderi ochiq degani clientlar uchun
app.use(express.json()); // JSON formatdagi ma'lumotlarni object holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); // form request yani traditional requestlarni qabul qilib oladi, express qabul qilishi uchun kerak


//2: Session code

// Views code
app.set("views", "./views"); // views papkasini ko'rsatib qo'yamiz
app.set("view engine", "ejs"); // view engine ni ejs qilib qo'yamiz

//4: Routing code
app.get("/", function (req, res) {
    res.end("<h1>HELLO WORLD by JohaKoha</h1>");
});

app.get("/gift", function (req, res) {
    res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 5000;
server.listen(PORT, function () {
    console.log(`Server is running successfully on port: ${PORT}`);
});

