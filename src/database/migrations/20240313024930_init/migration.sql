/*
  Warnings:

  - Changed the type of `authTimestamp` on the `Authentication` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastSeen` on the `Connection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `firstSeen` on the `Connection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `locationTimestamp` on the `Location` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `systemTimestamp` on the `System` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Authentication" DROP COLUMN "authTimestamp",
ADD COLUMN     "authTimestamp" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "lastSeen",
ADD COLUMN     "lastSeen" TIMESTAMP(3) NOT NULL,
DROP COLUMN "firstSeen",
ADD COLUMN     "firstSeen" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "locationTimestamp",
ADD COLUMN     "locationTimestamp" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "System" DROP COLUMN "systemTimestamp",
ADD COLUMN     "systemTimestamp" TIMESTAMP(3) NOT NULL;
