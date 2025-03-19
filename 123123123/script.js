document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value || "ei valitud";
    let birthdate = document.getElementById("birthdate").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let link = document.getElementById("link").value;
    let hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked'))
        .map(hobby => hobby.value)
        .join(", ") || "ei ole valitud";

    let output = `
<p><strong>Tere hommikust, ${gender} ${name} ${surname}!</strong></p>
<p>Sinu sünnipäev on ${birthdate}</p>
<p>Sinu number on: ${number}</p>
<p>Sinu email on: ${email}</p>
<p>Sinu telefon on: ${phone}</p>
<p>Sinu link on: ${link}</p>
<p>Sinu hobby: ${hobbies}</p>
`;

    document.getElementById("output").innerHTML = output;
});