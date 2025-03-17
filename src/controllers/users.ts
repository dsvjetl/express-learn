import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { User } from '../entities/user.entity';

const userRepository = AppDataSource.getRepository(User);

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, age } = req.body;
    const user = userRepository.create({ firstName, lastName, age });
    await userRepository.save(user);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const user = await userRepository.findOneBy({ id });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    await userRepository.remove(user);

    res.status(200).json({ message: `User with id ${id} deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, createUser, deleteUser };
