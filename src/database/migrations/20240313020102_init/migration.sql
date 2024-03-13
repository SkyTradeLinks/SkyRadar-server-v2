/*
  Warnings:

  - The `uasId` column on the `Identification` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Identification" DROP COLUMN "uasId",
ADD COLUMN     "uasId" BYTEA[];
