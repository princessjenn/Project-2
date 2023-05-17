const sequelize = require('../config/connection');
const { User, Dog, Vaccination, SpayNeuter } = require('../models');

const userData = require('./userData.json');
const dogData = require('./dogData.json');
const Vaccination = require('./vaccinationData.json');
const SpayNeuter = require('./spayNeuterData.json');

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

  process.exit(0);
};

seedDatabase();
