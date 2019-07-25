const Sequelize = require('sequelize');
const models = require('./model');

const sequelize = new Sequelize('NodePracticse', 'sa', 'Saraswati@1985', {
    host: 'NITTUJULI',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    }
});

const employee = models(sequelize, Sequelize);

employee.findOne({ where: {id: 2} })
.then(emp => {
 console.log(emp);
});


sequelize.authenticate().then(() => {
    employee.sync().then(() => {
        console.log('New table created');
    }).finally(() => {
        sequelize.close();
    });    
})
.catch((err) => {
    console.log("Unable to connect database" + err);
});