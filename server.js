const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/axolotls', async (req, res) => {
const allAxolotls =  await prisma.axolotl.findMany({});
res.json(allAxolotls);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.get('/axolotls/:id', async (req, res) => {
    const id = req.params.id;
    const axolotl = await prisma.axolotl.findUnique({where: {id: parseInt(id)}});
    res.json(axolotl);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.post('/axolotls', async (req, res) => {
    const axolotl = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollements
    };
    const message = 'Explorer creado.';
    await prisma.axolotl.create({data: axolotl});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })
    return res.json({message: "Actualizado correctamente"});
});

app.put('/axolotls/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.axolotl.update({
        where: {
            id: id
        },
        data: {
            missionCommander: req.body.missionCommander
        }
    })
    return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

app.delete('/axolotls/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.axolotl``.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
