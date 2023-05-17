const User = require('./User');
const Dog = require('./Dog');
const Adoption = require('./Adoption')





//Dog Associations
Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

Dog.hasMany(Adoption, {
  foreignKey: 'dog_id'
});

Dog.hasMany(Vaccination, {
  foreignKey: 'dog_id'
});


//User associations
User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Adoption, {
  foreignKey: 'user_id'
});


//Adoption associations
Adoption.belongsTo(Dog, {
  foreignKey: 'dog_id'
});

Adoption.belongsTo(User, {
  foreignKey: 'user_id'
});


//Vaccination associations
Vaccination.belongsTo(Dog, {
  foreignKey: 'dog_id'
});





module.exports = { User, Dog, Adoption, Vaccination };
