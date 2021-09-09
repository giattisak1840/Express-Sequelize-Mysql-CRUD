import express from "express";
const router = express.Router();

import { findAllUsers, insertUser, updateUser, deleteUser } from "../controllers/user-controllers"; 

router.get('/', findAllUsers);

router.post('/', insertUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;