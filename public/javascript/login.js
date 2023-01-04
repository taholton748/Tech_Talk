const login = document.querySelector("#loginButton");
function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  

  if (email && password) {
    fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
     
      .then(data => {
        console.log("Data: ", data);

        document.location.replace("/dashboard");

        // if (data.user) {
         
        // } else {
        //   alert(data.statusText);
        // }
        // document.location.replace("/dashboard");
        // if (data.user) {
          
        // } else {
        //   alert(data.statusText);
        // }
      })
      .catch(err => console.log(err))
  }
  
}

login.addEventListener("click", loginFormHandler);
