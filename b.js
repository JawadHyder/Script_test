var scri = $('<div></div>',{
	id:"bgSoftCol",
	style:"background-color:#000; width:100%; height:100%; top:0; left:0; position: fixed; z-index: 99; opacity: 0.3;"
});

var mBar = '<style type="text/css">#mBar {z-index:100;position:fixed;width:100%;height:50px;background-color:#390;bottom:0;left:0;}.mbSpan {display:block;width:50px;height:50px;margin-left:10px;}.colo1 {background-color:#444;}.colo2 {background-color:#666;}.colo3 {background-color:#999;}</style><div id="mBar"><span class="mbSpan colo1"></span><span class="mbSpan colo2"></span><span class="mbSpan colo3"></span></div>';

$('body').append(scri);
$('body').append(mBar);

$(document).click(function(){
	$("#bgSoftCol").hide();
});