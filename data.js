



   function delayed(){
	   return new Promise(function(resolve,reject){
		   setTimeout(()=>resolve("Data from delayed function ***X****"),3000);
		
		   console.log("Other Part");
		   
		   
	   });
   
     
	 }
   
   
   
   
  
   
  async function consume(){
	   
	    let data=await delayed();
		console.log(data);
   
   /*data.then(
      (data)=>console.log(data),
	  (error)=>console.log(error)
   )*/
   }
   
   consume();