/*
  Warnings:

  - You are about to drop the column `userId` on the `movie_list` table. All the data in the column will be lost.
  - Added the required column `userEmailId` to the `movie_list` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movie_list" DROP CONSTRAINT "movie_list_userId_fkey";

-- AlterTable
ALTER TABLE "movie_list" DROP COLUMN "userId",
ADD COLUMN     "userEmailId" TEXT NOT NULL;
