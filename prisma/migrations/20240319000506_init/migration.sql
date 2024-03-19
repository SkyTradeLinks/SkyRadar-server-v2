-- CreateTable
CREATE TABLE "device" (
    "id" TEXT NOT NULL,
    "remoteData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "device_pkey" PRIMARY KEY ("id")
);
