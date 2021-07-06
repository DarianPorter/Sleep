const express = require("express");
const app = express();
const initRoutes = require("./routes")

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

initRoutes(app)