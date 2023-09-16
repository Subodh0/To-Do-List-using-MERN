import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, ()=>{ console.log(`The server is running at port no ${PORT}`)})