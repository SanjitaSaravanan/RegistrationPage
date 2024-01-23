
function validateEmail() {
    // Get the email input element
    var emailInput = document.getElementById("exampleInputEmail1");
    
    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("emailValidationMessage");
    
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email is valid
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove("redbox");
        emailInput.classList.add("greenbox");
        validationMessageDiv.innerHTML = "";
        console.log("Email is valid");
        return true;
    } else {
        validationMessageDiv.innerHTML = "Invalid email address";
        emailInput.classList.remove("greenbox");
        emailInput.classList.add("redbox");
        console.log("Email is invalid");
        return false;
    }
}

function validateYear() {
    var userYear = document.getElementById("dob").value;
    var year = new Date(userYear).getFullYear();
    if (!(year >= 1950 && year <= 2010)) {
      document.getElementById("dob-error-message").innerHTML =
        "Invalid year! Please enter a year between 1950 and 2010.";
    } else {
      document.getElementById("dob-error-message").innerHTML = "";
    }
  }


    
  function validatePassword() {
    // Get the password input element
    var passwordInput = document.getElementById("password");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("passwordHelp");

    // Regular expression for password validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    // Check if the password is valid
    if (passwordRegex.test(passwordInput.value)) {
        validationMessageDiv.style.color = "inherit"; // Reset color to inherit the parent's color
        passwordInput.classList.remove("redbox");
        passwordInput.classList.add("greenbox");
        return true;
    } else {
        validationMessageDiv.textContent = 'Password must be at least 8 characters long with 1 uppercase letter and 1 special character.'; // Set color to red
        validationMessageDiv.style.setProperty("color", "red", "important");
        passwordInput.classList.remove("greenbox");
        passwordInput.classList.add("redbox");
        return false;
    }
}


function togglePasswordVisibility() {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    // Toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Toggle the icon
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

    // Return false to prevent form submission
    return false;
}



    
    function validatePAN() {
        // Get the PAN input element
        var panInput = document.getElementById("panNumber");
        
        // Get the div element for displaying the validation message
        var validationMessageDiv = document.getElementById("panNumberHelp");
        
        // Regular expression for PAN validation
        var panRegex = /^[A-Z]{5}[0-9]{4}[A-Za-z]$/;
        
        // Check if the PAN is valid
        if (panRegex.test(panInput.value)) {
            validationMessageDiv.style.color = "inherit";
            panInput.classList.remove("redbox");
            panInput.classList.add("greenbox");
            return true;
        } else {
            validationMessageDiv.textContent = 'Invalid PAN Number. Format: ABCDE1234F';
            validationMessageDiv.style.setProperty("color", "red", "important");
            panInput.classList.remove("greenbox");
            panInput.classList.add("redbox");
            return false;
        }
    }

    
    function validatePhoneNumber() {
        // Get the phone number input element
        var phoneNumberInput = document.getElementById("phone_no");
        
        // Get the div element for displaying the validation message
        var validationMessageDiv = document.getElementById("phoneValidationMessage");
        
        // Regular expression for phone number validation (does not start with 0)
        var phoneRegex = /^[6-9]\d{9}$/;
        
        // Check if the phone number is valid
        if (phoneRegex.test(phoneNumberInput.value)) {
            validationMessageDiv.innerHTML = "";
            phoneNumberInput.classList.remove("redbox");
            phoneNumberInput.classList.add("greenbox");
            return true;
        } else {
            validationMessageDiv.innerHTML = "Phone number must have exactly 10 digits and start with '6', '7', '8', '9' ";
            phoneNumberInput.classList.remove("greenbox");
            phoneNumberInput.classList.add("redbox");
            return false;
        }
    }

    
    function validateFileSize() {
        // Get the file input element
        var fileInput = document.getElementById("exampleFormControlFile1");
        
        // Get the div element for displaying the validation message
        var validationMessageDiv = document.getElementById("fileSizeValidationMessage");
        
        // Check if a file is selected
        if (fileInput.files.length > 0) {
            var fileSize = fileInput.files[0].size;
            var fileSizeInMB = fileSize / (1024 * 1024);

            if (fileSizeInMB <= 2) {
                validationMessageDiv.innerHTML = "";
                fileInput.classList.remove("redbox");
                fileInput.classList.add("greenbox");
                return true;
            } else {
                validationMessageDiv.innerHTML = "File size should be less than 2MB.";
                fileInput.value = "";
                fileInput.classList.remove("greenbox");
                fileInput.classList.add("redbox");
                return false;
            }
        }
    }


    function clearFileInput() {
        var fileInput = document.getElementById("exampleFormControlFile1");
        fileInput.value = ''; // Clear the selected file
        if (!fileInput.files || fileInput.files.length === 0) {
            fileInput.classList.add('redbox');
        } else {
            fileInput.classList.remove('redbox');
        }
    }
    
    function validateName() {
        // Get the name input element
        var nameInput = document.getElementById("validationDefault01");
        
        // Get the div element for displaying the validation message
        var validationMessageDiv = document.getElementById("nameValidationMessage");
        
        // Regular expression for name validation (does not contain special characters)
        var nameRegex = /^[a-zA-Z ]*$/;
        
        // Check if the name is valid
        if (nameRegex.test(nameInput.value)) {
            validationMessageDiv.innerHTML = "";
            nameInput.classList.remove("redbox");
            nameInput.classList.add("greenbox");
            return true;
        } else {
            validationMessageDiv.innerHTML = "Name should not contain numbers or special characters.";
            nameInput.classList.remove("greenbox");
            nameInput.classList.add("redbox");
            return false;
        }
    }
    function validateUserName() {
        var username = document.getElementById('validationCustomUsername').value;
        var usernameError = document.getElementById("usernameError");
        var userNameInput = document.getElementById('validationCustomUsername');
        if (username === "") {
            usernameError.textContent = "Username cannot be empty";
            userNameInput.classList.remove("greenbox");
            userNameInput.classList.add("redbox");
        } else {
            var storedFormData;
            try {
                
                var allKeys = Object.keys(localStorage);
                var matchingKey = allKeys.find(key => {
                    try {
                        storedFormData = JSON.parse(localStorage.getItem(key));
                        return storedFormData && storedFormData.username === username;
                    } catch (error) {
                        console.error("Error parsing stored data:", error);
                        return false;
                    }
                });
    
                if (matchingKey) {
                    usernameError.textContent = 'Username already exists. Please choose a different one.';
                    userNameInput.classList.remove("greenbox");
                    userNameInput.classList.add("redbox");
                    usernameError.style.color="red";
                } else {
                    usernameError.textContent = '';
                    userNameInput.classList.remove("redbox");
                    userNameInput.classList.add("greenbox");
                    usernameError.style.color="green";
                }
            } catch (error) {
                console.error("Error retrieving submission key:", error);
            }
        }
    }

    
    function validateForm(event) {
        console.log("Validating form...");
      //  event.preventDefault();
        var formElements = [
            "validationDefault01",
            "exampleInputEmail1",
            "phone_no",
            "dob",
            "selectgender",
            "validationCustom02",
            "select",
            "validationCustomUsername",
            "password",
            "panNumber",
            "exampleFormControlFile1"
        ];
        for (var i = 0; i < formElements.length; i++) {
            var element = document.getElementById(formElements[i]);
            if (!element) {
                console.error("Form element " + formElements[i] + " not found.");
                return;
            }
        }
        if (password.getAttribute("type") === "text") {
            console.error("Password is visible. Please hide the password before submitting the form.");
            return false;
        }
        var picElement = document.getElementById("exampleFormControlFile1");
    var file = picElement.files[0];

    if (!file) {
        console.error("No file selected.");
        return;
    }
        var reader = new FileReader();
        reader.onload = function(event){
            var imgData = event.target.result;
        
        var newUser = {
            name: document.getElementById("validationDefault01").value,
            email: document.getElementById("exampleInputEmail1").value,
            phoneNumber: document.getElementById("phone_no").value,
            dob: document.getElementById("dob").value,
            gender: document.getElementById("selectgender").value,
            occupation: document.getElementById("validationCustom02").value,
            education: document.getElementById("select").value,
            username: document.getElementById("validationCustomUsername").value,
            password: document.getElementById("password").value,
            pan: document.getElementById("panNumber").value,
            pic: imgData,
            picSize: file.size / 1024,
            picType: file.type,
            picName: file.name,
            age: calculateAge(document.getElementById("dob").value),
        };
            var username = document.getElementById("validationCustomUsername").value;
            localStorage.setItem(username, JSON.stringify(newUser));

            alert('The form is submitted successfully');
            //console.log("Form validated successfully!");
            return true; 
            window.location.reload();
        };
        
        reader.readAsDataURL(file);
        
    };





    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - dob.getFullYear();
    
        // Adjust the age if the birthday hasn't occurred yet this year
        if (
            currentDate.getMonth() < dob.getMonth() ||
            (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
        ) {
            age--;
        }
    
        return age;
    }
    

    function searchData() {
        var searchTerm = document.getElementById('searchInput').value;
        

        document.getElementById("existingContent").style.display = "none";
    
        var resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '<h2 class="text-center mt-3 mb-3">Results from search</h2>';
    
        if (/^[a-zA-Z ]+$/.test(searchTerm)) {
            searchTerm = searchTerm.toLowerCase();
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var formData = JSON.parse(localStorage.getItem(key));
    
                if (formData.name.toLowerCase().includes(searchTerm)) {
                    appendResultBlock(resultContainer, key, formData);
                }
            }
        } else if (/^\d+$/.test(searchTerm)) {
            var numberOfDays = parseInt(searchTerm, 10);
            var currentAge = numberOfDays/365;
            //console.log("Searching by days:", numberOfDays);
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var formData = JSON.parse(localStorage.getItem(key));
        
                // Assuming formData.days is the property representing the number of days
                if (formData.age <= currentAge) {
                    appendResultBlock(resultContainer, key, formData);
                }
            }
     } else if (/^\d+kb$/i.test(searchTerm) || /^\d+\s*KB$/i.test(searchTerm) || /^\d+\s*MB$/i.test(searchTerm) || /^\d+mb$/i.test(searchTerm)) {
            var maxSizeInKB = parseInt(searchTerm, 10);
            console.log("Searching by KB:", maxSizeInKB);
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var formData = JSON.parse(localStorage.getItem(key));
                
          
                  if(formData.hasOwnProperty('picSize')){
                    var imageSizeInKB = formData.picSize;
                    
          
                    if (imageSizeInKB >= maxSizeInKB) {
                        appendResultBlock(resultContainer, key, formData);
                    }
                }
            }
        } else {
            // Handle other cases if needed
        }
    
        var refreshButton = document.createElement('button');
        refreshButton.textContent = 'Go Back To Registration page';
        refreshButton.classList.add('btn', 'btn-secondary', 'mt-3', 'mb-3');
        refreshButton.onclick = function () {
            location.reload(true);
        };
    
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('text-center', 'mt-3');
        buttonContainer.appendChild(refreshButton);
    
        resultContainer.appendChild(buttonContainer);
    }
    
    function appendResultBlock(container, key, formData) {
        // Create result container
        var resultContainer = document.createElement('div');
        resultContainer.classList.add('row', 'result-container', 'mb-4');
        resultContainer.style.border = '2px solid lightblue'; 
        resultContainer.style.borderRadius = '10px'; 
        resultContainer.style.padding = '3%';
        resultContainer.style.margin = '6%';
    
        // Create image column
        var imgColumn = document.createElement('div');
        imgColumn.classList.add('col-md-5', 'd-flex', 'align-items-center', 'justify-content-center'); // Center image vertically and horizontally
    
        // Create image element
        var img = document.createElement('img');
        img.src = formData.pic;
        img.classList.add('img-fluid', 'rounded');
        img.style.width = '70%'; // Make the image take up 100% of the column width
        
    
        // Append image to image column
        imgColumn.appendChild(img);
    
        // Create text column for other content
        var textColumn = document.createElement('div');
        textColumn.classList.add('col-md-7');
    
        // Create and append other columns
        Object.keys(formData).forEach(function (columnKey) {
            if (columnKey.toLowerCase() === "pic") {
                return;
            }
    
            var columnValue = (columnKey.toLowerCase() === "pan" || columnKey.toLowerCase() === "password")
                ? formData[columnKey].charAt(0) + '*'.repeat(formData[columnKey].length - 2) + formData[columnKey].charAt(formData[columnKey].length - 1)
                : formData[columnKey];
    
            textColumn.innerHTML += `<pre><strong>${columnKey.padEnd(20)}</strong>: ${columnValue}</pre>`;
        });
    
        // Append image and text columns to result container
        resultContainer.appendChild(imgColumn);
        resultContainer.appendChild(textColumn);
    
        // Append result container to the main container
        container.appendChild(resultContainer);
    }
    