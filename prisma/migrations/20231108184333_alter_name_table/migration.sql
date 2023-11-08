/*
  Warnings:

  - You are about to drop the `attendance_confirmation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "attendance_confirmation";

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);
