import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserMigration1661269766703 implements MigrationInterface {
    name = 'createUserMigration1661269766703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schecudles_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "hour" TIMESTAMP NOT NULL DEFAULT now(), "propertyId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_683bc3c3150d90e657e0b8dc81a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schecudles_users_properties" ADD CONSTRAINT "FK_25dd8997b358c2303d025fa8057" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schecudles_users_properties" DROP CONSTRAINT "FK_25dd8997b358c2303d025fa8057"`);
        await queryRunner.query(`DROP TABLE "schecudles_users_properties"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
