import express, { Router } from 'express';
import { createUser, deleteUser, getAllUsers } from '../controllers/users';

const router: Router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', createUser);

// Delete user
router.delete('/', deleteUser);

export default router;
