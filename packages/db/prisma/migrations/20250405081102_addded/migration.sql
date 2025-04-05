-- CreateTable
CREATE TABLE "TestimonialFormQuestions" (
    "id" SERIAL NOT NULL,
    "questionOne" TEXT NOT NULL,
    "questionTwo" TEXT NOT NULL,
    "questionThree" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,

    CONSTRAINT "TestimonialFormQuestions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestimonialFormQuestions" ADD CONSTRAINT "TestimonialFormQuestions_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Spaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
