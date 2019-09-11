

let a=function(){
   console.log("funny");
}

let b=function(a){
  return "Hello"+a;
}

a();

console.log(b("George"));

let c=()=>console.log("funny");
let d=(a)=>"Hello"+a;

c();

console.log(d("George"));

