function genSubwayStationHtml(lineName) {
	for (var stations = subwayData[lineName],stationIDs = idsData[lineName], htmls = [], i = 0; i < stations.length; ++i) htmls.push("<li data='"+stationIDs[i]+"'>" + stations[i] + "</li>");
	return htmls.join("")
}
function genSubwayLineHtml() {
	var htmls = [],
	i = -1,
	classname = ["op-subway-one", "op-subway-two", "op-subway-four", "op-subway-five", "op-subway-six", "op-subway-seven"];
	for (var lineName in subwayData) i++,
	htmls.push("<li><span class=" + classname[i] + "></span>" + lineName + "</li>");
	return htmls.join("")
}
function tryActiveCalcButton() {
	var start = $(".op-subway-box-start .op-subway-station em").text(),
	end = $(".op-subway-box-end .op-subway-station em").text();
	if ("选择车站" != start && "选择车站" != end) $(".op-subway-calc-false").addClass("op-subway-calc-fare").removeClass("op-subway-calc-false")
}
function initSubwayBox() {
	var lineHtml = genSubwayLineHtml();
	$(".op-subway-line .op-subway-ul").html(lineHtml),
	$(".op-subway-line .op-subway-ul").on("click", "li",
	function() {
		var lineName = $(this).text();
		$(this).parent().parent().parent().find(".op-subway-line em").css({
			padding: "0px 5px 0px 20px"
		}),
		$(this).parent().parent().parent().find(".op-subway-station").css({
			background: "#fff"
		}),
		$(this).parent().parent().parent().find(".op-subway-station em").css({
			color: "#333"
		});
		var stationHtml = genSubwayStationHtml(lineName),
		$box = $(this).parent().parent().parent();
		$box.find(".op-subway-ulk").html(stationHtml);
		var firstStation = subwayData[lineName][0];
		var firstStationID = idsData[lineName][0];
		$box.find(".op-subway-station em").text(firstStation),$box.find(".op-subway-station em").attr("data",firstStationID),
		tryActiveCalcButton()
	}),
	$(".op-subway-ul, .op-subway-ulk").each(function() {
		$(this).find("li").eq(0).addClass("op-subway-textone")
	})
}
function format(distance) {
	distance += .001;
	var s = distance + "",
	index = s.indexOf(".");
	if (index >= 0) if (s.length > index + 2) s = s.substr(0, index + 2);
	return s
}
function genText(distance, fare) {
	
	var increase = calcMonthlyFare(fare);
	
	returnStr="";
	
	if(distance>0){
		returnStr='单程<em class="op-subway-increase">' + distance + '</em>公里，';	
	}
	
	
	
	if(fare>0){
		returnStr+='票价<em class="op-subway-increase ">' + fare + '</em>元！每年上下班乘坐地铁的费用约<em class="op-subway-increase op-subway-money">' + increase + '</em>元！';
	}else{
		returnStr="暂无法查询到相关的票价信息，请选择其它站点查询！"	
	}


	return '<p class="op-subway-span">'+ returnStr +'</p>'
}
function initCalcFare() {
	$(".op-subway-main").on("click", ".op-subway-calc-fare",
	function() {
		var start = $(".op-subway-box-start .op-subway-station em").attr("data"),
		end = $(".op-subway-box-end .op-subway-station em").attr("data");
		if ("选择车站" == start || "选择车站" == end) return $(".op-subway-ts").show(),
		false;
		if (start == end) return $(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html('<p class="op-subway-span">距离太近，建议步行').show(),
		false;
		else $(".op-subway-ts").hide();
		$(this).parent().css({
			"border-bottom": "1px solid #fff"
		})

		var distance =0,fare=0;
		
		$(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html("");
		$(".op-subway-content2 .op-subway-text .op-subway-fareinfo").css("background","url(http://jtapi.bendibao.com/ditie/images/loading.gif) 20px center no-repeat");
		$.getJSON("http://jtapi.bendibao.com/ditie/piaojia.aspx?startid="+start+"&endid="+end+"&callback=?",function(data){
			
			if(data.length>0){
				distance=data[0];	
				fare=data[1];	
			}
	
			$(".op-subway-content2 .op-subway-text .op-subway-fareinfo").css("background","none");
			$(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html(genText(distance, fare));
				
		});
		
		

	})
}

function genVoteText(count) {
	return "(" + count + ")"
}
function initSubwayClick() {
	$(".op-subway-line,.op-subway-station").on("click",
	function(event) {
		if (event.stopPropagation(), $(".op-subway-ts").hide(), $(".op-subway-box ul").hide(), $(this).find("ul").children().length) $(this).find("ul").show();
		$(document).on("click",
		function() {
			$(".op-subway-box ul").hide()
		})
	}),
	$(".op-subway-line,.op-subway-station").on("mouseover", "li",
	function() {
		$(this).addClass("op-subway-ons")
	}),
	$(".op-subway-line,.op-subway-station").on("mouseout", "li",
	function() {
		$(this).removeClass("op-subway-ons")
	}),
	$(".op-subway-ul,.op-subway-ulk").on("click", "li",
	function(event) {
		event.stopPropagation(),
		$(this).parent().parent().find("em").html($(this).html()),
		$(this).parent().parent().find("em").attr("data",$(this).attr("data")),
		$(this).parent().parent().find("ul").hide()
	}),
	$(".op-subway-close").on("mouseover",
	function() {
		$(this).addClass("op-subway-close-on"),
		$(this).on("click",
		function() {
			$(this).parent().hide()
		})
	}),
	$(".op-subway-close").on("mouseout",
	function() {
		$(this).removeClass("op-subway-close-on")
	}),
	$(".op-subway-code").on("click",
	function(event) {
		event.stopPropagation()
	}),
	$(".op-subway-messages").on("click",
	function(event) {
		event.stopPropagation()
	}),
	$(document).on("click",
	function() {
		$(".op-subway-code").hide(),
		$(".op-subway-messages").hide()
	});
}
function init() {
	initSubwayBox(),
	initSubwayClick(),
	initCalcFare()
}

function calcMonthlyFare(fare) {
	var addtext = 2 * fare  * 22 * 12;
	return addtext
}// JavaScript Document