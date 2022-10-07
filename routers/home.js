const express = require('express');
const path = require('path');
const testimonials = require('./../models/testimonials')
const router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));

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
    res.render('index.ejs', {properties: properties, listing: listing});
  });

 

  
module.exports = router;