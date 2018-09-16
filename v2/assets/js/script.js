$(document).ready(function() {

	var width = $(window).width();
	var height = $(window).height();
	console.log(width, height);
	$(".section").hide();

	$("svg").attr("height", height * 2);
	$("svg").attr("width", width * 2);

	var rootx = width / 2;
	var rooty = height / 2;
	$("#root").attr("cx", rootx);
	$("#root").attr("cy", rooty);
	$(".text").hide();
	$(".text.root").attr("x", rootx);
	$(".text.root").attr("y", rooty);
	$(".text.root").fadeIn();

	function createNode(node_name, x1, y1, x2, y2) {
		var node = $(".node." + node_name);
		node.attr({"cx": x1, "cy": y1, "r": "60px"}); //CHANGE NODE SIZE HERE, STILL NEED TO DO CSS
		$(".text." + node_name).attr({"x": x2, "y": y2});
		var edge_classes = "edge " + node_name + " expanded";
		$(".edge." + node_name).attr({"x1": x1, "y1": y1, "x2": x2, "y2": y2, "class": edge_classes});
		node.animate({"cx": x2, "cy": y2}, function() {disperse(node_name, node)});
	}

	function disperse(node_name, node, isLeaf) {
		var node_classes = "node " + node_name + " created";
		$(".text." + node_name).fadeIn("fast", "linear");
		node.attr({"class": node_classes});
	}

	var num_edges_root = 5;
	var r = 200;

	$("#root").click(function() {
		var x1 = rootx;
		var y1 = rooty;
		for (i = 0; i < num_edges_root; i++) {
			var theta = Math.PI * 2 / num_edges_root * i - (Math.PI / 4);
			var x2 = r * Math.cos(theta) + x1;
			var y2 = r * Math.sin(theta) + y1;
			if (i == 0) {
				createNode("about", x1, y1, x2, y2);
				// var node_name = "about";
				// var node = $(".node." + node_name);
				// node.attr({"cx": rootx, "cy": rooty, "r": "55px"});
				// $(".text." + node_name).attr({"x": x2, "y": y2});
				// var edge_classes = "edge " + node_name + " expanded";
				// $(".edge." + node_name).attr({"x1": x1, "y1": y1, "x2": x2, "y2": y2, "class": edge_classes});
				// var node_classes = "node " + node_name + " created";
				// node.animate({"cx": x2, "cy": y2}, function() {		//there was a bug here because node_name was not in scope of function
				// 	var node_classes = "node " + node_name + " created";
				// 	$(".text." + node_name).fadeIn("fast", "linear");
				// 	node.attr({"class": node_classes});
				// });

				// $(".node.about").attr({"cx": x2, "cy": y2});
				// $(".edge.about").attr({"x1": x1, "y1": y1, "x2": x2, "y2": y2, "class": "edge about expanded"});
				// $(".text.about").attr({"x": x2, "y": y2});
				// $(".node.about").animate({"r": "55px"}, 300, function() {
				// 	$(".text.about").fadeIn("fast", "linear");
				// 	$(".node.about").attr({"class": "node about created"});
				// });
			} else if (i == 1) {
				createNode("professional", x1, y1, x2, y2);
			} else if (i == 2) {
				createNode("contact", x1, y1, x2, y2);
			} else if (i == 3) {
				createNode("fun", x1, y1, x2, y2);
			} else if (i == 4) {
				createNode("moist", x1, y1, x2, y2);
			}
		}
	});

	var num_edges_professional = 4;
	var r = 200;

	$(".node.professional").click(function() {
		var x1 = $(this).css("cx");
		var y1 = $(this).css("cy");

		createNode("education", x1, y1, 1000, 250, true);
		createNode("experience", x1, y1, 1000, 400, true);
		createNode("projects", x1, y1, 950, 550, true);
	});

	var nodeClicked;
	var classList;
	var svg;
	var sectionSelected;

	$(".node.leaf").click(function() {
		console.log("clicked!");
		nodeClicked = $(this);
		classList = $(this).attr("class");
		sectionSelected = classList.split(" ")[1];
		svg = $(this).parent().siblings();
		svg.fadeOut(100);
		text = $(this).siblings();
		text.fadeOut(100);
		$(this).attr({"class": "expanded-node"});
		$(".section." + sectionSelected).fadeIn(350);
	});

	$(".arrow-circle").click(function() {
		$(".section." + sectionSelected).fadeOut("fast");
		nodeClicked.attr({"class": "unexpanded-node"});
		setTimeout(function() {
  			svg.show();
  			text.show();
			}, 300);
		setTimeout(function() {
  			nodeClicked.attr({"class": classList});
			}, 700);
	});
});

