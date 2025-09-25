/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(10,2)`.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categoryId_fkey`;

-- DropIndex
DROP INDEX `categories_name_key` ON `categories`;

-- DropIndex
DROP INDEX `products_categoryId_fkey` ON `products`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryId`,
    MODIFY `price` DECIMAL(10, 2) NOT NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
