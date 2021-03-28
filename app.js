const path = require("path");

const express = require("express");
const bodyParser = require("body-parser"); //bodyParser() constructor is deprecated so just use express.urlencoded

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.use(
	"/css",
	express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);

app.use((request, response) => {
	response.status("404").send("Page Not Found!");
});

app.listen(3000);
