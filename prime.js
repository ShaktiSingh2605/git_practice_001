let num=8;
let factor=0;
for(let i=1;i<=num;i++){
	if(num%i){
	count++;
	}
}
if(count==2){
 console.log("No is Prime");
} else{
	console.log("No is Not Prime");
}