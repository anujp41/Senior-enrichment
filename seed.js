const db = require('./db');
const {Campus} = require('./db/models/');
const {Student} = require('./db/models');

const campuses = [{
  name: 'Quirinus Brainery'
}, {
  name: 'Minerva Preparatory'
}, {
  name: 'Vesta Lyceum'
}, {
  name: 'Carmenta Finishing'
}, {
  name: 'Magrathea Academy'
}];

const students = [{
  name: 'Ourea Popplewell',
  email: 'ouera@gmail.com',
  campusId: '1'
}, {
  name: 'Artemis Montjoy',
  email: 'artemis@gmail.com',
  campusId: '2'
}, {
  name: 'Athena Scrivener',
  email: 'athena@gmail.com',
  campusId: '3'
}, {
  name: 'Dionysus Bickford-Smith',
  email: 'dionysus@gmail.com',
  campusId: '4'
}, {
  name: 'Hades Gruger',
  email: 'hades@gmail.com',
  campusId: '1'
}, {
  name: 'Hephaestus Portendorfer',
  email: 'hephaestus@gmail.com',
  campusId: '2'
}, {
  name: 'Hera Febland',
  email: 'hera@gmail.com',
  campusId: '3'
}, {
  name: 'Hermes Luckinbill',
  email: 'hermes@gmail.com',
  campusId: '4'
}, {
  name: 'Hestia Trickelbank',
  email: 'hestia@gmail.com',
  campusId: '1'
}, {
  name: 'Metis Altringham',
  email: 'metis@gmail.com',
  campusId: '2'
}, {
  name: 'Aion Slaymaker',
  email: 'aion@gmail.com',
  campusId: '3'
}, {
  name: 'Hemera Honeybun',
  email: 'hemera@gmail.com',
  campusId: '4'
}];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();