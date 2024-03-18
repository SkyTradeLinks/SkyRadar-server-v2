-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "remotedata" JSONB NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);
