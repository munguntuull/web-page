document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    // 2. Validation (at least 4 нөхцөл ✔️)
    if (name === "") {
        alert("Name is required");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Valid email is required");
        return;
    }

    if (age === "" || isNaN(age)) {
        alert("Age must be a number");
        return;
    }

    if (age < 1 || age > 120) {
        alert("Age must be between 1 and 120");
        return;
    }

    // 3. Console print ✔️
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);

    // 4. AJAX request (XHR) ✔️
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            // 5. Show response message ✔️
            document.getElementById("responseMessage").textContent =
                data.message;

            // 6. Reset form ✔️
            document.getElementById("myForm").reset();
        } else {
            document.getElementById("responseMessage").textContent =
                "Error loading response.";
        }
    };

    // 7. Error handling ✔️
    xhr.onerror = function() {
        console.log("Request failed");
        document.getElementById("responseMessage").textContent =
            "Request failed.";
    };

    xhr.send();
});
