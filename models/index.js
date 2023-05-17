const User = require('./User');
const Dog = require('./Dog');
const Vaccination = require('./Vaccination');
const SpayNeuter = require('./SpayNeuter');

//Dog Associations
Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

Dog.hasMany(Vaccination, {
  foreignKey: 'dog_id'
});

Dog.hasOne(SpayNeuter, {
  foreignKey: 'dog_id'
});


//User associations
User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


//Vaccination associations
Vaccination.belongsTo(Dog, {
  foreignKey: 'dog_id'
});


//SpayNeuter associations
SpayNeuter.belongsTo(Dog, {
  foreignKey: 'dog_id'
});



module.exports = { User, Dog, Vaccination, SpayNeuter };
