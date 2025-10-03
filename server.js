
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionSting = "mongodb+srv://johakoha:YC78aVHI4GEZF1oP@cluster0.schmgpk.mongodb.net/reja"

mongodb.connect(connectionSting, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4006;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT} http://localhost:${PORT}`)
        });
    }
})

