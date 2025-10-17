// index.js
require('dotenv').config();
var app = require('./controllers/appExpress');

const port = process.env.PORT || 3000;

const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");


// API routes
app.use("/blog", blogRoutes);
app.use("/userDetails", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
