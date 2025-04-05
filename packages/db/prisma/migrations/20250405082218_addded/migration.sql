/*
  Warnings:

  - A unique constraint covering the columns `[testimonialdbId]` on the table `TestimonialFormQuestions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testimonialdbId` to the `TestimonialFormQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestimonialFormQuestions" ADD COLUMN     "testimonialdbId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TestimonialFormQuestions_testimonialdbId_key" ON "TestimonialFormQuestions"("testimonialdbId");

-- AddForeignKey
ALTER TABLE "TestimonialFormQuestions" ADD CONSTRAINT "TestimonialFormQuestions_testimonialdbId_fkey" FOREIGN KEY ("testimonialdbId") REFERENCES "TestimonialInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
