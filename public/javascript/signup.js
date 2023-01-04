const signup = document.querySelector('#signupButton');
function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    
  
    
    
    if (username && email && password) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(data => {
        console.log("Data: ", data);
        document.location.replace("/dashboard");
  
        // if (data.user) {
         
        // } else {
        //   alert(data.statusText);
        // }
      })
      .catch(err => console.log(err))
      }
  }
  signup.addEventListener('click', signupFormHandler);