/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `TestimonialInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TestimonialInformation_adminId_key" ON "TestimonialInformation"("adminId");
