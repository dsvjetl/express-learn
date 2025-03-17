import express from 'express';
import { createPost, getAllPosts } from '../controllers/posts';

const router = express.Router();

// Get all users
router.get('/', getAllPosts);

// Create a post
router.post('/', createPost);

export default router;
