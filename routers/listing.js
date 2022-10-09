const express = require('express');
const path = require('path');
const testimonials = require('./../models/testimonials')
const router = express.Router();
router.use(express.static(path.join(__dirname, './../public')));

router.get('/', function (req, res) {
  const properties = [{

        ComponyName: 'Sakhile Properties',
        Address: 'Jewel City, Johanessburg.'

      },
      {

        ComponyName: 'Themba Properties',
        Address: 'Jewel City, Johanessburg.'

      }
    ];

    const listing = [{
        type: 'For rent',
        Building: 'Elevate',
        text: 'A nice Bachelor',
        price: 'R 3 069.00 pm',
        size: '5000 SqM',
        bedrooms: '1 Bedroom',
        bath: '1 Bath'

    },
    {
      type: 'For rent',
      Building: 'Elevate',
      text: 'A nice Bachelor',
      price: 'R 3 069.00 pm',
      size: '5000 SqM',
      bedrooms: '1 Bedroom',
      bath: '1 Bath'

  }
  ];

  const testimonials = [{

    name: 'Sweetness Mabena',
    occupation: 'Medical Doctor',
    text_input: 'It was safe using easy rentals. I mean, I even like the guy, Sakhile would you mind giving me his number?'

  },
  {

    name: 'Thabo',
    occupation: 'Machanic',
    text_input: 'Eazie Rentals helped me out when i was fighting robbers and they took me to my apartment afterwards'

  },
  {

    name: 'Solly bombe',
    occupation: 'Hacker',
    text_input: 'Hi, Youve been hacked'

  }

];

    res.render('listing.ejs', {properties: properties, listing: listing, testimonials: testimonials});
  });

 

  
module.exports = router;