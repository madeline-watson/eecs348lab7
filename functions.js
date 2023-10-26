function apply_changes() {
	var border_R = document.getElementById("border_R").value;
	var border_G = document.getElementById("border_G").value;
	var border_B = document.getElementById("border_B").value;
	var border_width = document.getElementById("border_width").value;
	var background_R = document.getElementById("background_R").value;
	var background_G = document.getElementById("background_G").value;
	var background_B = document.getElementById("background_B").value;
	
	var tag = document.getElementById("dummy_paragraph");
    	tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    	tag.style.borderWidth = border_width + "px";
    	tag.style.borderStyle = solid;
    	tag.style.backgroundColor = `rgb(${background_R},${background_G},${background_B})`;
}

function check_passwords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    
    if(password1.length < 8) {
        alert("The first password is less than 8 characters.");
    }
    else if(password2.length < 8) {
        alert("The second password is less than 8 characters.");
    }
    else if(password1 != password2) {
        alert("The first and second passwords do not match.");
    }
    else {
        alert("Looks good!");
    }
}
