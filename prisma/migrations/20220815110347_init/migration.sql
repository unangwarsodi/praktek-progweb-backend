-- DropIndex
DROP INDEX `Film_sinopsis_key` ON `film`;

-- AlterTable
ALTER TABLE `film` MODIFY `sinopsis` VARCHAR(191) NULL;
