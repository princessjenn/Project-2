const sequelize = require('../config/connection');
const { User, Dog, Vaccination, SpayNeuter } = require('../models');

const userData = require('./userData.json');
const dogData = require('./dogData.json');
const vaccineData = require('./vaccinationData.json');
const spayNeuterData = require('./spayNeuterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  for (const dog of dogData) {
    await Dog.create({
      ...dog,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  const vaccines = await Vaccination.bulkCreate(vaccineData, {
    individualHooks: true,
    returning: true,
  });

  const spayAndNeuter = await SpayNeuter.bulkCreate(spayNeuterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
