const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://johakoha:YC78aVHI4GEZF1oP@cluster0.69rusre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("ERROR on connection MongoDB:", err);
    } else {
      console.log("MongoDB connection succeed");
      db = client.db("reja"); // <-- Add this line to select your database
      module.exports.db = db; // <-- Export the db object
      const app = require("./views/app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

