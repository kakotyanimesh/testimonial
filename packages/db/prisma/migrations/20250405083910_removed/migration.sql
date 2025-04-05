/*
  Warnings:

  - You are about to drop the column `testimonialdbId` on the `TestimonialFormQuestions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestimonialFormQuestions" DROP CONSTRAINT "TestimonialFormQuestions_testimonialdbId_fkey";

-- DropIndex
DROP INDEX "TestimonialFormQuestions_testimonialdbId_key";

-- AlterTable
ALTER TABLE "TestimonialFormQuestions" DROP COLUMN "testimonialdbId";
