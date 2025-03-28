import express from "express";
const app = express();

const PORT = 3000;

const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
};



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});