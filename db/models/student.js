'use strict';
var Sequelize = require('sequelize');
var db = require('../index');

const images = [
    'http://media.npr.org/assets/img/2012/03/29/p.179___ja_holson_sq-3d64e19c9957a6a8e12809f95ec3fff372aadb68-s900-c85.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/c3/29/67/c329679d21b90e81eed2045206500187.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/7b/bf/1e/7bbf1e346c4d0f0d1e0a94fa9727976b.jpg',
    'https://i.pinimg.com/736x/9c/39/92/9c3992a97c22306d12c386f2f085e638--old-hollywood-hollywood-stars.jpg',
    'https://s-media-cache-ak0.pinimg.com/736x/dd/6b/9a/dd6b9a877c0aacf1516a29eb88eca16d--old-hollywood-classic-hollywood.jpg',
    'https://i.pinimg.com/736x/da/a4/66/daa466145a5c60cbc80a9f942fe14a4c--old-hollywood-classic-hollywood.jpg',
    'https://media.gq.com/photos/5582f0c33655c24c6c952250/master/w_704,h_964,c_limit/how-to-2010-03-leading-men-lm-woody-allen.jpg',
    'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.113.1080.1080/15099441_588765081321871_2647893977033867264_n.jpg',
    'https://media.gq.com/photos/5582f0cc3655c24c6c95226c/master/w_704,h_964,c_limit/how-to-2010-03-leading-men-lm-douglas-fairbanks-jr.jpg',
    'http://esq.h-cdn.co/assets/cm/15/06/54d1c5b4d135b_-_esq-10-gregory-peck-best-dressed-movie-stars-2013-mdn.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/89/d7/41/89d741ce997b8038981eb62501c6e730.jpg',
    'https://harderslive.files.wordpress.com/2011/08/young-steve-mcqueen.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/82/c7/f3/82c7f3a18587c3ac342e3340aa9fb115.png',
    'http://x17online.com/media/images/2011/11/nataliewood230headshot.jpg'
]

const randomImage = () => images[Math.floor(Math.random() * images.length)];

const returnImage = (images) => {
    return randomImage();
}

module.exports = db.define('student', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          isEmail: true
      }
  },
    image: {
        type: Sequelize.STRING,
        defaultValue: function() {
            return returnImage(images);
        }
    }
});