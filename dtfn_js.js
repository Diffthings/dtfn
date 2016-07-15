

var dtfn_fn_active = false; //buble shown or not?
var dtfn_fn_element; //clicked element

//Click a note....
$(".dtfn_footnote").click(function(e) {
	e.stopPropagation();
	dtfn_fn_element = $(this);
	var dtfn_fnX = $(this).text();

	//Check if ref is Integer
	var IntCk = isInt(dtfn_fnX);
	if (IntCk) {

		var ref = ".dtfn_note_" + dtfn_fnX.toString();

		//add content to bubble		
		var elem = $(ref).html();
		$(".dtfn_bubblecontent").html(elem);
		$(".dtfn_bubble").css("display", "inline");
	
		dtfn_fn_active = true;
		PosFn(dtfn_fn_element);

	} else {
		alert("Cannot find footnote with index " + dtfn_fnX + ". Sorry about that.")
	}
});

//integer check
function isInt(value) {
	return !isNaN(value) &&
		parseInt(Number(value)) == value &&
		!isNaN(parseInt(value, 10));
}

//Hide or reposition Notes
function resetfn() {
	$(".dtfn_bubble").css("display", "none");
	dtfn_fn_active = false;
}

$(window).resize(function() {
	PosFn(dtfn_fn_element);
});

$(window).scroll(function() {
	PosFn(dtfn_fn_element);
});

$("html").click(function() {
	if (dtfn_fn_active) {
		resetfn();
	}
});

$(".dtfn_bubble").dblclick(function(e) {
	resetfn();
});

$(".dtfn_bubble").click(function(e) {
	e.stopPropagation();
});

//Adjust position
function PosFn(dtfn_fn_elem) {
	var hmode = "left";
	var vmode = "top";

	var vpheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var vpwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

	var dtfn_fn_offset = dtfn_fn_elem.offset();
	var dtfn_fn_width = dtfn_fn_elem.width();

	var hp = Math.round(dtfn_fn_offset.left);
	var vp = Math.round(dtfn_fn_offset.top);

	var tY = $(window).scrollTop();

	var dtt = Math.round(vp - tY); //distance to top
	var dtr = Math.round(vpwidth - hp); //distance to right

	if (dtt > 150) {
		vmode = "top";
		var btop = vp - $(".dtfn_bubble").height() - 33; //top
		$(".dtfn_bubble").removeClass('bottom');

		if (dtr > 200) {
			hmode = "right";
			$(".dtfn_bubble").removeClass('left');
			var bleft = hp + $(".dtfn_bubble").width() - 130 + dtfn_fn_width; //right
		} else {
			hmode = "left";
			$(".dtfn_bubble").addClass('left');
			$(".dtfn_bubble").removeClass('bottlef');
			var bleft = hp - $(".dtfn_bubble").width() + 140 + dtfn_fn_width; //left
		}

	} else {
		vmode = "bottom";
		var btop = vp + $(".dtfn_bubble").height() - 78 + dtfn_fn_width * 2; //bottom
		$(".dtfn_bubble").addClass('bottom');

		if (dtr > 200) {
			hmode = "right";
			$(".dtfn_bubble").removeClass('left');
			$(".dtfn_bubble").removeClass('bottlef');
			var bleft = hp + $(".dtfn_bubble").width() - 130 + dtfn_fn_width; //right
		} else {
			hmode = "left";
			$(".dtfn_bubble").addClass('bottlef');
			var bleft = hp - $(".dtfn_bubble").width() + 140 + dtfn_fn_width; //left
		}

	}

	$(".dtfn_bubble").css("top", btop)
	$(".dtfn_bubble").css("left", bleft)
}