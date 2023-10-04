/*
  Warnings:

  - You are about to drop the `Bookmarks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `restaurantId` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_userId_fkey";

-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "restaurantId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Bookmarks";

-- CreateTable
CREATE TABLE "_MenusToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MenusToUsers_AB_unique" ON "_MenusToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_MenusToUsers_B_index" ON "_MenusToUsers"("B");

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenusToUsers" ADD CONSTRAINT "_MenusToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Menus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenusToUsers" ADD CONSTRAINT "_MenusToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
