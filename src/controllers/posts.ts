import { AppDataSource } from '../config/database';
import { Post } from '../entities/post.entity';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/user.entity';

const postRepository = AppDataSource.getRepository(Post);

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postRepository.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, content, user_id } = req.body;

    const userExists = await AppDataSource.getRepository(User).findOneBy({ id: user_id });
    if (!userExists) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const newPost = postRepository.create({
      title,
      content,
      user: { id: user_id },
    });

    const savedPost = await postRepository.save(newPost);

    res.status(201).json(`Post with id ${savedPost.id} created successfully`);
  } catch (error) {
    next(error);
  }
};

export { getAllPosts, createPost };
