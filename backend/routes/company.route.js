import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

//jab bhi company ke details update nahi horahi
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
// router.route("/update/:id").put(isAuthenticated,updateCompany);
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany);


export default router;