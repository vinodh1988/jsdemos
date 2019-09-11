

//Generator function 
function* x(){
   console.log("line1");
   console.log("line2");
   console.log("line3");
   yield "x123";
   console.log("line4");
   console.log("line5");
   console.log("line6");
   yield "y123";
   console.log("line7");
   console.log("line8");
   console.log("line9");
   yield "z123";
}

/*----------------------------------------------------------------------------------*/

function caller(){
	let p=x();
	let a=p.next();
	console.log(a);
	let b=p.next();
	console.log(b);

	 
	/*for(let i of x())
		console.log(i+" is the data recieved");*/
}

caller();