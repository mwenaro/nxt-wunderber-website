-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourBooking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "departureDate" TEXT NOT NULL,
    "safariType" TEXT NOT NULL,
    "safariDuration" TEXT NOT NULL,
    "adults" INTEGER NOT NULL,
    "kids" INTEGER DEFAULT 0,
    "Infants" INTEGER DEFAULT 0,
    "paymentStatus" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL DEFAULT '0784852d-72d8-4cb7-9352-a9a60fd0a19a',
    "specialInterests" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',
    CONSTRAINT "TourBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TourBooking" ("Infants", "adults", "country", "createdAt", "departureDate", "email", "fullName", "id", "kids", "paymentStatus", "phone", "safariDuration", "safariType", "specialInterests", "status", "updatedAt", "userId") SELECT "Infants", "adults", "country", "createdAt", "departureDate", "email", "fullName", "id", "kids", "paymentStatus", "phone", "safariDuration", "safariType", "specialInterests", "status", "updatedAt", "userId" FROM "TourBooking";
DROP TABLE "TourBooking";
ALTER TABLE "new_TourBooking" RENAME TO "TourBooking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
