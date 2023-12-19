/*
  Warnings:

  - You are about to drop the column `ratings` on the `comment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Comment_movie_id_ratings_key` ON `comment`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `ratings`;

-- CreateTable
CREATE TABLE `Ratings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `ratings` INTEGER NOT NULL,

    UNIQUE INDEX `Ratings_user_email_ratings_key`(`user_email`, `ratings`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
