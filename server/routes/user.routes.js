import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router()
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/favorites', UserController.saveFavoritePizza)
router.get('/get/user/:id', UserController.getLoggedInUser)
router.get('/favorites/:userId', UserController.getFavorites)
router.post('/deleteFavorite', UserController.deleteFavorite)
export default router;