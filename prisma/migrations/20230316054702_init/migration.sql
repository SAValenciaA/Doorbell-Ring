-- CreateTable
CREATE TABLE "Answer" (
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "challenges" TEXT NOT NULL,
    "solutions" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "importance" TEXT NOT NULL,
    "feature" TEXT NOT NULL,
    "necessity" INTEGER NOT NULL,
    "usefull" TEXT NOT NULL,
    "alternatives" TEXT NOT NULL,
    "advices" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "innovation" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("contact")
);

-- CreateTable
CREATE TABLE "contacts" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("email")
);
