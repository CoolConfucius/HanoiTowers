$(document).ready(init); 
function init () {		
  var display = ''; 
	var stack0 = ''; 
	var stack1 = ''; 
	var stack2 = '';
	var hold = []; 
	var fromStack = [];
	var toStack = [];
	var winLength = 3; 
	var next = false; 
	var ready = false;
	var start = false; 
	$('.difficulty').click(function(event){
		if (start === false) {
			var $buttonPressed = $(this);
			var difficulty = $buttonPressed.text(); 
			var $show0 = $('#T0');
			if (difficulty == 'casual') { 
				winLength = 3; 
				$show0.text(210);
			};
			if (difficulty == 'easy') { 
				winLength = 4; 
				$show0.text(3210);
			};
			if (difficulty == 'medium') { 
				winLength = 6; 
				$show0.text(543210);
			};
			if (difficulty == 'hard') { 
				winLength = 8; 
				$show0.text(76543210);
			};
			start = true; 
		};
	});
	$('.butt').click(function(event){
		start = true;  
		var $show0 = $('#T0'); 
		var $show1 = $('#T1'); 
		var $show2 = $('#T2'); 
		
		var $buttonPressed = $(this);
		var text = $buttonPressed.text(); 
		if (text === '0') {
			if ( ready == false ) {	
				stack0 = $show0.text();
				stack1 = $show1.text();
				stack2 = $show2.text();
				ready = true; 
  			fromStack = $show0.text().split('');
  			hold.push(fromStack[fromStack.length-1]); 
  			fromStack.pop();
  			display = fromStack.join('');	  
  			$show0.text(display);			
			} else if (ready == true) {
				toStack = $show0.text().split('');
				ready = false;
				if ( toStack.length == 0 || hold < toStack[toStack.length-1]) {
					toStack.push(hold); 
					display = toStack.join('');
					$show0.text(display);
				} else {
					$show0.text(stack0);
					$show1.text(stack1);
					$show2.text(stack2);
					alert("Nope!");
					console.log("NOPE!");
				};
					hold = []; 
			};		
			
		};		
		if (text === '1') {
			if ( ready == false ) {	
				stack0 = $show0.text();
				stack1 = $show1.text();
				stack2 = $show2.text();
				ready = true; 
  			fromStack = $show1.text().split('');
  			hold.push(fromStack[fromStack.length-1]); 
  			fromStack.pop();
  			display = fromStack.join('');
  			$show1.text(display);
			} else if (ready == true) {
				toStack = $show1.text().split('');
				ready = false;
				if ( toStack.length == 0 || hold < toStack[toStack.length-1]) {
					toStack.push(hold); 
					display = toStack.join('');
					$show1.text(display);
				} else {
					$show0.text(stack0);
					$show1.text(stack1);
					$show2.text(stack2);
					alert("Nope!");
					console.log("NOPE!");
				};
					hold = []; 
			};		
			
		};
		if (text === '2') {
			if ( ready == false ) {	
				stack0 = $show0.text();
				stack1 = $show1.text();
				stack2 = $show2.text();
				ready = true; 
  			fromStack = $show2.text().split('');  			
  			hold.push(fromStack[fromStack.length-1]); 
  			fromStack.pop();
  			display = fromStack.join('');	  			
  			$show2.text(display);
			} else if (ready == true) {
				toStack = $show2.text().split('');
				ready = false;
				if ( toStack.length == 0 || hold < toStack[toStack.length-1]) {
					toStack.push(hold); 
					display = toStack.join('');
					$show2.text(display);
					if (toStack.length == winLength) {
						$('#win').text("You win!"); 
						alert("You win!"); 
					};
				} else {
					$show0.text(stack0);
					$show1.text(stack1);
					$show2.text(stack2);
					alert("Nope!");
					console.log("NOPE!");
				};

					hold = []; 
			};					
		};
		
	});
};

