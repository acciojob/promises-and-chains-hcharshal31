//your JS code here. If required.
let age = document.getElementById("age").value;
let name = document.getElementById("name").value;

let promise1 = new Promise((resolve, reject)=>{
	if(age > 18){
		setTimeout(()=>{
			resolve(`Welcome, ${name}. You can vote.`);
		}, 4000);
	} else {
		reject(`Oh sorry ${name}. You aren't old enough.`);
	}
});

promise1.then((data)=>{
	alert(date)
}).catch(err){
	alert(err);
}