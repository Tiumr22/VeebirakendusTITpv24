
//sama funktsioon koos mutujatega
function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let pnimi = document.getElementById("pnimi").value;
    let vastus = document.getElementById("vastus");
    let mees = document.getElementById("mees").value;
    let naine = document.getElementById("naine").value;
    let paev = document.getElementById("sunnipaev").value;



    if (mees.checked) {
        vastus.innerHTML =
            "Tere hommikust, mees " + nimi + " " + pnimi + "!"+
        "sinu sünnipäev on"+paev;
        vastus.style.color = "color";
    }

else if(naine.checked){
    vastus.innerHTML=
        "Tere hommikust, naine " +  nimi+  " "+pnimi+"!"+
        "sinu sünnipäev on"+paev;
    vastus.style.color="color";
}
else {
        vastus.innerHTML = "Palun vali kas mees või naine.";
    }}
