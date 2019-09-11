

function x(call){
   console.log("line1");
   console.log("line2");
   console.log("line3");
   call("x123");
   console.log("line4");
   console.log("line5");
   console.log("line6");
   call("y123");
   console.log("line7");
   console.log("line8");
   console.log("line9");
   call("z123");
}

/*----------------------------------------------------------------------------------*/

function caller(){
	 
	 x(
	    (data)=>{
			console.log("Running in the call..."+data);
		}
	 );
	
}

caller();