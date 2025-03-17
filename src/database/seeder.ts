import { faker } from '@faker-js/faker';
import { AppDataSource } from '../config/database';
import { createUsers } from './seeders/createUsers'; // adjust the path according to your project structure

async function seed() {
  try {
    // Initialize the database connection
    await AppDataSource.initialize();
    console.log('Database connection initialized');

    // Initialize dummy data
    await createUsers(faker);

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    // Close the connection
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
}

// Run the seeder
seed()
  .then(() => {
    console.log('Seeding completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error during seeding:', error);
    process.exit(1);
  });
