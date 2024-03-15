/*
  Warnings:

  - You are about to drop the column `authenticationId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `connectionId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `id1ShadowId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `id2ShadowId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `identification1Id` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `identification2Id` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `macAddress` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `operatorIdId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `selfIdId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `systemId` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the `Authentication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Connection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Identification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OperatorId` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SelfId` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `System` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `remotedata` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_authenticationId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_connectionId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_id1ShadowId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_id2ShadowId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_identification1Id_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_identification2Id_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_operatorIdId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_selfIdId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_systemId_fkey";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "authenticationId",
DROP COLUMN "connectionId",
DROP COLUMN "id1ShadowId",
DROP COLUMN "id2ShadowId",
DROP COLUMN "identification1Id",
DROP COLUMN "identification2Id",
DROP COLUMN "locationId",
DROP COLUMN "macAddress",
DROP COLUMN "operatorIdId",
DROP COLUMN "selfIdId",
DROP COLUMN "systemId",
ADD COLUMN     "remotedata" JSONB NOT NULL;

-- DropTable
DROP TABLE "Authentication";

-- DropTable
DROP TABLE "Connection";

-- DropTable
DROP TABLE "Identification";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "OperatorId";

-- DropTable
DROP TABLE "SelfId";

-- DropTable
DROP TABLE "System";
