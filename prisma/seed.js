const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const axolotl = await prisma.axolotl.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				lang: 'javascript',
				missionCommander: 'Node',
        enrollments: 1
      },
    });

    const axolotl1 = await prisma.axolotl.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa 1',
				lang: 'javascript',
				missionCommander: 'Node',
        enrollments: 1
      },
    });

    const axolotl2 = await prisma.axolotl.upsert({
      where: { name: 'Woopa2' },
      update: {},
      create: {
        name: 'Woopa 2',
				lang: 'java',
				missionCommander: 'Swing',
        enrollments: 2
      },
    });

    const axolotl3 = await prisma.axolotl.upsert({
      where: { name: 'Woopa3' },
      update: {},
      create: {
        name: 'Woopa 3',
				lang: 'java',
				missionCommander: 'Swing',
        enrollments: 2
      },
    });
    
    console.log('Create 3 axolotls');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();