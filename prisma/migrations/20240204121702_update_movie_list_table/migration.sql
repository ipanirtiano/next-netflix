/*
  Warnings:

  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WatchList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WatchList" DROP CONSTRAINT "WatchList_movieId_fkey";

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "WatchList";

-- CreateTable
CREATE TABLE "movie_list" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "id_user" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "movie_list_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie_list" ADD CONSTRAINT "movie_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
