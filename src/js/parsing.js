var fs = require('fs'); 
const { parse } = require('csv-parse');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});

fs.createReadStream('../../data/CART-TIBIA-MED_S.csv').pipe(parser);
