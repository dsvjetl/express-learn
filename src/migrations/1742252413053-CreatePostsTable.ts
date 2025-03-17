import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePostsTable1742252413053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
          isNullable: false,
        },
        {
          name: 'user_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'title',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'content',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }
}
