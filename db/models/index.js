'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

const Student = require('./student');

const Sequelize = require('sequelize');
const db = require('../index.js');

const images = [
    'https://at-cdn-s01.audiotool.com/2014/10/07/documents/snQg2cmavieQBfu0nyx9MBK9x8UIYa/0/cover256x256-33ccebcc51cc402ba4fa293e457d23aa.jpg',
    'https://at-cdn-s01.audiotool.com/2014/03/01/documents/the_sad_universe/1/cover256x256-8f9f108de72f497785b63a99b9f84972.jpg',
    'https://www.universetoday.com/wp-content/uploads/2010/02/MayallsPIA10385.jpg',
    'https://pbs.twimg.com/profile_images/647432503247003648/NotTsI8W.jpg',
    'https://is2-ssl.mzstatic.com/image/thumb/Purple127/v4/9b/25/0a/9b250a79-0c70-016e-e165-b4ff5b263287/source/256x256bb.jpg',
    'http://www.wujacongress2017.org/wp-content/uploads/emerging.jpg',
    'https://beyondtm.files.wordpress.com/2014/01/universe.jpg',
    'http://2.bp.blogspot.com/_96EfIM01h70/TU00ARY1NvI/AAAAAAAABCQ/vCSEzBK7wCY/s1600/nebula.jpg'
]

const randomImage = () => images[Math.floor(Math.random() * images.length)];

const returnImage = (images) => {
    return randomImage();
}

const Campus = db.define('campus', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  image: {
      type: Sequelize.STRING,
      defaultValue: function() {
          return returnImage(images);
      }
  }
});

Campus.hasMany(Student, {
    onDelete: 'cascade',
    hooks: true
});

Student.belongsTo(Campus);

module.exports = {
    Campus,
    Student
}