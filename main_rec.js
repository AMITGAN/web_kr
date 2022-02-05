console.log(localStorage);
document.getElementById("login").innerHTML = localStorage.getItem("email");
document.getElementById("password").innerHTML = localStorage.getItem("password");
document.getElementById("phone").innerHTML = localStorage.getItem("phone");
document.getElementById("name").innerHTML = localStorage.getItem("Name");
document.getElementById("sname").innerHTML = localStorage.getItem("SName");
document.getElementById("tname").innerHTML = localStorage.getItem("TName");
document.getElementById("group").innerHTML = "ПИ20-" + localStorage.getItem("group");