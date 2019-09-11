
function asyncFun(time){ 

	return new Promise( (resolve,reject)=>{
	  
							setTimeout(()=>resolve("Data produced after "+time +" secs")
							,time*1000);

					});

}


function* producer(){
	
	 console.log("First request to be made::");
	 yield asyncFun(5);
	 console.log("Second request to be made::");
	 yield asyncFun(3);
	 console.log("Third request to be made::");
	 yield asyncFun(2);
	 console.log("Job Done"); 
}

async function caller(){
	
	     for( let x of producer()){
			     let data =await x;
				 console.log("user logic is running...and the data is....");
				 console.log(data);
		 }
	   
}

caller();
