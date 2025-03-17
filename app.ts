import 'reflect-metadata'; // Must be the first import
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { AppDataSource } from './src/config/database';

const app = express();

// Initialize database connection before setting up routes
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(error => {
    console.error('Error during Data Source initialization:', error);
    process.exit(1);
  });

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Import routes after database initialization
import indexRouter from './src/routes/index';
import usersRouter from './src/routes/users';
import postsRouter from './src/routes/posts';

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

export default app;
