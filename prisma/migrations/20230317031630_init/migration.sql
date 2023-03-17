-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourBooking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "departureDate" TEXT NOT NULL,
    "safariDuration" TEXT,
    "adults" INTEGER NOT NULL,
    "kids" INTEGER DEFAULT 0,
    "Infants" INTEGER DEFAULT 0,
    "paymentStatus" INTEGER DEFAULT 0,
    "userId" TEXT DEFAULT '0784852d-72d8-4cb7-9352-a9a60fd0a19a',
    "specialInterests" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'pending',
    "fee" DECIMAL DEFAULT 0,
    CONSTRAINT "TourBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TourBooking" ("Infants", "adults", "country", "createdAt", "departureDate", "email", "fee", "fullName", "id", "kids", "paymentStatus", "phone", "safariDuration", "specialInterests", "status", "updatedAt", "userId") SELECT "Infants", "adults", "country", "createdAt", "departureDate", "email", "fee", "fullName", "id", "kids", "paymentStatus", "phone", "safariDuration", "specialInterests", "status", "updatedAt", "userId" FROM "TourBooking";
DROP TABLE "TourBooking";
ALTER TABLE "new_TourBooking" RENAME TO "TourBooking";
CREATE TABLE "new_Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" DECIMAL NOT NULL DEFAULT 0,
    "paymentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pendingAmout" DECIMAL DEFAULT 0,
    "tourBookingId" TEXT,
    "userId" TEXT NOT NULL,
    "mode" TEXT DEFAULT 'cash',
    CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_tourBookingId_fkey" FOREIGN KEY ("tourBookingId") REFERENCES "TourBooking" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Payment" ("amount", "id", "mode", "paymentDate", "pendingAmout", "tourBookingId", "userId") SELECT "amount", "id", "mode", "paymentDate", "pendingAmout", "tourBookingId", "userId" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
