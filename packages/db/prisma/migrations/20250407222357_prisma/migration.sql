-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spaces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "Spaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestimonialInformation" (
    "id" SERIAL NOT NULL,
    "adminId" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "customername" TEXT NOT NULL,
    "review" TEXT,
    "customeremail" TEXT NOT NULL,
    "videoUrl" TEXT,
    "customerimage" TEXT,
    "stars" INTEGER NOT NULL,
    "approaved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerCompany" TEXT,

    CONSTRAINT "TestimonialInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestimonialFormQuestions" (
    "id" SERIAL NOT NULL,
    "formTitle" TEXT NOT NULL,
    "formDescripton" TEXT NOT NULL,
    "questionOne" TEXT NOT NULL,
    "questionTwo" TEXT NOT NULL,
    "questionThree" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "uniqueLink" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "TestimonialFormQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TestimonialFormQuestions_uniqueLink_key" ON "TestimonialFormQuestions"("uniqueLink");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_spaceId_userId_key" ON "ApiKey"("spaceId", "userId");

-- AddForeignKey
ALTER TABLE "Spaces" ADD CONSTRAINT "Spaces_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialInformation" ADD CONSTRAINT "TestimonialInformation_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialInformation" ADD CONSTRAINT "TestimonialInformation_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Spaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialFormQuestions" ADD CONSTRAINT "TestimonialFormQuestions_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Spaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialFormQuestions" ADD CONSTRAINT "TestimonialFormQuestions_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Spaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
