
/*
function Student(sno,name){
   this.name=name;
   this.sno=sno;
}

Student.prototype.display=function(){
  console.log(this.sno+"  "+this.name);
}


let a=new Student(12,"Ram");
a.display();*/

class Student{
	
	   constructor(sno,name){
		   this.sno=sno;
		   this.name=name;
	   }
	   
	   display(){
		   console.log(this.sno+"  "+this.name);
	   }
	
}



let a=new Student(12,"Ram");
a.display();