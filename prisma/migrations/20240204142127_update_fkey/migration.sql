/*
  Warnings:

  - Made the column `userId` on table `movie_list` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "movie_list" DROP CONSTRAINT "movie_list_userId_fkey";

-- AlterTable
ALTER TABLE "movie_list" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "movie_list" ADD CONSTRAINT "movie_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
