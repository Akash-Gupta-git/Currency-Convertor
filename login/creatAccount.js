let loginInput = document.getElementById("login")
let submitBtn = document.getElementById("submit")


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function validationform() {
    
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const userEmail = loginInput.value;
        
        
        if (emailRegex.test(userEmail)) {
            alert("Email is valid");
            loginInput.style.border = "1px solid grey"; 
            localStorage.setItem('Email', userEmail)
            loginInput.value = ""; 
        }
         else {
            alert("Invalid email address!");
            loginInput.style.border = "2px solid red"; 
        }
    });
}


validationform();
