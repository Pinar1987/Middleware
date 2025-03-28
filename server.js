import express from "express";
const app = express();

const PORT = 3000;

const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
};

const authenticateUser = (req, res, next) => {
    const userAuthenticated = true; // Change to false to simulate unauthorized access
    if (!userAuthenticated) {
        return res.status(403).send("You are not allowed to make this request");
    }
    next();
};

app.use(requestLogger);

const router = express.Router();

router.use((req, res, next) => {
    console.log("Router-level middleware for /orders");
    next();
});

router.get("/orders", authenticateUser, (req, res) => {
    res.send("Here are your orders.");
});

app.use("/api", router);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});