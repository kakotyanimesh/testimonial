/*
  Warnings:

  - A unique constraint covering the columns `[spaceId,userId]` on the table `ApiKey` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ApiKey_spaceId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_spaceId_userId_key" ON "ApiKey"("spaceId", "userId");
