import express from "express";
import {
    registerUser,
    logIN,
    createUser,
    readAll,
    readONE,
    updOne,
    delOne
} from "../controller/userController.js";
import auth from "../middleware/authmiddleware.js";
const router = express.Router();
router.post("/",registerUser);
router.post("/lg",logIN);
router.post("/creat",auth,createUser);
router.get("/tak",auth,readAll);
router.get("/:id",auth,readONE);
router.put("/:id",auth,updOne);
router.delete("/:id",auth,delOne);
export default router;