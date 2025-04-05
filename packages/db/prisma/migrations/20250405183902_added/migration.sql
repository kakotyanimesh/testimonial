/*
  Warnings:

  - A unique constraint covering the columns `[uniqueLink]` on the table `TestimonialFormQuestions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uniqueLink` to the `TestimonialFormQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestimonialFormQuestions" ADD COLUMN     "uniqueLink" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TestimonialFormQuestions_uniqueLink_key" ON "TestimonialFormQuestions"("uniqueLink");
