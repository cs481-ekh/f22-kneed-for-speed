var fs = require('fs'); 
const { parse } = require('csv-parse');
var output = [];

function fillArray (element,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,t98,t99,t100,t101,t102,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,t116,t117,t118,t119,t120,t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133,t134,t135,t136,t137,t138,t139,t140,t141,t142,t143,t144,t145,t146,t147,t148,t149,t150,t151,t152,t153,t154,t155,t156,t157,t158,t159,t160,t161,t162,t163,t164,t165,t166,t167,t168,t169,t170,t171,t172,t173,t174,t175,t176,t177,t178,t179,t180,t181,t182,t183,t184,t185,t186,t187,t188,t189,t190,t191,t192,t193,t194,t195,t196,t197,t198,t199,t200,t201,t202,t203,t204,t205,t206,t207,t208,t209,t210,t211,t212,t213,t214,t215,t216,t217,t218,t219,t220,t221,t222,t223,t224,t225,t226,t227,t228,t229,t230,t231,t232,t233,t234,t235,t236,t237,t238,t239,t240)
{

	var data = {
		"element" : element,
		"time-1" : t1,
		"time-2" : t2,
		"time-3" : t3,
		"time-4" : t4,
		"time-5" : t5,
		"time-6" : t6,
		"time-7" : t7,
		"time-8" : t8,
		"time-9" : t9,
		"time-10" : t10,
		"time-11" : t11,
		"time-12" : t12,
		"time-13" : t13,
		"time-14" : t14,
		"time-15" : t15,
		"time-16" : t16,
		"time-17" : t17,
		"time-18" : t18,
		"time-19" : t19,
		"time-20" : t20,
		"time-21" : t21,
		"time-22" : t22,
		"time-23" : t23,
		"time-24" : t24,
		"time-25" : t25,
		"time-26" : t26,
		"time-27" : t27,
		"time-28" : t28,
		"time-29" : t29,
		"time-30" : t30,
		"time-31" : t31,
		"time-32" : t32,
		"time-33" : t33,
		"time-34" : t34,
		"time-35" : t35,
		"time-36" : t36,
		"time-37" : t37,
		"time-38" : t38,
		"time-39" : t39,
		"time-40" : t40,
		"time-41" : t41,
		"time-42" : t42,
		"time-43" : t43,
		"time-44" : t44,
		"time-45" : t45,
		"time-46" : t46,
		"time-47" : t47,
		"time-48" : t48,
		"time-49" : t49,
		"time-50" : t50,
		"time-51" : t51,
		"time-52" : t52,
		"time-53" : t53,
		"time-54" : t54,
		"time-55" : t55,
		"time-56" : t56,
		"time-57" : t57,
		"time-58" : t58,
		"time-59" : t59,
		"time-60" : t60,
		"time-61" : t61,
		"time-62" : t62,
		"time-63" : t63,
		"time-64" : t64,
		"time-65" : t65,
		"time-66" : t66,
		"time-67" : t67,
		"time-68" : t68,
		"time-69" : t69,
		"time-70" : t70,
		"time-71" : t71,
		"time-72" : t72,
		"time-73" : t73,
		"time-74" : t74,
		"time-75" : t75,
		"time-76" : t76,
		"time-77" : t77,
		"time-78" : t78,
		"time-79" : t79,
		"time-80" : t80,
		"time-81" : t81,
		"time-82" : t82,
		"time-83" : t83,
		"time-84" : t84,
		"time-85" : t85,
		"time-86" : t86,
		"time-87" : t87,
		"time-88" : t88,
		"time-89" : t89,
		"time-90" : t90,
		"time-91" : t91,
		"time-92" : t92,
		"time-93" : t93,
		"time-94" : t94,
		"time-95" : t95,
		"time-96" : t96,
		"time-97" : t97,
		"time-98" : t98,
		"time-99" : t99,
		"time-100" : t100,
		"time-101" : t101,
		"time-102" : t102,
		"time-103" : t103,
		"time-104" : t104,
		"time-105" : t105,
		"time-106" : t106,
		"time-107" : t107,
		"time-108" : t108,
		"time-109" : t109,
		"time-110" : t110,
		"time-111" : t111,
		"time-112" : t112,
		"time-113" : t113,
		"time-114" : t114,
		"time-115" : t115,
		"time-116" : t116,
		"time-117" : t117,
		"time-118" : t118,
		"time-119" : t119,
		"time-120" : t120,
		"time-121" : t121,
		"time-122" : t122,
		"time-123" : t123,
		"time-124" : t124,
		"time-125" : t125,
		"time-126" : t126,
		"time-127" : t127,
		"time-128" : t128,
		"time-129" : t129,
		"time-130" : t130,
		"time-131" : t131,
		"time-132" : t132,
		"time-133" : t133,
		"time-134" : t134,
		"time-135" : t135,
		"time-136" : t136,
		"time-137" : t137,
		"time-138" : t138,
		"time-139" : t139,
		"time-140" : t140,
		"time-141" : t141,
		"time-142" : t142,
		"time-143" : t143,
		"time-144" : t144,
		"time-145" : t145,
		"time-146" : t146,
		"time-147" : t147,
		"time-148" : t148,
		"time-149" : t149,
		"time-150" : t150,
		"time-151" : t151,
		"time-152" : t152,
		"time-153" : t153,
		"time-154" : t154,
		"time-155" : t155,
		"time-156" : t156,
		"time-157" : t157,
		"time-158" : t158,
		"time-159" : t159,
		"time-160" : t160,
		"time-161" : t161,
		"time-162" : t162,
		"time-163" : t163,
		"time-164" : t164,
		"time-165" : t165,
		"time-166" : t166,
		"time-167" : t167,
		"time-168" : t168,
		"time-169" : t169,
		"time-170" : t170,
		"time-171" : t171,
		"time-172" : t172,
		"time-173" : t173,
		"time-174" : t174,
		"time-175" : t175,
		"time-176" : t176,
		"time-177" : t177,
		"time-178" : t178,
		"time-179" : t179,
		"time-180" : t180,
		"time-181" : t181,
		"time-182" : t182,
		"time-183" : t183,
		"time-184" : t184,
		"time-185" : t185,
		"time-186" : t186,
		"time-187" : t187,
		"time-188" : t188,
		"time-189" : t189,
		"time-190" : t190,
		"time-191" : t191,
		"time-192" : t192,
		"time-193" : t193,
		"time-194" : t194,
		"time-195" : t195,
		"time-196" : t196,
		"time-197" : t197,
		"time-198" : t198,
		"time-199" : t199,
		"time-200" : t200,
		"time-201" : t201,
		"time-202" : t202,
		"time-203" : t203,
		"time-204" : t204,
		"time-205" : t205,
		"time-206" : t206,
		"time-207" : t207,
		"time-208" : t208,
		"time-209" : t209,
		"time-210" : t210,
		"time-211" : t211,
		"time-212" : t212,
		"time-213" : t213,
		"time-214" : t214,
		"time-215" : t215,
		"time-216" : t216,
		"time-217" : t217,
		"time-218" : t218,
		"time-219" : t219,
		"time-220" : t220,
		"time-221" : t221,
		"time-222" : t222,
		"time-223" : t223,
		"time-224" : t224,
		"time-225" : t225,
		"time-226" : t226,
		"time-227" : t227,
		"time-228" : t228,
		"time-229" : t229,
		"time-230" : t230,
		"time-231" : t231,
		"time-232" : t232,
		"time-233" : t233,
		"time-234" : t234,
		"time-235" : t235,
		"time-236" : t236,
		"time-237" : t237,
		"time-238" : t238,
		"time-239" : t239,
		"time-240" : t240
	}
	output.push(data);
}

var parser = parse({columns: true}, function (err, records) {
	for(const row of records) {
		fillArray(row.element, row.time1, row.time2, row.time3, row.time4, row.time5, row.time6, row.time7, row.time8, row.time9, row.time10, row.time11, row.time12, row.time13, row.time14, row.time15, row.time16, row.time17, row.time18, row.time19, row.time20, row.time21, row.time22, row.time23, row.time24, row.time25, row.time26, row.time27, row.time28, row.time29, row.time30, row.time31, row.time32, row.time33, row.time34, row.time35, row.time36, row.time37, row.time38, row.time39, row.time40, row.time41, row.time42, row.time43, row.time44, row.time45, row.time46, row.time47, row.time48, row.time49, row.time50, row.time51, row.time52, row.time53, row.time54, row.time55, row.time56, row.time57, row.time58, row.time59, row.time60, row.time61, row.time62, row.time63, row.time64, row.time65, row.time66, row.time67, row.time68, row.time69, row.time70, row.time71, row.time72, row.time73, row.time74, row.time75, row.time76, row.time77, row.time78, row.time79, row.time80, row.time81, row.time82, row.time83, row.time84, row.time85, row.time86, row.time87, row.time88, row.time89, row.time90, row.time91, row.time92, row.time93, row.time94, row.time95, row.time96, row.time97, row.time98, row.time99, row.time100, row.time101, row.time102, row.time103, row.time104, row.time105, row.time106, row.time107, row.time108, row.time109, row.time110, row.time111, row.time112, row.time113, row.time114, row.time115, row.time116, row.time117, row.time118, row.time119, row.time120, row.time121, row.time122, row.time123, row.time124, row.time125, row.time126, row.time127, row.time128, row.time129, row.time130, row.time131, row.time132, row.time133, row.time134, row.time135, row.time136, row.time137, row.time138, row.time139, row.time140, row.time141, row.time142, row.time143, row.time144, row.time145, row.time146, row.time147, row.time148, row.time149, row.time150, row.time151, row.time152, row.time153, row.time154, row.time155, row.time156, row.time157, row.time158, row.time159, row.time160, row.time161, row.time162, row.time163, row.time164, row.time165, row.time166, row.time167, row.time168, row.time169, row.time170, row.time171, row.time172, row.time173, row.time174, row.time175, row.time176, row.time177, row.time178, row.time179, row.time180, row.time181, row.time182, row.time183, row.time184, row.time185, row.time186, row.time187, row.time188, row.time189, row.time190, row.time191, row.time192, row.time193, row.time194, row.time195, row.time196, row.time197, row.time198, row.time199, row.time200, row.time201, row.time202, row.time203, row.time204, row.time205, row.time206, row.time207, row.time208, row.time209, row.time210, row.time211, row.time212, row.time213, row.time214, row.time215, row.time216, row.time217, row.time218, row.time219, row.time220, row.time221, row.time222, row.time223, row.time224, row.time225, row.time226, row.time227, row.time228, row.time229, row.time230, row.time231, row.time232, row.time233, row.time234, row.time235, row.time236, row.time237, row.time238, row.time239, row.time240);
	}
	printArr(output);

	//because createReadStream is asynchronous anything we do with the array output will have to be done in this function
	//it's possible to pass it to call other functions with the array as a parameter (shown below), but long term saving will be an issue


});

fs.createReadStream('../../data/CART-TIBIA-MED_S.csv').pipe(parser);

function printArr(arr) {
	console.log(arr);
}


//console.log(records.index[0]);




