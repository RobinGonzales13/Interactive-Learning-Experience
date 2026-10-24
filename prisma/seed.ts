import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { UserRole } from "../generated/prisma/enums";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured in .env");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const developmentUsers = [
  {
    email: "admin@talentlms.test",
    name: "Development Admin",
    role: UserRole.ADMIN,
  },
  {
    email: "alex.learner@talentlms.test",
    name: "Alex Morgan",
    role: UserRole.EMPLOYEE,
  },
  {
    email: "jordan.learner@talentlms.test",
    name: "Jordan Lee",
    role: UserRole.EMPLOYEE,
  },
];

async function main() {
  for (const user of developmentUsers) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: { name: user.name, role: user.role },
      create: user,
    });
  }

  console.log(`Seeded ${developmentUsers.length} development users.`);
}

main()
  .catch((error: unknown) => {
    console.error("Failed to seed development users:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
