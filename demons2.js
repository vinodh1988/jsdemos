
function asyncCode(){

 return new Promise((resolve,reject)=>{
     
	   setTimeout(()=>{
	      resolve ("Data from AsyncCode");
	  },4000);
 });
}


  async function  caller(){
	 
	   let data=await asyncCode();
       console.log(data);
	   console.log("Non dependent code");
 }
/*function caller(){
	let x=asyncCode();
	
	x.then(
	   (data)=> console.log(data),
	   (error)=>console.log(error)
	);
	
	console.log("Non dependent code");
}*/
/*
function caller(){
	
	let x=asyncCode();
	
	console.log(x);
}*/


caller();