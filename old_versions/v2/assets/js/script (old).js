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

	var num_edges_root = 5;
	var r = 200;

	$("#root").click(function() {
		var edge_x1 = rootx;
		var edge_y1 = rooty;
		for (i = 0; i < num_edges_root; i++) {
			var theta = Math.PI * 2 / num_edges_root * i - (Math.PI / 4);
			var x = r * Math.cos(theta) + edge_x1;
			var y = r * Math.sin(theta) + edge_y1;
			if (i == 0) {
				var node_name = "about";
				$(".node.about").attr({"cx": rootx, "cy": rooty, "r": "55px"});
				$(".text.about").attr({"x": x, "y": y});
				var edge_classes = "edge " + node_name + " expanded";
				$(".edge.about").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": edge_classes});
				var node_classes = "node " + node_name + " created";
				$(".node.about").animate({"cx": x, "cy": y}, function() {
					$(".text.about").fadeIn("fast", "linear");
					$(".node.about").attr({"class": node_classes});
				});

				// $(".node.about").attr({"cx": x, "cy": y});
				// $(".edge.about").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge about expanded"});
				// $(".text.about").attr({"x": x, "y": y});
				// $(".node.about").animate({"r": "55px"}, 300, function() {
				// 	$(".text.about").fadeIn("fast", "linear");
				// 	$(".node.about").attr({"class": "node about created"});
				// });
			} else if (i == 1) {
				var node_name = "professional";
				$(".node.professional").attr({"cx": rootx, "cy": rooty, "r": "55px"});
				$(".text.professional").attr({"x": x, "y": y});
				$(".edge.professional").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge professional expanded"});
				$(".node.professional").animate({"cx": x, "cy": y}, function() {
					$(".text.professional").fadeIn("fast", "linear");
					$(".node.professional").attr({"class": "node professional created"});
				});
			} else if (i == 2) {
				var node_name = "contact";
				$(".node.contact").attr({"cx": rootx, "cy": rooty, "r": "55px"});
				$(".text.contact").attr({"x": x, "y": y});
				$(".edge.contact").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge contact expanded"});
				$(".node.contact").animate({"cx": x, "cy": y}, function() {
					$(".text.contact").fadeIn("fast", "linear");
					$(".node.contact").attr({"class": "node contact created"});
				});
			} else if (i == 3) {
				var node_name = "fun";
				$(".node.fun").attr({"cx": rootx, "cy": rooty, "r": "55px"});
				$(".text.fun").attr({"x": x, "y": y});
				$(".edge.fun").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge fun expanded"});
				$(".node.fun").animate({"cx": x, "cy": y}, function() {
					$(".text.fun").fadeIn("fast", "linear");
					$(".node.fun").attr({"class": "node fun created"});
				});
			} else if (i == 4) {
				var node_name = "moist";
				$(".node.moist").attr({"cx": rootx, "cy": rooty, "r": "55px"});
				$(".text.moist").attr({"x": x, "y": y});
				$(".edge.moist").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge moist expanded"});
				$(".node.moist").animate({"cx": x, "cy": y}, function() {
					$(".text.moist").fadeIn("fast", "linear");
					$(".node.moist").attr({"class": "node moist created"});
				});
			}
		}
	});

	var num_edges_professional = 4;
	var r = 200;

	$(".node.professional").click(function() {
		var edge_x1 = $(this).css("cx");
		var edge_y1 = $(this).css("cy");
		var x;
		var y;

		var node_name = "education";
		x = 1000;
		y = 250;
		$(".node.education").attr({"cx": edge_x1, "cy": edge_y1, "r": "55px"});
		$(".text.education").attr({"x": x, "y": y});
		$(".edge.education").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge education expanded"});
		$(".node.education").animate({"cx": x, "cy": y}, function() {
			$(".text.education").fadeIn("fast", "linear");
			$(".node.education").attr({"class": "node education created"});
		});

		var node_name = "experience";
		x = 1000;
		y = 400;
		$(".node.experience").attr({"cx": edge_x1, "cy": edge_y1, "r": "55px"});
		$(".text.experience").attr({"x": x, "y": y});
		$(".edge.experience").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge experience expanded"});
		$(".node.experience").animate({"cx": x, "cy": y}, function() {
			$(".text.experience").fadeIn("fast", "linear");
			$(".node.experience").attr({"class": "node experience created"});
		});

		var node_name = "projects";
		x = 950;
		y = 550;
		$(".node.projects").attr({"cx": edge_x1, "cy": edge_y1, "r": "55px"});
		$(".text.projects").attr({"x": x, "y": y});
		$(".edge.projects").attr({"x1": edge_x1, "y1": edge_y1, "x2": x, "y2": y, "class": "edge projects expanded"});
		$(".node.projects").animate({"cx": x, "cy": y}, function() {
			$(".text.projects").fadeIn("fast", "linear");
			$(".node.projects").attr({"class": "node projects created"});
		});
	});

	var nodeClicked;
	var classList;
	var svg;

	// $(".node").click(function() {
	// 	nodeClicked = $(this);
	// 	classList = $(this).attr("class");
	// 	var section = classList.split(" ")[1];
	// 	svg = $(this).siblings();
	// 	svg.fadeOut(100);
	// 	$(this).attr({"class": "expanded-node"});
	// 	$(".section." + section).fadeIn(350);
	// });

	$(".arrow-circle").click(function() {
		$(".section").fadeOut("fast");
		nodeClicked.attr({"class": "unexpanded-node"});
		setTimeout(function() {
  			svg.show();
			}, 300);
		setTimeout(function() {
  			nodeClicked.attr({"class": classList});
			}, 700);
	});
});

