-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "profileViews" INTEGER NOT NULL DEFAULT 0,
    "role" "Role" NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
