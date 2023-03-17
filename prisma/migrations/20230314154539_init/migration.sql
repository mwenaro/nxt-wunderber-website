/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TourBooking" ADD COLUMN "fee" DECIMAL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "code" INTEGER;
ALTER TABLE "User" ADD COLUMN "password" TEXT;

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" DECIMAL NOT NULL DEFAULT 0,
    "paymentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pendingAmout" DECIMAL DEFAULT 0,
    "tourBookingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mode" TEXT DEFAULT 'cash',
    CONSTRAINT "Payment_tourBookingId_fkey" FOREIGN KEY ("tourBookingId") REFERENCES "TourBooking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");
