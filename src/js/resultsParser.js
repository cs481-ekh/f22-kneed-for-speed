var fs = require('fs'); 

//var headers = 'element,time1,time2,time3,time4,time5,time6,time7,time8,time9,time10,time11,time12,time13,time14,time15,time16,time17,time18,time19,time20,time21,time22,time23,time24,time25,time26,time27,time28,time29,time30,time31,time32,time33,time34,time35,time36,time37,time38,time39,time40,time41,time42,time43,time44,time45,time46,time47,time48,time49,time50,time51,time52,time53,time54,time55,time56,time57,time58,time59,time60,time61,time62,time63,time64,time65,time66,time67,time68,time69,time70,time71,time72,time73,time74,time75,time76,time77,time78,time79,time80,time81,time82,time83,time84,time85,time86,time87,time88,time89,time90,time91,time92,time93,time94,time95,time96,time97,time98,time99,time100,time101,time102,time103,time104,time105,time106,time107,time108,time109,time110,time111,time112,time113,time114,time115,time116,time117,time118,time119,time120,time121,time122,time123,time124,time125,time126,time127,time128,time129,time130,time131,time132,time133,time134,time135,time136,time137,time138,time139,time140,time141,time142,time143,time144,time145,time146,time147,time148,time149,time150,time151,time152,time153,time154,time155,time156,time157,time158,time159,time160,time161,time162,time163,time164,time165,time166,time167,time168,time169,time170,time171,time172,time173,time174,time175,time176,time177,time178,time179,time180,time181,time182,time183,time184,time185,time186,time187,time188,time189,time190,time191,time192,time193,time194,time195,time196,time197,time198,time199,time200,time201,time202,time203,time204,time205,time206,time207,time208,time209,time210,time211,time212,time213,time214,time215,time216,time217,time218,time219,time220,time221,time222,time223,time224,time225,time226,time227,time228,time229,time230,time231,time232,time233,time234,time235,time236,time237,time238,time239,time240\n';

const csv = require("fast-csv");

// csv.write(readerStreamResults, {headers: ['element', 'time1', 'time2', 'time3', 'time4', 'time5', 'time6', 'time7', 'time8', 'time9', 'time10', 'time11', 'time12', 'time13', 'time14', 'time15', 'time16', 'time17', 'time18', 'time19', 'time20', 'time21', 'time22', 'time23', 'time24', 'time25', 'time26', 'time27', 'time28', 'time29', 'time30', 'time31', 'time32', 'time33', 'time34', 'time35', 'time36', 'time37', 'time38', 'time39', 'time40', 'time41', 'time42', 'time43', 'time44', 'time45', 'time46', 'time47', 'time48', 'time49', 'time50', 'time51', 'time52', 'time53', 'time54', 'time55', 'time56', 'time57', 'time58', 'time59', 'time60', 'time61', 'time62', 'time63', 'time64', 'time65', 'time66', 'time67', 'time68', 'time69', 'time70', 'time71', 'time72', 'time73', 'time74', 'time75', 'time76', 'time77', 'time78', 'time79', 'time80', 'time81', 'time82', 'time83', 'time84', 'time85', 'time86', 'time87', 'time88', 'time89', 'time90', 'time91', 'time92', 'time93', 'time94', 'time95', 'time96', 'time97', 'time98', 'time99', 'time100', 'time101', 'time102', 'time103', 'time104', 'time105', 'time106', 'time107', 'time108', 'time109', 'time110', 'time111', 'time112', 'time113', 'time114', 'time115', 'time116', 'time117', 'time118', 'time119', 'time120', 'time121', 'time122', 'time123', 'time124', 'time125', 'time126', 'time127', 'time128', 'time129', 'time130', 'time131', 'time132', 'time133', 'time134', 'time135', 'time136', 'time137', 'time138', 'time139', 'time140', 'time141', 'time142', 'time143', 'time144', 'time145', 'time146', 'time147', 'time148', 'time149', 'time150', 'time151', 'time152', 'time153', 'time154', 'time155', 'time156', 'time157', 'time158', 'time159', 'time160', 'time161', 'time162', 'time163', 'time164', 'time165', 'time166', 'time167', 'time168', 'time169', 'time170', 'time171', 'time172', 'time173', 'time174', 'time175', 'time176', 'time177', 'time178', 'time179', 'time180', 'time181', 'time182', 'time183', 'time184', 'time185', 'time186', 'time187', 'time188', 'time189', 'time190', 'time191', 'time192', 'time193', 'time194', 'time195', 'time196', 'time197', 'time198', 'time199', 'time200', 'time201', 'time202', 'time203', 'time204', 'time205', 'time206', 'time207', 'time208', 'time209', 'time210', 'time211', 'time212', 'time213', 'time214', 'time215', 'time216', 'time217', 'time218', 'time219', 'time220', 'time221', 'time222', 'time223', 'time224', 'time225', 'time226', 'time227', 'time228', 'time229', 'time230', 'time231', 'time232', 'time233', 'time234', 'time235', 'time236', 'time237', 'time238', 'time239', 'time240']} ).pipe(ws);

const file1 = 'headers.csv';
const file2 = 'CART-TIBIA-LAT_LE.csv';
const stream = fs.createReadStream(file1);
const stream2 = fs.createReadStream(file2);
const fileData1 = [];
const fileData2 = [];
const fileData3 = [];


const file1Promise = new Promise((resolve) => {
  csv
      .parseFile(file1, {headers: false})
      .on('data', function(data) {
        fileData1.push(data);
      })
      .on('end', function() {
		console.log('done');
        resolve();
      });
});


const file2Promise = new Promise((resolve) => {

  csv
      .parseFile(file2, {headers: false})
      .on('data', function(data) {
        fileData2.push(data);
      })
      .on('end', function() {
        console.log('done');
        resolve();
      });
});




Promise.all([
  file1Promise,
  file2Promise,
])
    .then(() => {
      const fileData3 = fileData1.concat(fileData2);//fileData1.concat(fileData2);
      //console.log(fileData);

      const csvStream = csv.format({headers: true});
      const writableStream = fs.createWriteStream('outputfile.csv');

      writableStream.on('finish', function() {
        console.log('DONE!');
      });

      csvStream.pipe(writableStream);
      fileData3.forEach((data) => {
        csvStream.write(data);
      });
      csvStream.end();
    });

