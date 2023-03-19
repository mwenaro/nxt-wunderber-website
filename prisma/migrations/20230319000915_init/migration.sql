/*
  Warnings:

  - You are about to drop the column `message` on the `ConactMail` table. All the data in the column will be lost.
  - Added the required column `body` to the `ConactMail` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ConactMail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "repondedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "ConactMail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ConactMail" ("createdAt", "from", "id", "name", "repondedAt", "subject", "to", "userId") SELECT "createdAt", "from", "id", "name", "repondedAt", "subject", "to", "userId" FROM "ConactMail";
DROP TABLE "ConactMail";
ALTER TABLE "new_ConactMail" RENAME TO "ConactMail";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
