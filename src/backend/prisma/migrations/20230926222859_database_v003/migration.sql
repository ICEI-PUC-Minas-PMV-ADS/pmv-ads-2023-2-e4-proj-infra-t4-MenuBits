/*
  Warnings:

  - You are about to drop the `_MenusToUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MenusToUsers" DROP CONSTRAINT "_MenusToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_MenusToUsers" DROP CONSTRAINT "_MenusToUsers_B_fkey";

-- DropTable
DROP TABLE "_MenusToUsers";

-- CreateTable
CREATE TABLE "Users_Menus" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "Users_Menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items_Menus" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "Items_Menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users_Menus" ADD CONSTRAINT "Users_Menus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users_Menus" ADD CONSTRAINT "Users_Menus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items_Menus" ADD CONSTRAINT "Items_Menus_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items_Menus" ADD CONSTRAINT "Items_Menus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
