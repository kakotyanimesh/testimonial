/*
  Warnings:

  - Added the required column `formDescripton` to the `TestimonialFormQuestions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formTitle` to the `TestimonialFormQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestimonialFormQuestions" ADD COLUMN     "formDescripton" TEXT NOT NULL,
ADD COLUMN     "formTitle" TEXT NOT NULL;
