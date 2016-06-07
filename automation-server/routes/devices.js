var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
      {
            "id": "0cc175b9c0f1b6a831c399e269772661",
            "name": "Mittari 1",
            "description": "Kuvaus mittari ykköselle",
            "tags": ["Kellari", "Kosteus"]
      },
      {
            "id": "0cc175b9c0f1b6a831c399e269772622",
            "name": "Mittari 2",
            "description": "Kuvaus mittari kakkoselle",
            "tags": ["Kellari", "Lämpötila"]
      },
      {
            "id": "92eb5ffee6ae2fec3ad71c777531578f",
            "name": "Mittari 3",
            "description": "Kuvaus mittari kakkoselle",
            "tags": ["Olohuone", "Valo"]
      },
      {
            "id": "4a8a08f09d37b73795649038408b5f33",
            "name": "Mittari 4",
            "description": "Kuvaus mittari kolmoselle",
            "tags": ["Pihasauna", "Lämpötila"]
      },
      {
            "id": "8277e0910d750195b448797616e091ad",
            "name": "Mittari 5",
            "description": "Kuvaus mittari neloselle",
            "tags": ["Talo", "Virrankulutus"]
      }
	]);
});

module.exports = router;
