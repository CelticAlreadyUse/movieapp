/*
  Warnings:

  - A unique constraint covering the columns `[user_email,movie_id]` on the table `Ratings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Ratings_user_email_ratings_key` ON `ratings`;

-- CreateIndex
CREATE UNIQUE INDEX `Ratings_user_email_movie_id_key` ON `Ratings`(`user_email`, `movie_id`);
