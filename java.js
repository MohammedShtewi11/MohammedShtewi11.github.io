
function show_err() {
    var Fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var Pwebsit = document.getElementById('Pwebsit').value;
    var P_num = document.getElementById('P_num').value;
    var Email = document.getElementById('Email').value;
    var Username = document.getElementById('Username').value;
    var pass = document.getElementById('pass').value;
    var Degree = document.getElementById('Degree').value;
    var T_graduate = document.getElementById('T_graduate').value;

    if (Fname === "") {
        alert("Plz enter your first name to complete");
    }
    if (lname === "") {
        alert("Plz enter your last name to complete");
    }

    if (Pwebsit === "") {
        alert("Plz enter your websit name to complete");
    }
    if (P_num === "") {
        alert("Plz enter your number to complete");
    }
    
    if(Email  === '') {
        alert("Plz enter your Email to complete");

		
	} 
    else if (!isEmail(Email)) {
        alert("Plz enter your Email to complete");
    }

    if (Username === "") {
        alert("Plz enter your Username to complete");
    }
    if (pass === "") {
        alert("Plz enter your password to complete");
    }
    if (Degree === "") {
        alert("Plz enter your Degree to complete");
    }

    if (T_graduate === "") {
        alert("Plz enter your T_graduate to complete");
    }

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function save() {
    alert("The application of ["+Email.value+"] is saved!");
}
