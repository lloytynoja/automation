var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
      {
            "deviceId": "0cc175b9c0f1b6a831c399e269772661",
            "value": {
              "value": 80,
              "unit": "%"
            }
      },
      {
            "deviceId": "0cc175b9c0f1b6a831c399e269772622",
            "value": {
              "value": 15,
              "unit": "°C"
            }
      },
      {
            "deviceId": "92eb5ffee6ae2fec3ad71c777531578f",
            "value": {
              "value": 100,
              "unit": "lux"
            }
      },
      {
            "deviceId": "4a8a08f09d37b73795649038408b5f33",
            "value": {
              "value": 65,
              "unit": "°C"
            }
      },
      {
            "deviceId": "8277e0910d750195b448797616e091ad",
            "value": {
              "value": 10,
              "unit": "A"
            }
      }
  ]);
});

module.exports = router;
