const express = require('express');
const app = express();
const port=5000;
const connectDB = require("./connectDB")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use('/user',require("./routes/userRoutes"))
app.use('/posts',require("./routes/postRoutes"))

connectDB();
app.listen(port,()=>console.log("running in port"+port));
