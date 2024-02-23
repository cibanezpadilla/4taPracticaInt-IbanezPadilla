import { Router } from "express";

import {  findUserById, findUserByEmail, createUser, roleSwapper, saveUserDocuments} from "../controllers/users.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.get(
  "/:idUser", findUserById);


router.post("/", async (req, res) => {
  const user = req.body
  const createdUser = await createUser(user)
  res.json({ createdUser })
})


router.post(
  "/:id/documents",
  upload.fields([
    { name: "dni", maxCount: 1 },
    { name: "address", maxCount: 1 },
    { name: "bank", maxCount: 1 },
  ]),
  saveUserDocuments
);


router.put('/premium/:uid', roleSwapper)

export default router;