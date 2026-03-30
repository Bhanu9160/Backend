import express from "express";
import connDB from "./config/db.js";
import router from "./Routers/userRouter.js";
// import registerUser from "../controller/userController.js";
// import registerUser from "../controller/userController.js";

const app = express();
app.use(express.json());
connDB();
// app.post("/api/users",logIN)
// app.post("/api/users",registerUser)
app.use("/api/users",router)
app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000");
})