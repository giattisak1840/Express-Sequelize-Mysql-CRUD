import express from "express";
const router = express.Router();

import { findAllUsers } from "../controllers/user-controllers"; 

router.get('/', findAllUsers);

export default router;