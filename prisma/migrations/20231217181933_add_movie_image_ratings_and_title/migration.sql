/*
  Warnings:

  - Added the required column `movie_image` to the `Ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movie_title` to the `Ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ratings` ADD COLUMN `movie_image` VARCHAR(191) NOT NULL,
    ADD COLUMN `movie_title` VARCHAR(191) NOT NULL;
