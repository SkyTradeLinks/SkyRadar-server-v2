-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL,
    "rssi" INTEGER NOT NULL,
    "transportType" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    "firstSeen" TIMESTAMP(3) NOT NULL,
    "msgDelta" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Identification" (
    "id" SERIAL NOT NULL,
    "uaType" TEXT NOT NULL,
    "idType" TEXT NOT NULL,
    "uasId" TEXT[],

    CONSTRAINT "Identification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "heightType" TEXT NOT NULL,
    "direction" DOUBLE PRECISION NOT NULL,
    "speedHorizontal" DOUBLE PRECISION NOT NULL,
    "speedVertical" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitudePressure" DOUBLE PRECISION NOT NULL,
    "altitudeGeodetic" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "horizontalAccuracy" TEXT NOT NULL,
    "verticalAccuracy" TEXT NOT NULL,
    "baroAccuracy" TEXT NOT NULL,
    "speedAccuracy" TEXT NOT NULL,
    "locationTimestamp" TIMESTAMP(3) NOT NULL,
    "timeAccuracy" DOUBLE PRECISION NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Authentication" (
    "id" TEXT NOT NULL,
    "authType" TEXT NOT NULL,
    "authDataPage" INTEGER NOT NULL,
    "authLastPageIndex" INTEGER NOT NULL,
    "authLength" INTEGER NOT NULL,
    "authTimestamp" TIMESTAMP(3) NOT NULL,
    "authData" TEXT[],

    CONSTRAINT "Authentication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelfId" (
    "id" TEXT NOT NULL,
    "descriptionType" TEXT NOT NULL,
    "operationDescription" TEXT[],

    CONSTRAINT "SelfId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "System" (
    "id" TEXT NOT NULL,
    "operatorLocationType" TEXT NOT NULL,
    "classificationType" TEXT NOT NULL,
    "operatorLatitude" DOUBLE PRECISION NOT NULL,
    "operatorLongitude" DOUBLE PRECISION NOT NULL,
    "areaCount" INTEGER NOT NULL,
    "areaRadius" INTEGER NOT NULL,
    "areaCeiling" DOUBLE PRECISION NOT NULL,
    "areaFloor" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "classValue" TEXT NOT NULL,
    "operatorAltitudeGeo" DOUBLE PRECISION NOT NULL,
    "systemTimestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "System_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperatorId" (
    "id" TEXT NOT NULL,
    "operatorIdType" INTEGER NOT NULL,
    "operatorId" TEXT[],

    CONSTRAINT "OperatorId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "macAddress" BIGINT NOT NULL,
    "identification1Id" INTEGER NOT NULL,
    "identification2Id" INTEGER NOT NULL,
    "id1ShadowId" INTEGER NOT NULL,
    "id2ShadowId" INTEGER NOT NULL,
    "connectionId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "authenticationId" TEXT NOT NULL,
    "selfIdId" TEXT NOT NULL,
    "systemId" TEXT NOT NULL,
    "operatorIdId" TEXT NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "Connection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_identification1Id_fkey" FOREIGN KEY ("identification1Id") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_identification2Id_fkey" FOREIGN KEY ("identification2Id") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_id1ShadowId_fkey" FOREIGN KEY ("id1ShadowId") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_id2ShadowId_fkey" FOREIGN KEY ("id2ShadowId") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_authenticationId_fkey" FOREIGN KEY ("authenticationId") REFERENCES "Authentication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_selfIdId_fkey" FOREIGN KEY ("selfIdId") REFERENCES "SelfId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_operatorIdId_fkey" FOREIGN KEY ("operatorIdId") REFERENCES "OperatorId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
