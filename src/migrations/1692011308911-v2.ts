import {MigrationInterface, QueryRunner} from "typeorm";

export class v21692011308911 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "channel" ALTER COLUMN "defaultCurrencyCode" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ALTER COLUMN "stockLocationId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ALTER COLUMN "currencyCode" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "quantity" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "listPriceIncludesTax" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "adjustments" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "taxLines" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "listPrice" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "listPrice" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "taxLines" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "adjustments" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "listPriceIncludesTax" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ALTER COLUMN "quantity" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ALTER COLUMN "currencyCode" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ALTER COLUMN "stockLocationId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ALTER COLUMN "defaultCurrencyCode" SET NOT NULL`, undefined);
   }

}
