let globalVariable = "Welcome";

function outer() {
	
	alert(globalVariable);
	let course = "Holberton";
	
	function inner() {
		
		alert(globalVariable + " " + course);
		let exclamamtion = "!";
		
		function inception() {
			
			alert(globalVariable + " " + course + exclamamtion);
		}
		
		inception();
	}
	
	inner();
}

outer();
