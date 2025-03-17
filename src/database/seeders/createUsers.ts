import { AppDataSource } from '../../config/database';
import { User } from '../../entities/user.entity';
import { Faker } from '@faker-js/faker';

const userRepository = AppDataSource.getRepository(User);

const createUsers = async (faker: Faker) => {
  // Create sample users
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = new User();
    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.age = faker.number.int({ min: 18, max: 65 });
    users.push(user);
  }

  // Save users to database
  await userRepository.save(users);
  console.log(`Created ${users.length} users`);
};

export { createUsers };
