-- CreateTable
CREATE TABLE "Axolotl" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Axolotl_name_key" ON "Axolotl"("name");
