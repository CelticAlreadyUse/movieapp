/*
  Warnings:

  - A unique constraint covering the columns `[movie_id,ratings]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `ratings` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Comment_movie_id_ratings_key` ON `Comment`(`movie_id`, `ratings`);
