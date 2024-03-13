/*
  Warnings:

  - The `authData` column on the `Authentication` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `uasId` column on the `Identification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `operatorId` column on the `OperatorId` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `operationDescription` column on the `SelfId` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Authentication" DROP COLUMN "authData",
ADD COLUMN     "authData" INTEGER[];

-- AlterTable
ALTER TABLE "Identification" DROP COLUMN "uasId",
ADD COLUMN     "uasId" INTEGER[];

-- AlterTable
ALTER TABLE "OperatorId" DROP COLUMN "operatorId",
ADD COLUMN     "operatorId" INTEGER[];

-- AlterTable
ALTER TABLE "SelfId" DROP COLUMN "operationDescription",
ADD COLUMN     "operationDescription" INTEGER[];
