/*
  Warnings:

  - You are about to alter the column `timeAccuracy` on the `Location` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - Changed the type of `authTimestamp` on the `Authentication` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastSeen` on the `Connection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `firstSeen` on the `Connection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `msgDelta` on the `Connection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `locationTimestamp` on the `Location` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `systemTimestamp` on the `System` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Authentication" DROP COLUMN "authTimestamp",
ADD COLUMN     "authTimestamp" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "lastSeen",
ADD COLUMN     "lastSeen" BIGINT NOT NULL,
DROP COLUMN "firstSeen",
ADD COLUMN     "firstSeen" BIGINT NOT NULL,
DROP COLUMN "msgDelta",
ADD COLUMN     "msgDelta" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "locationTimestamp",
ADD COLUMN     "locationTimestamp" BIGINT NOT NULL,
ALTER COLUMN "timeAccuracy" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "System" DROP COLUMN "systemTimestamp",
ADD COLUMN     "systemTimestamp" BIGINT NOT NULL;
