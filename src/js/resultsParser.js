const fs = require('fs') 
const csv = require('fast-csv')
var output = []

function combineFiles(resultName) {

    const file1 = 'headers.csv'
	const file2 = resultName
	const fileData1 = []
	const fileData2 = []

	const file1Promise = new Promise((resolve) => {
  csv
    .parseFile(file1, { headers: false })
    .on('data', function (data) {
      fileData1.push(data)
    })
    .on('end', function () {
      console.log('done')
      resolve()
    })
})

const file2Promise = new Promise((resolve) => {
  csv
    .parseFile(file2, { headers: false })
    .on('data', function (data) {
      fileData2.push(data)
    })
    .on('end', function () {
      console.log('done')
      resolve()
    })
})

Promise.all([
  file1Promise,
  file2Promise
])
  .then(() => {
    const fileData3 = fileData1.concat(fileData2)
    const csvStream = csv.format({ headers: true })
    const writableStream = fs.createWriteStream('outputfile.csv')

    writableStream.on('finish', function () {
	  console.log('DONE!')
	  toArray('outputfile.csv')
    })

    csvStream.pipe(writableStream)
    fileData3.forEach((data) => {
      csvStream.write(data)
    })
    csvStream.end()
  })

  function toArray(outputCSV) {

	function fillArray (element,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,t98,t99,t100,t101,t102,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,t116,t117,t118,t119,t120,t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133,t134,t135,t136,t137,t138,t139,t140,t141,t142,t143,t144,t145,t146,t147,t148,t149,t150,t151,t152,t153,t154,t155,t156,t157,t158,t159,t160,t161,t162,t163,t164,t165,t166,t167,t168,t169,t170,t171,t172,t173,t174,t175,t176,t177,t178,t179,t180,t181,t182,t183,t184,t185,t186,t187,t188,t189,t190,t191,t192,t193,t194,t195,t196,t197,t198,t199,t200,t201,t202,t203,t204,t205,t206,t207,t208,t209,t210,t211,t212,t213,t214,t215,t216,t217,t218,t219,t220,t221,t222,t223,t224,t225,t226,t227,t228,t229,t230,t231,t232,t233,t234,t235,t236,t237,t238,t239,t240)
	{
		let data = [element, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82, t83, t84, t85, t86, t87, t88, t89, t90, t91, t92, t93, t94, t95, t96, t97, t98, t99, t100, t101, t102, t103, t104, t105, t106, t107, t108, t109, t110, t111, t112, t113, t114, t115, t116, t117, t118, t119, t120, t121, t122, t123, t124, t125, t126, t127, t128, t129, t130, t131, t132, t133, t134, t135, t136, t137, t138, t139, t140, t141, t142, t143, t144, t145, t146, t147, t148, t149, t150, t151, t152, t153, t154, t155, t156, t157, t158, t159, t160, t161, t162, t163, t164, t165, t166, t167, t168, t169, t170, t171, t172, t173, t174, t175, t176, t177, t178, t179, t180, t181, t182, t183, t184, t185, t186, t187, t188, t189, t190, t191, t192, t193, t194, t195, t196, t197, t198, t199, t200, t201, t202, t203, t204, t205, t206, t207, t208, t209, t210, t211, t212, t213, t214, t215, t216, t217, t218, t219, t220, t221, t222, t223, t224, t225, t226, t227, t228, t229, t230, t231, t232, t233, t234, t235, t236, t237, t238, t239, t240]
		output.push(data)
	}


	new Promise((resolve) => {
		csv
			.parseFile(outputCSV, {headers: true})
			.on('data', function(data) {
				fillArray(data.element.substring(1), data.time1.substring(1), data.time2.substring(1), data.time3.substring(1), data.time4.substring(1), data.time5.substring(1), data.time6.substring(1), data.time7.substring(1), data.time8.substring(1), data.time9.substring(1), data.time10.substring(1), data.time11.substring(1), data.time12.substring(1), data.time13.substring(1), data.time14.substring(1), data.time15.substring(1), data.time16.substring(1), data.time17.substring(1), data.time18.substring(1), data.time19.substring(1), data.time20.substring(1), data.time21.substring(1), data.time22.substring(1), data.time23.substring(1), data.time24.substring(1), data.time25.substring(1), data.time26.substring(1), data.time27.substring(1), data.time28.substring(1), data.time29.substring(1), data.time30.substring(1), data.time31.substring(1), data.time32.substring(1), data.time33.substring(1), data.time34.substring(1), data.time35.substring(1), data.time36.substring(1), data.time37.substring(1), data.time38.substring(1), data.time39.substring(1), data.time40.substring(1), data.time41.substring(1), data.time42.substring(1), data.time43.substring(1), data.time44.substring(1), data.time45.substring(1), data.time46.substring(1), data.time47.substring(1), data.time48.substring(1), data.time49.substring(1), data.time50.substring(1), data.time51.substring(1), data.time52.substring(1), data.time53.substring(1), data.time54.substring(1), data.time55.substring(1), data.time56.substring(1), data.time57.substring(1), data.time58.substring(1), data.time59.substring(1), data.time60.substring(1), data.time61.substring(1), data.time62.substring(1), data.time63.substring(1), data.time64.substring(1), data.time65.substring(1), data.time66.substring(1), data.time67.substring(1), data.time68.substring(1), data.time69.substring(1), data.time70.substring(1), data.time71.substring(1), data.time72.substring(1), data.time73.substring(1), data.time74.substring(1), data.time75.substring(1), data.time76.substring(1), data.time77.substring(1), data.time78.substring(1), data.time79.substring(1), data.time80.substring(1), data.time81.substring(1), data.time82.substring(1), data.time83.substring(1), data.time84.substring(1), data.time85.substring(1), data.time86.substring(1), data.time87.substring(1), data.time88.substring(1), data.time89.substring(1), data.time90.substring(1), data.time91.substring(1), data.time92.substring(1), data.time93.substring(1), data.time94.substring(1), data.time95.substring(1), data.time96.substring(1), data.time97.substring(1), data.time98.substring(1), data.time99.substring(1), data.time100.substring(1), data.time101.substring(1), data.time102.substring(1), data.time103.substring(1), data.time104.substring(1), data.time105.substring(1), data.time106.substring(1), data.time107.substring(1), data.time108.substring(1), data.time109.substring(1), data.time110.substring(1), data.time111.substring(1), data.time112.substring(1), data.time113.substring(1), data.time114.substring(1), data.time115.substring(1), data.time116.substring(1), data.time117.substring(1), data.time118.substring(1), data.time119.substring(1), data.time120.substring(1), data.time121.substring(1), data.time122.substring(1), data.time123.substring(1), data.time124.substring(1), data.time125.substring(1), data.time126.substring(1), data.time127.substring(1), data.time128.substring(1), data.time129.substring(1), data.time130.substring(1), data.time131.substring(1), data.time132.substring(1), data.time133.substring(1), data.time134.substring(1), data.time135.substring(1), data.time136.substring(1), data.time137.substring(1), data.time138.substring(1), data.time139.substring(1), data.time140.substring(1), data.time141.substring(1), data.time142.substring(1), data.time143.substring(1), data.time144.substring(1), data.time145.substring(1), data.time146.substring(1), data.time147.substring(1), data.time148.substring(1), data.time149.substring(1), data.time150.substring(1), data.time151.substring(1), data.time152.substring(1), data.time153.substring(1), data.time154.substring(1), data.time155.substring(1), data.time156.substring(1), data.time157.substring(1), data.time158.substring(1), data.time159.substring(1), data.time160.substring(1), data.time161.substring(1), data.time162.substring(1), data.time163.substring(1), data.time164.substring(1), data.time165.substring(1), data.time166.substring(1), data.time167.substring(1), data.time168.substring(1), data.time169.substring(1), data.time170.substring(1), data.time171.substring(1), data.time172.substring(1), data.time173.substring(1), data.time174.substring(1), data.time175.substring(1), data.time176.substring(1), data.time177.substring(1), data.time178.substring(1), data.time179.substring(1), data.time180.substring(1), data.time181.substring(1), data.time182.substring(1), data.time183.substring(1), data.time184.substring(1), data.time185.substring(1), data.time186.substring(1), data.time187.substring(1), data.time188.substring(1), data.time189.substring(1), data.time190.substring(1), data.time191.substring(1), data.time192.substring(1), data.time193.substring(1), data.time194.substring(1), data.time195.substring(1), data.time196.substring(1), data.time197.substring(1), data.time198.substring(1), data.time199.substring(1), data.time200.substring(1), data.time201.substring(1), data.time202.substring(1), data.time203.substring(1), data.time204.substring(1), data.time205.substring(1), data.time206.substring(1), data.time207.substring(1), data.time208.substring(1), data.time209.substring(1), data.time210.substring(1), data.time211.substring(1), data.time212.substring(1), data.time213.substring(1), data.time214.substring(1), data.time215.substring(1), data.time216.substring(1), data.time217.substring(1), data.time218.substring(1), data.time219.substring(1), data.time220.substring(1), data.time221.substring(1), data.time222.substring(1), data.time223.substring(1), data.time224.substring(1), data.time225.substring(1), data.time226.substring(1), data.time227.substring(1), data.time228.substring(1), data.time229.substring(1), data.time230.substring(1), data.time231.substring(1), data.time232.substring(1), data.time233.substring(1), data.time234.substring(1), data.time235.substring(1), data.time236.substring(1), data.time237.substring(1), data.time238.substring(1), data.time239.substring(1), data.time240.substring(1))
			})
			.on('end', function() {
				console.log(output[0][1])
				//functions that need output[] to be called here
				resolve()
			})
		})
}

combineFiles('CART-TIBIA-LAT_LE.csv')