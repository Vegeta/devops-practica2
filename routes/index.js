var express = require('express');
const axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	let hoy = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const dateTimeFormat = new Intl.DateTimeFormat("es-EC", options);

	let data = {
		'title': 'AUTOMATIZACIÓN DE LOS PROCESOS DE SOFTWARE',
		'fecha' : dateTimeFormat.format(hoy)
	};
	res.render('index', data);
});

module.exports = router;
