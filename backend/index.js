import cors from "cors";
import dotenv from 'dotenv';
import express from "express";

// import { connection } from "./database/connection.js";

// dotenv.config({path: './.env'});


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


// connection();


//start the Express server
app.listen(PORT, () => {
	console.log(`App listening to port: ${PORT}`);
});


app.get("/", (req, res) => {
	res.send("Quick kwewe")
})
