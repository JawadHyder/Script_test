// JavaScript Document

var scri = $('<div></div>',{
	id:"bgSoftCol",
	style:"background-color:#000; width:100%; height:100%; top:0; left:0; position: fixed; z-index: 99; opacity: 0.3;"
});

var mBar = '<style type="text/css">#mBar {z-index:100;position:fixed;width:100%;height:20px;background-color:#390;bottom:0;left:0;}.mbSpan {float:left;display:block;width:20px;height:20px;margin-left:10px;}.colo1 {background-color:#000;opacity:0.7;}.colo2 {background-color:#000;opacity:0.6;}.colo3 {background-color:#000;opacity:0.5;}.colo4 {background-color:#000;opacity:0.4;}.colo5{background-color:#000;opacity:0.6;}.colo6 {background-color:#000;opacity:0.3;}.hideScr {background:#f9f9f9;box-sizing:border-box;}</style><div id="mBar"><span class="mbSpan colo1"></span><span class="mbSpan colo2"></span><span class="mbSpan colo3"></span><span class="mbSpan colo4"></span><span class="mbSpan colo5"></span><span class="mbSpan colo6"></span><span class="mbSpan hideScr"></span></div>';

$('body').append(scri);
$('body').append(mBar);

//$(document).click(function(){
//	$("#bgSoftCol").hide();
//});

$('.mbSpan').click(function(){
	$("#bgSoftCol").show();
});
$('.colo1').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.7
	});
});

$('.colo2').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.6
	});
});

$('.colo3').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.5
	});
});

$('.colo4').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.4
	});
});

$('.colo5').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.3
	});
});

$('.colo6').click(function(){
	$("#bgSoftCol").css({
		opacity: 0.2
	});
});


$('.hideScr').click(function(){
	$("#bgSoftCol").hide();
});
