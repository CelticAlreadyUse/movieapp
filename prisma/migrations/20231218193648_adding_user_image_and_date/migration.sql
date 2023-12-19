/*
  Warnings:

  - Added the required column `date` to the `Ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_image` to the `Ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ratings` ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_image` VARCHAR(191) NOT NULL;
