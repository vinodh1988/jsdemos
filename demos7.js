

class Sample{
     constructor(data){
	   this.data=data;
	 }
	 
	 display(){
		 console.log("Data is "+this.data);
	 }
	 
	 change(){
		 
		   dataChanger((data)=>{
			   this.data=data;
		   });
	 }

}

let obj=new Sample("XYZ");
obj.display();
obj.change();
obj.display();

function dataChanger(call){
     console.log("Data changer running");
	 call("NEWXYZ");
}