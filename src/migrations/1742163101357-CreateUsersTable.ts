import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1234567890123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "first_name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "last_name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "age",
                    type: "integer",
                    isUnique: false,
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                    isNullable: false
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                    isNullable: false
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the table in the down migration to revert the changes
        await queryRunner.dropTable("users");
    }
}