const db = require('./db');
const {Campus} = require('./db/models/');
const Student = require('./db/models/student');

const campuses = [{
  name: 'Quirinus',
//  image: '/images/quirinus.jpg'
}, {
  name: 'Minerva',
//  image: '/images/minerva.jpg'
}, {
  name: 'Vesta',
//  image: '/images/vesta.jpg'
}, {
  name: 'Carmenta',
//  image: '/images/carmenta.jpg'
}];

const students = [{
  name: 'Ourea',
  email: 'ouera@gmail.com',
  campusId: '1'
}, {
  name: 'Artemis',
  email: 'artemis@gmail.com',
  campusId: '2'
}, {
  name: 'Athena',
  email: 'athena@gmail.com',
  campusId: '3'
}, {
  name: 'Dionysus',
  email: 'dionysus@gmail.com',
  campusId: '4'
}, {
  name: 'Hades',
  email: 'hades@gmail.com',
  campusId: '1'
}, {
  name: 'Hephaestus',
  email: 'hephaestus@gmail.com',
  campusId: '2'
}, {
  name: 'Hera',
  email: 'hera@gmail.com',
  campusId: '3'
}, {
  name: 'Hermes',
  email: 'hermes@gmail.com',
  campusId: '4'
}, {
  name: 'Hestia',
  email: 'hestia@gmail.com',
  campusId: '1'
}, {
  name: 'Metis',
  email: 'metis@gmail.com',
  campusId: '2'
}, {
  name: 'Aion',
  email: 'aion@gmail.com',
  campusId: '3'
}, {
  name: 'Hemera',
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
