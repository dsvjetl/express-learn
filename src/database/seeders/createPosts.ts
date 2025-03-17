import { AppDataSource } from '../../config/database';
import { Faker } from '@faker-js/faker';
import { Post } from '../../entities/post.entity';

const userRepository = AppDataSource.getRepository(Post);

const createPosts = async (faker: Faker) => {
  // Create sample users
  const posts = [];
  for (let i = 0; i < 10; i++) {
    const post = new Post();
    post.title = faker.lorem.word({ length: 1 });
    post.content = faker.lorem.text();
    posts.push(post);
  }

  // Save users to database
  await userRepository.save(posts);
  console.log(`Created ${posts.length} posts`);
};

export { createPosts };
