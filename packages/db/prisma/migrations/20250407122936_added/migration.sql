/*
  Warnings:

  - Added the required column `adminId` to the `TestimonialFormQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestimonialFormQuestions" ADD COLUMN     "adminId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TestimonialFormQuestions" ADD CONSTRAINT "TestimonialFormQuestions_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
