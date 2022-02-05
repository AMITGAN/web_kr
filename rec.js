const form = document.getElementById('form');

let arr = new Array();

function getFormValue(event) {  
   event.preventDefault();  
   const phone = form.querySelector('[name="phone"]'),
         email = form.querySelector('[name="email"]'),
         sname = form.querySelector('[name="SName"]'),
         name = form.querySelector('[name="Name"]'),
         tname = form.querySelector('[name="TName"]'),
         group = form.querySelector('[name="group"]'),
         password1 = form.querySelector('[name="password1"]'),
         password2 = form.querySelector('[name="password2"]');

   const data = {
    phone: phone.value,
    email: email.value,
    sname: sname.value,
    name: name.value,
    tname: tname.value,
    group: group.value,
    password: password1.value
};

   arr.push(data)

   localStorage.setItem("main", arr)
   localStorage.setItem("phone", phone.value)
   localStorage.setItem("email", email.value)
   localStorage.setItem("SName", sname.value)
   localStorage.setItem("Name", name.value)
   localStorage.setItem("TName", tname.value)
   localStorage.setItem("group", group.value)
   localStorage.setItem("password", password1.value)

   console.log(localStorage);
   console.log(arr);

   console.log(arr.length);

   console.log(form.querySelector('[name="email"]').value);
}
form.addEventListener('submit', getFormValue);

function validateComments(input){
   n = 0
   q = 0
   let arr2 = new Array();
   arr2 = ocalStorage.getItem("email");
   console.log(document.querySelector('[name="email2"]').value)
   console.log(document.querySelector('[name="password3"]').value)
   for (i = 0; i < arr2.length; i++)
   {
      if(arr2[i].email == document.querySelector('[name="email2"]').value)
         {
            console.log(arr[i].email);
            n=n+1
            q = i
         }
      if (arr2[i].password == document.querySelector('[name="password3"]').value)
         n=n+1
   }
   if (n < 2)
   {
      input.setCustomValidity("Неверный логин или пароль");
   }
   else
   {
   localStorage.clear()
   localStorage.setItem("phone", arr[q].phone)
   localStorage.setItem("email", arr[q].email)
   localStorage.setItem("SName", arr[q].sname)
   localStorage.setItem("Name", arr[q].name)
   localStorage.setItem("TName", arr[q].tname)
   localStorage.setItem("group", arr[q].group)
   localStorage.setItem("password", arr[q].password)
   }
}
