//your JS code here. If required.
https://www.svgrepo.com/show/345221/three-dots.svg

const form = document.getElementById("voteform");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form .addEventListener("submit",function(event){
	event.preventDefault();

	const age = ageInput.value.trim();
	const name = nameInput.value.trim();

	if (age === "" || name === ""){
		alert("Please enter valid details.");
		return;
	}

	const checkAge = new promise((resolve,reject) => {
		setTimeout (() => {
			if(Number(age) > 18) {
				resolve(`Welcome,${name}.You can vote.`);
				
			}else {
				reject(`oh sorry ${name}.You aren't old enough.`);
				}
				
			},4000);
		});
		checkAge
			.then(message =>{
				alert(message);
			})
		.catch(error=> {
			alert(error)
		});
	});