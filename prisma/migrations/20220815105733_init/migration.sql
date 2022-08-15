-- CreateTable
CREATE TABLE `Film` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `sinopsis` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NULL,
    `direktur` VARCHAR(191) NULL,
    `produser` VARCHAR(191) NULL,
    `negara` VARCHAR(191) NULL,

    UNIQUE INDEX `Film_sinopsis_key`(`sinopsis`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
