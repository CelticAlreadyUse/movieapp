/*
  Warnings:

  - Added the required column `user_name` to the `Ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ratings` ADD COLUMN `user_name` VARCHAR(191) NOT NULL;
