//your JS code here. If required.
let age = parseInt(document.getElementById('age').value, 10);
let name = document.getElementById("name").value.trim();

if(!name || isNaN(age)){
	alert("inputs cannot be empty.")
}

document.getElementById("myForm").addEventListener(submit, (event)=>{
	event.preventDefault();
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

});